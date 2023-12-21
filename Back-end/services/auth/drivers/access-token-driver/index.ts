import PersonalAccessToken from '../../../../app/models/mongo/personal_access_token.js';
import bcrypt from 'bcryptjs';
import { Response, Request } from 'express';
import { Model } from 'mongoose';

class AccessTokenDriver {
	private createPlainTextToken(length = 40): string {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
		}
		return result;
	}

	async login<T extends Document, QueryHelpers>(schema: Model<T, QueryHelpers>, userID: string | number) {
		// 1. create token
		const plainTextToken = this.createPlainTextToken();

		// 2. add token to DB and get id
		const result = await PersonalAccessToken.create({
			tokenable_id: userID,
			tokenable_type: schema.modelName,
			expires_at: null, // add
			name: '',
			token: bcrypt.hashSync(plainTextToken, 10),
			abilities: {},
			user: userID,
		});
		// 3. create token => id|token
		return `${result.id}|${plainTextToken}`;
	}

	async check(bearer: string, modelName: string, res: Response, req: Request): Promise<boolean> {
		try {
			if (!bearer) return false;
			const result = await PersonalAccessToken.findById(bearer.split('|')[0]).populate("from_" + modelName).exec();
			if (!result || !result.token) return false;
			const plainTextToken = bearer.split('|')[1];
			if (!plainTextToken || !bcrypt.compareSync(plainTextToken, result.token)) return false;
			if (result.tokenable_type !== modelName) return false;
			res.locals.user = result.from_admins || result.from_users;
			req.user = result.from_admins || result.from_users;
			res.locals.authToken = result;
			return true;
		} catch (e) {
			return false;
		}
	}

	async logout(bearer: string): Promise<boolean> {
		try {
			if (!bearer) return false;
			const result = await PersonalAccessToken.findByIdAndDelete(bearer.split('|')[0]);
			if (result) return true;
			else return false;
		} catch (e) {
			return false
		}
	}


	async logoutOtherDevices(bearer: string, response: Response): Promise<boolean> {
		try {
			if (!bearer || !response.locals.authToken) return false;
			// const tokens = await PersonalAccessToken.deleteMany({ user: response.locals.authToken.user, id: { $nin: [response.locals.authToken._id] } });
			await PersonalAccessToken.deleteMany({ user: response.locals.authToken.user, _id: { $nin: [response.locals.authToken._id] } });
			return true;
		} catch (e) {
			return false
		}

	}
}

export default new AccessTokenDriver();
