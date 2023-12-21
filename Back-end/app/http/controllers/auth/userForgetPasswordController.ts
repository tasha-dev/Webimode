import bcrypt from 'bcryptjs';
import ForgetPassword from '../../../models/mongo/forget_password.js';
import User from '../../../models/mongo/user.js';
import RandStr from '../../../../helpers/randStr.js';
import Mail from '../../../../services/mail/index.js';
import Validator from '../../../../services/validator/index.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';
import MailConfig from "../../../../config/email.js"
class userForgetPasswordController extends Controller {
    async sendEmail(request: Request, response: Response) {
        try {

            const validator = new Validator(request);
            validator.body("email").required().email();
            if (validator.fails()) return response.Json.validationError(validator.errors());

            const expireAt = new Date();
            expireAt.setDate(expireAt.getDate() + 2);
            const token = RandStr(64);
            const _forget = await ForgetPassword.findOneAndUpdate({
                email: request.body.email,
            }, {
                token: token,
                modelType: 'users',
                expireAt: expireAt,
            }, { upsert: true, new: true });
            if (!_forget) return response.Json.error();
            const mail = new Mail();
            const data = await mail.subject("Kallii Forget Password").text(_forget._id.toString() + "-" + token).send(request.body.email);
            return response.Json.successful("Email sent", {
                data: data
            });
        } catch (e) {
            return response.Json.error(`${e}`);
        }
    }

    async updatePassword(request: Request, response: Response) {
        try {
            const validator = new Validator(request);
            validator.body('password').required().min(6).max(32);
            validator.body("token").required().string().min(5);
            if (validator.fails()) return response.Json.validationError(validator.errors());

            let _token = request.body.token;
            _token = _token.split("-"); // 0: id, 1: token-string
            if (!_token || _token.length < 2) return response.Json.error("bad token");
            const forgetPassword = await ForgetPassword.findById(_token[0]);
            if (!forgetPassword || forgetPassword.modelType !== 'users' || forgetPassword.token !== _token[1])
                return response.Json.error("invalid token");
            const _now = new Date();
            if (forgetPassword.expireAt < _now)
                return response.Json.error("token expired");

            const updated = await User.findOneAndUpdate({
                'email': forgetPassword.email
            }, {
                "password": bcrypt.hashSync(String(request.body.password))
            });

            if (!updated) return response.Json.error();
            await ForgetPassword.findByIdAndDelete(_token[0]);
            return response.Json.successful("Password successfully updated");
        } catch (e) {
            return response.Json.error();
        }
    }
}

export default new userForgetPasswordController();
