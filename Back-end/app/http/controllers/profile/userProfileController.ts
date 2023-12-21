import auth from '../../../../services/auth/index.js';
import Validator from '../../../../services/validator/index.js';
import User from '../../../models/mongo/user.js';
import Controller from '../controller.js';
import bcryptjs from 'bcryptjs';
import { Request, Response } from 'express';

class userProfileController extends Controller {
	async updateInfo(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('full_name').required().min(3).max(64);
			validator.body('national_code').required();
			if (validator.fails()) return response.Json.validationError(validator.errors());

			const updated = await User.findByIdAndUpdate(response.locals.user._id, {
				fullName: request.body.fullName,
				nationalCode: request.body.national_code,
			});
			if (!updated) return response.Json.error();
			return response.Json.successful();
		} catch (e) {
			return response.Json.error();
		}
	}

	async updatePassword(request: Request, response: Response) {
		try {
			// 1. update password
			const validator = new Validator(request);
			validator.body('password').required().min(8).max(64);
			validator.body('password_confirmation').required().sameAs('password');
			if (validator.fails()) return response.Json.validationError(validator.errors());

			const updated = await User.findByIdAndUpdate(response.locals.user._id, {
				password: bcryptjs.hashSync(String(request.body.password)),
			});
			if (!updated) return response.Json.error();
			// 2. logout other devices
			auth.guard('users')
				.logoutOtherDevices(request, response)
				.then(() => {
					//
				})
				.catch(() => {
					//
				});
			return response.Json.successful();
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new userProfileController();
