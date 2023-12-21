import { Response } from 'express';
import AuthConfig, { GuardType, GuardsType } from '../../config/auth.js';
import bcrypt from 'bcryptjs';
import { Request } from 'express'
import JWTDriver from './drivers/jwt-driver/index.js';
import AccessTokenDriver from './drivers/access-token-driver/index.js';

class Auth {

	// private test: AuthConfigType;
	private Guard: GuardType;

	private GuardName: string;

	constructor() {
		this.Guard = (AuthConfig.guards as GuardsType)[AuthConfig.defaultGuard];
		this.GuardName = AuthConfig.defaultGuard;
	}

	guard(guard: string) {
		const _guard = (AuthConfig.guards as GuardsType)[guard];
		if (!_guard) throw new Error(`Guard with name ${guard} not found.`);
		this.Guard = _guard;
		this.GuardName = guard;
		return this;
	}

	async attempt(credentials: { username?: string, email?: string, mobile?: string, password: string, }) {
		// 1. check credentials

		const _model = await this.Guard.model
			.findOne({ [Object.keys(credentials)[0]]: Object.values(credentials)[0] })
			.select('+password')
			.exec();
		if (!_model || !bcrypt.compareSync(Object.values(credentials)[1], _model.password) || _model.deletedAt) return false;

		// 2. remove password field.
		_model.password = undefined;

		// 2. auth client
		let _t;
		switch (this.Guard.driver) {
			case 'jwt':
				return {
					token: JWTDriver.login(this.GuardName, this.Guard.model.modelName),
					user: _model,
				};
				break;

			case 'access-token':
				_t = await AccessTokenDriver.login(this.Guard.model, _model._id);
				return {
					token: _t,
					user: _model,
				};
				break;
			default:
				throw new Error('bad driver exception');
		}
	}

	async check(request: Request, response: Response) {
		let _token;

		switch (this.Guard.driver) {
			case 'jwt':
				return JWTDriver.check(request.Authorization.Bearer(), this.Guard.model.modelName);
				break;

			case 'access-token':
				_token = await AccessTokenDriver.check(request.Authorization.Bearer(), this.Guard.model.modelName, response, request);
				return _token;
				break;
			default:
				throw new Error('bad driver exception');
		}
	}

	async logout(request: Request) {
		let loggedOut = false;
		switch (this.Guard.driver) {
			case 'access-token':
				loggedOut = await AccessTokenDriver.logout(request.Authorization.Bearer());
				return loggedOut;
				break;
			default:
				throw new Error('bad driver exception');
		}
	}

	async logoutOtherDevices(request: Request, response: Response) {
		switch (this.Guard.driver) {
			case 'access-token':
				await AccessTokenDriver.logoutOtherDevices(request.Authorization.Bearer(), response);
				return;
				break;
			default:
				throw new Error('bad driver exception');
		}
	}

	async loginUsingEmail(email: string) {
		const _model = await this.Guard.model.findOne({ email }).exec();
		if (!_model || _model.deletedAt) return false;
		// 2. auth client
		let _t;
		switch (this.Guard.driver) {
			case 'jwt':
				return {
					token: JWTDriver.login(this.GuardName, this.Guard.model.modelName),
					user: _model,
				};
				break;

			case 'access-token':
				_t = await AccessTokenDriver.login(this.Guard.model, _model._id);
				return {
					token: _t,
					user: _model,
				};
				break;
			default:
				throw new Error('bad driver exception');
		}
	}
}

export default new Auth();
