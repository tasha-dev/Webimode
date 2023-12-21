import bcrypt from 'bcryptjs';
import Controller from '../controller.js';
import User from '../../../models/mongo/user.js';
import { Request, Response, response } from 'express'
import Validator from '../../../../services/validator/index.js';
import bcryptjs from 'bcryptjs'
class ManagerUserController extends Controller {

	async index(request: Request, response: Response) {
		try {
			const users = await User.paginate({}, { page: Number(request.query.page) || 1, limit: 10, sort: "-createdAt" });
			return response.send(users);
		} catch (e) {
			return response.Json.error()
		}
	}

	async show(request: Request, response: Response) {
		try {
			const user = await User.findById(request.params.id);
			if (!user) return response.Json.notFound("کاربر پیدا نشد");
			return response.Json.successful("", user);
		} catch (e) {
			return response.Json.error()
		}
	}

	async create(req: Request, res: Response) {
		try {
			const validator = new Validator(req);
			validator.body('fullName').required().min(2).max(32);
			await validator.body('mobile').required().mobile().custom(async val => {
				const vl = await User.findOne({ mobile: val });
				if (vl) return "unique";
				else return true;
			});
			await validator.body('email').required().email().custom(async val => {
				const vl = await User.findOne({ email: val });
				if (vl) return "unique";
				else return true;
			});
			validator.body('password').required().min(8).max(32);
			validator.body('nationalCode').required().canBeInt();
			validator.body('wallet_amount').canBeInt().nullable();
			validator.body('wallet_freeze').canBeInt().nullable();


			if (validator.fails()) return res.Json.validationError(validator.errors());

			// avatarAddress
			let avatarAddress = ""
			if (req.file) avatarAddress = req.file.destination.replace("public\\", "");

			const { fullName, mobile, email, password, nationalCode, wallet_amount, wallet_freeze } = req.body;
			const _wallet_freeze = wallet_freeze ? Number(wallet_freeze) : 0;
			const _wallet_amount = wallet_amount ? Number(wallet_amount) : 0;
			if (_wallet_freeze > _wallet_amount) return res.Json.error('مقدار فریز شده کیف پول نمیتواند کمتر از مقدار موجودی کیف پول باشد.')

			const user = await User.create({
				fullName,
				mobile,
				email,
				password: bcryptjs.hashSync(String(password)),
				nationalCode,
				avatarAddress,
				wallet: {
					amount: _wallet_amount,
					freeze: _wallet_freeze
				}
			});
			if (!user) return res.Json.error();
			return res.Json.successful("create successful", user);
		} catch (e) {
			return res.Json.error()
		}
	}

	async update(req: Request, res: Response) {
		try {
			// 1. validation
			const validator = new Validator(req);
			validator.body('fullName').required().min(2).max(32);
			validator.body('nationalCode').required().canBeInt();
			validator.body('wallet_amount').canBeInt().nullable();
			validator.body('wallet_freeze').canBeInt().nullable();

			if (validator.fails()) return res.Json.validationError(validator.errors());
			// 2. find user
			const user = await User.findById(req.params.id);
			if (!user) return res.Json.notFound();
			// 3. update
			const { fullName, nationalCode, wallet_amount, wallet_freeze } = req.body;
			const _wallet_freeze = wallet_freeze ? Number(wallet_freeze) : user.wallet.freeze;
			const _wallet_amount = wallet_amount ? Number(wallet_amount) : user.wallet.amount;
			if (_wallet_freeze > _wallet_amount) return res.Json.error('مقدار فریز شده کیف پول نمیتواند کمتر از مقدار موجودی کیف پول باشد.')

			const updated = await User.findByIdAndUpdate(req.params.id, {
				fullName,
				nationalCode,
				wallet: {
					amount: _wallet_amount,
					freeze: _wallet_freeze
				}
			});
			if (!updated) return res.Json.notFound();
			return res.Json.updated();
		} catch (e) {
			return res.Json.error()
		}
	}



	async changeBlockStatus(req: Request, res: Response) {
		try {
			const validator = new Validator(req);
			validator.param('id').required().mongoID();
			if (validator.fails()) return res.Json.validationError(validator.errors());
			// find user
			const user = await User.findById(req.params.id);
			if (!user) return res.Json.error('کاربر مورد نظر یافت نشد.');

			// toggle
			let newStatus;
			if (user.isBlocked) newStatus = false;
			else newStatus = true;
			// update
			const updated = await User.findByIdAndUpdate(req.params.id, {
				isBlocked: newStatus
			});
			if (!updated) return res.Json.error();
			return res.Json.successful(newStatus ? "کاربر بلاک شد." : "کاربر آنبلاک شد.");
		} catch (e) {
			return res.send(e);
		}
	}

	async delete(req: Request, res: Response) {
		try {
			const result = await User.findByIdAndUpdate(req.params.id, {
				deletedAt: new Date()
			});
			if (!result) return res.Json.error();
			return res.Json.successful("کاربر با موفقیت حذف شد.");
		} catch (e) {
			return res.Json.error()
		}
	}


}

export default new ManagerUserController();
