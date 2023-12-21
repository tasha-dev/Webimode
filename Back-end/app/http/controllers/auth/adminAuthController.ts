import Controller from "../controller.js";
import { Request, Response } from 'express';
import Validator from "../../../../services/validator/index.js";
import auth from "../../../../services/auth/index.js";
class ManagerAuthController extends Controller {

    async login(req: Request, res: Response) {
        try {

            const validator = new Validator(req);
            validator.body('mobile').required().mobile();
            validator.body('password').required().min(6).max(32);
            if (validator.fails()) return res.Json.validationError(validator.errors());

            const admin = await auth.guard("admins").attempt({ mobile: req.body.mobile, password: req.body.password });
            if (!admin) return res.Json.unauthorized("نام کاربری و یا رمز عبور اشتباه است");

            return res.send(admin);
        } catch (e) {
            return res.send(`err ${e}`);
        }

    }

    async isLogin(req: Request, res: Response) {
        return res.send(res.locals.user);
    }

    async logout(req: Request, res: Response) {
        try {
            await auth.guard('admins').logout(req);
            return res.Json.successful("logout successful");
        } catch (e) {
            return res.send(`err ${e}`);
        }
    }

    async logoutOtherDevices(req: Request, res: Response) {
        await auth.guard('admins').logoutOtherDevices(req, res);
        return res.Json.successful("logout other devices successful")
    }
}

export default new ManagerAuthController();
