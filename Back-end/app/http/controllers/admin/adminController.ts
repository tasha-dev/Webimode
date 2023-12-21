import bcrypt from 'bcryptjs';
import Controller from '../controller.js';
import { NextFunction, Request, Response } from 'express';
import Admin from "../../../models/mongo/admin.js";
import Validator from '../../../../services/validator/index.js';



class ManagerUserController extends Controller {

    async all(request: Request, response: Response) {
        try {
            const admins = await Admin.paginate({}, { page: Number(request.query.page) || 1, limit: 10, sort: "-createdAt" });
            return response.send(admins);
        } catch (e) {
            return response.Json.error();
        }
    }

    async single(req: Request, res: Response) {
        try {
            const admin = await Admin.findById(req.params.id);
            if (!admin) return res.Json.notFound();
            return res.Json.successful("", admin);
        } catch (e) {
            return res.Json.error();
        }
    }

    async updateInfo(req: Request, res: Response) {
        try {

            const validator = new Validator(req);
            validator.body('fullName').min(2).max(32);
            validator.body('password').min(2).max(32);
            if (validator.fails()) return res.Json.validationError(validator.errors());

            // check password is present or not

            const _data: {
                fullName: string,
                password?: string
            } = {
                "fullName": req.body.fullName
            }
            if (req.body.password) _data.password = bcrypt.hashSync(String(req.body.password));
            const updated = await Admin.findByIdAndUpdate(res.locals.user._id, _data);
            if (!updated) return res.Json.error();
            return res.Json.successful();
        } catch (e) {
            return res.Json.error();
        }
    }

    async addAdmin(req: Request, res: Response) {
        try {

            const validator = new Validator(req);
            await validator.body('mobile').required().mobile().bail().custom(async value => {
                const _em = await Admin.findOne({ mobile: value });
                if (_em) return "unique"
                else return true;
            });
            validator.body('password').required().min(8).max(32);
            validator.body('fullName').required().min(2).max(32);
            validator.body('role').required().enum(['author', 'super-admin']);
            if (validator.fails()) return res.Json.validationError(validator.errors());

            const admin = await Admin.create({
                fullName: req.body.fullName,
                mobile: req.body.mobile,
                password: bcrypt.hashSync(String(req.body.password)),
                role: req.body.role
            });
            const { password, ...otherData } = admin._doc;
            return res.Json.created(otherData, "ثبت موفقیت آمیز");
        } catch (e) {
            return res.send(`err ${e}`);
        }
    }

    async deleteAdmin(req: Request, res: Response, next: NextFunction) {
        try {
            if (res.locals.user.id === req.params.id)
                return res.Json.forbidden("شما نمیتوانید حساب خود را حذف نمایید.");
            const result = await Admin.findByIdAndDelete(req.params.id);
            if (!result) return res.Json.error("");
            return res.Json.successful("");
        } catch (e) {
            return res.send(`${e}`);
        }
    }
}

export default new ManagerUserController();
