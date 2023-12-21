import Validator from '../../../../services/validator/index.js';
import Order from '../../../models/mongo/order.js';
import User from '../../../models/mongo/user.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class AdminOrderController extends Controller {
    async index(request: Request, response: Response) {
        try {
            const orders = await Order.paginate({}, { page: Number(request.query.page) || 1, limit: 10, sort: "-createdAt" });
            return response.Json.successful("", orders);
        } catch (e) {
            return response.Json.error();
        }
    }

    async show(request: Request, response: Response) {
        try {
            const order = await Order.findById(request.params.id);
            if (!order) return response.Json.notFound();
            return response.Json.successful("", order);
        } catch (e) {
            return response.Json.error();
        }
    }

    async create(request: Request, response: Response) {
        try {

            const validator = new Validator(request);
            validator.body('mobile').required().mobile();
            validator.body('orderDetails').required().arr(1);
            validator.body("price").canBeInt().nullable();
            validator.body('deadline').date().nullable();

            if (request.body.orderDetails?.length > 0) {
                for (let index = 0; index < request.body.orderDetails.length; index++) {
                    const detail = request.body.orderDetails[index];
                    validator.input(`detail.${index}.detail_name`, detail.detail_name).required().string().min(2);
                    validator.input(`detail.${index}.detail_value`, detail.detail_value).required().string().min(2);
                }
            }
            validator.body('orderProgress').arr();
            if (request.body.orderProgress?.length > 0) {
                for (let index = 0; index < request.body.orderProgress?.length; index++) {
                    const progress_item = request.body.orderProgress[index];
                    validator.input(`orderProgress.${index}.progress_name`, progress_item.progress_name).required().string().min(2).max(64);
                    validator.input(`orderProgress.${index}.progress_value`, progress_item.progress_value).required().canBeInt().between(0, 100);
                }
            }

            if (validator.fails()) return response.Json.validationError(validator.errors());
            // user
            const user = await User.findOne({ mobile: request.body.mobile });
            if (!user) return response.Json.notFound(`کاربر با شماره ${request.body.mobile} پیدا نشد  `)

            const order = await Order.create({
                orderDetails: request.body.orderDetails,
                orderProgress: request.body.orderProgress?.length > 0 ? request.body.orderProgress : [],
                user: user._id,
                price: request.body.price,
                deadline: request.body.deadline
            });
            if (!order) return response.Json.error();
            return response.Json.successful("", order);
        } catch (e) {
            return response.Json.error();
        }
    }

    async update(request: Request, response: Response) {
        try {
            const validator = new Validator(request);
            validator.param('id').required().mongoID();
            validator.body('orderDetails').required().arr(1);
            validator.body("price").canBeInt().nullable();
            validator.body('deadline').date().nullable();

            if (request.body.orderDetails?.length > 0) {
                for (let index = 0; index < request.body.orderDetails.length; index++) {
                    const detail = request.body.orderDetails[index];
                    validator.input(`detail.${index}.detail_name`, detail.detail_name).required().string().min(2);
                    validator.input(`detail.${index}.detail_value`, detail.detail_value).required().string().min(2);
                }
            }
            validator.body('orderProgress').arr();
            if (request.body.orderProgress?.length > 0) {
                for (let index = 0; index < request.body.orderProgress?.length; index++) {
                    const progress_item = request.body.orderProgress[index];
                    validator.input(`orderProgress.${index}.progress_name`, progress_item.progress_name).required().string().min(2).max(64);
                    validator.input(`orderProgress.${index}.progress_value`, progress_item.progress_value).required().canBeInt().between(0, 100);
                }
            }

            if (validator.fails()) return response.Json.validationError(validator.errors());

            const updated = await Order.findByIdAndUpdate(request.params.id, {
                orderDetails: request.body.orderDetails,
                orderProgress: request.body.orderProgress?.length > 0 ? request.body.orderProgress : [],
                price: request.body.price,
                deadline: request.body.deadline
            });
            if (!updated) return response.Json.error();
            return response.Json.updated();
        } catch (e) {
            return response.Json.error();
        }
    }
}

export default new AdminOrderController();
