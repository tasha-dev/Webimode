import OrderForm from '../../../models/mongo/order_form.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class adminOrderFormController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const OrderForms = await OrderForm.paginate({}, { page: Number(request.query.page) || 1, limit: 10, sort: 'step' });
			response.Json.successful('', OrderForms);
		} catch (e) {
			return response.Json.error();
		}
	}

	async show(request: Request, response: Response) {
		try {
			const SingleOrderForm = await OrderForm.findById(request.params.id);
			if (!SingleOrderForm) return response.Json.notFound('مرحله مورد نظر یافت نشد');
			return response.Json.successful('', SingleOrderForm);
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new adminOrderFormController();
