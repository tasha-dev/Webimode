import User from '../../../models/mongo/user.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';
import auth from '../../../../services/auth/index.js';
import Validator from '../../../../services/validator/index.js';
import bcryptjs from 'bcryptjs'

class ExampleController extends Controller {
	async register(request: Request, response: Response) {
		try {

			const validator = new Validator(request);
			validator.body('full_name').required().min(3).max(64);
			validator.body('password').required().min(8).max(64)
			await validator.body('mobile').required().mobile().bail().custom(async (val) => {
				const _em = await User.findOne({ mobile: val });
				if (_em) return 'unique';
				else return true;
			});
			await validator.body('email').required().email().bail().custom(async (val) => {
				const _em = await User.findOne({ email: val });
				if (_em) return 'unique';
				else return true;
			});

			if (validator.fails()) return response.Json.validationError(validator.errors());

	

			const user = await User.create({
				fullName: request.body.full_name,
				email: request.body.email,
				mobile: request.body.mobile,
				password: bcryptjs.hashSync(String(request.body.password)),
			});
			if (!user) return response.Json.error();

			const user_data = await auth.guard('users').attempt({ email: request.body.email, password: String(request.body.password) });
			return response.Json.successful("", user_data || undefined);
		} catch (e) {
			response.status(500).send(`err ${e}`);
		}
	}

	async login(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('userName').required();
			validator.body('password').min(6).max(32);

			if (validator.fails()) return response.Json.validationError(validator.errors());

			// login by email
			if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.body.userName)) {
				const user = await auth.guard('users').attempt({ email: request.body.userName, password: String(request.body.password) });
				if (!user) return response.Json.error('نام کاربری و یا رمز عبور اشتباه میباشد.');
				return response.send(user);
			} else {
				// login by mobile
				const user = await auth.guard('users').attempt({ mobile: request.body.userName, password: String(request.body.password) });
				if (!user) return response.Json.error('نام کاربری و یا رمز عبور اشتباه میباشد.');
				return response.send(user);
			}
		} catch (e) {
			return response.Json.error();
		}
	}

	async isLogin(request: Request, response: Response) {
		try {
			return response.send(response.locals.user);
		} catch (e) {
			return response.Json.unauthorized();
		}
	}

	async logout(request: Request, response: Response) {
		try {
			await auth.guard('users').logout(request);
			return response.Json.successful('logout successful');
		} catch (e) {
			return response.send(`err`);
		}
	}
}

export default new ExampleController();
