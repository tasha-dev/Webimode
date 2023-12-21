import Languages from '../../lang/index.js';
import mongoose from 'mongoose';
import AppConfig, { IAllowedLangs } from '../../config/app.js';

interface IObject {
	[key: string]: string;
}

interface IFields {
	[key: string]: { value: any; errors: string[]; bail: boolean; execute: boolean };
}

class BaseValidator {
	protected $fields: IFields = {};
	protected $currentField = '';
	protected $lang: IAllowedLangs = AppConfig.fallback_locale;

	private getLang() {
		return {
			attr: Languages[this.$lang].Attributes,
			validations: Languages[this.$lang].Validations,
		};
	}

	private getFileExtension(fileName: string): string {
		const parts = fileName.split('.');
		return parts[parts.length - 1].toLowerCase();
	}

	bail() {
		// ! Bail method must be always at first method in validations chaining call.
		this.$fields[this.$currentField].bail = true;
		return this;
	}

	public canExecute(): boolean {
		if (this.$fields[this.$currentField].execute === false) return false;
		if (this.$fields[this.$currentField].bail === true && this.$fields[this.$currentField].errors.length > 0) return false;
		else return true;
	}

	private addError(vl: string, replaces: (string | number)[] = [], append = '') {
		let _err = (this.getLang().validations as IObject)[vl]
			.replace('$attribute', (this.getLang().attr as IObject)[this.$currentField] || this.$currentField) // fallback name of attr
			.replace('$a', String(replaces[0]))
			.replace('$b', String(replaces[1]));

		if (append) _err = _err + append;

		this.$fields[this.$currentField].errors.push(_err);
	}

	required() {
		// only false can pass
		if (!this.$fields[this.$currentField].value && this.$fields[this.$currentField].value !== false && this.$fields[this.$currentField].value !== 0) this.addError('required');
		return this;
	}

	min(length: number) {
		let _val = this.$fields[this.$currentField].value;
		if (typeof _val === 'number') _val = _val.toString();
		if (this.canExecute() && (typeof _val === 'boolean' || _val?.length < length)) this.addError('min', [length]);
		return this;
	}

	max(length: number) {
		let _val = this.$fields[this.$currentField].value;
		if (typeof _val === 'number') _val = _val.toString();
		if (this.canExecute() && _val?.length > length) this.addError('max', [length]);
		return this;
	}

	string() {
		if (this.canExecute() && typeof this.$fields[this.$currentField].value !== 'string') this.addError('string');
		return this;
	}

	int() {
		if (this.canExecute() && typeof this.$fields[this.$currentField].value !== 'number') this.addError('int');
		return this;
	}

	canBeInt() {
		if (this.canExecute() && isNaN(Number(this.$fields[this.$currentField].value))) this.addError('int');
		return this;
	}

	between(min: number, max: number) {
		const _intValue = Number(this.$fields[this.$currentField].value);
		if (this.canExecute() && (!_intValue || isNaN(_intValue))) this.addError('between', [min, max]);
		else if (this.canExecute() && (_intValue < min || _intValue > max)) this.addError('between', [min, max]);
		return this;
	}

	date() {
		const x = new Date(this.$fields[this.$currentField].value);
		if ((this.canExecute() && typeof this.$fields[this.$currentField].value !== 'string') || Number.isNaN(Number(x))) this.addError('date');
		return this;
	}

	boolean() {
		if (this.canExecute() && typeof this.$fields[this.$currentField].value === 'boolean') this.addError('boolean');
		return this;
	}

	arr(min?: number | undefined, max?: number | undefined) {
		if (!this.canExecute() || !this.$fields[this.$currentField].value) return this;
		if (this.canExecute() && !Array.isArray(this.$fields[this.$currentField].value)) this.addError('arr');
		if (this.canExecute() && min !== undefined && this.$fields[this.$currentField].value?.length < min) this.addError('minArr', [min]);
		if (this.canExecute() && max !== undefined && this.$fields[this.$currentField].value?.length > max) this.addError('maxArr', [max]);
		return this;
	}

	email() {
		if (this.canExecute() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.$fields[this.$currentField].value)) this.addError('email');
		return this;
	}

	mobile() {
		if (this.canExecute() && !/\b09\d{9}\b/.test(this.$fields[this.$currentField].value)) this.addError('mobile');
		return this;
	}

	sameAs(anotherField: string) {
		if (this.$fields[this.$currentField].value !== this.$fields[anotherField].value) this.addError('sameAs', [(this.getLang().attr as IObject)[anotherField]]);
	}

	nullable() {
		// * should be last one validation
		if (this.$fields[this.$currentField].value === '' || this.$fields[this.$currentField].value === null || this.$fields[this.$currentField].value === undefined) {
			this.$fields[this.$currentField].errors = [];
			this.$fields[this.$currentField].execute = false;
		}
		return this;
	}

	enum(enums: string[]) {
		if (this.$fields[this.$currentField].value && !enums.includes(this.$fields[this.$currentField].value)) this.addError('enum', [], enums.join(', '));
		return this;
	}

	requiredIf(condition: boolean) {
		// ! requiredIf must be under the checked field
		if (condition && !this.$fields[this.$currentField].value) this.addError('required');
		return this;
	}

	async custom(callBack: (value: any) => any): Promise<this> {
		const res = await callBack(this.$fields[this.$currentField].value);
		if (typeof res === 'string') this.addError(res);
		return this;
	}

	mongoID() {
		if (!mongoose.isValidObjectId(this.$fields[this.$currentField].value)) this.addError('mongoID');
		return this;
	}

	// ------------------------------------- other methods -------------------------------------

	fails(): boolean {
		for (const key in this.$fields) {
			if (Object.prototype.hasOwnProperty.call(this.$fields, key)) {
				const element = this.$fields[key];
				if (element.errors.length > 0) {
					return true;
					break;
				}
			}
		}

		return false;
	}

	errors() {
		const _errors: { [key: string]: string[] } = {}; // {email : ['1','2']  }

		for (const key in this.$fields) {
			if (Object.prototype.hasOwnProperty.call(this.$fields, key)) {
				const element = this.$fields[key];
				if (element.errors.length) {
					_errors[key] = element.errors;
				}
			}
		}
		return _errors;
	}
}

export default BaseValidator;
