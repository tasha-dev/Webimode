import Languages from '../../lang/index.js';
import AppConfig, { IAllowedLangs } from '../../config/app.js';
import { Request } from 'express';
import BaseValidator from './baseValidator.js';
interface IFields {
	[key: string]: { value: any; errors: string[]; bail: boolean; execute: boolean };
}

class Validator extends BaseValidator {
	private $request: Request;

	constructor(req: Request) {
		super();
		if (AppConfig.locale === 'use_header' && req.headers['accept-language'] && AppConfig.allowedLangs.includes(req.headers['accept-language'] as IAllowedLangs)) this.$lang = req.headers['accept-language'] as IAllowedLangs;
		this.$request = req;
		this.$fields = {};
	}

	input(field: string, value: any) {
		this.$currentField = field;
		this.$fields[field] = { value, errors: [], bail: false, execute: true };
		return this;
	}

	body(field: string) {
		const nested = field.split('.');
		this.$currentField = field;
		if (nested.length > 1) {
			let _$field = this.$request.body;
			nested.forEach((n) => {
				if (_$field?.[n]) {
					_$field = _$field[n];
				}
			});
			this.$fields[field] = { value: _$field, errors: [], bail: false, execute: true };
		} else {
			this.$fields[field] = { value: this.$request.body[field], errors: [], bail: false, execute: true };
		}

		return this;
	}

	param(field: string) {
		this.$currentField = field;
		this.$fields[field] = { value: this.$request.params[field], errors: [], bail: false, execute: true };
		return this;
	}

	query(field: string) {
		this.$currentField = field;
		this.$fields[field] = { value: this.$request.query[field], errors: [], bail: false, execute: true };
		return this;
	}


	// images(maxSizeInMB ? : number) {
	// 	if (this.canExecute() && !this.$ ) this.addError('arr');
	// }
}

export class SocketValidator extends BaseValidator {
	constructor() {
		super();
		this.$fields = {};
	}

	input(field: string, value: any) {
		this.$currentField = field;
		this.$fields[field] = { value, errors: [], bail: false, execute: true };
		return this;
	}
}

export default Validator;
