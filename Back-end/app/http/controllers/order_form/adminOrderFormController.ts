import Validator from '../../../../services/validator/index.js';
import OrderForm from '../../../models/mongo/order_form.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class adminOrderFormController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const OrderForms = await OrderForm.paginate({}, { page: Number(request.query.page) || 1, limit: 10, sort: 'step' });
			response.Json.successful('', OrderForms);
		} catch (e) {
			return response.Json.error(`${e}`);
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

	async create(request: Request, response: Response) {
		try {
			const validator = new Validator(request);

			await validator.body('step').required().canBeInt().between(1, 7).bail().custom(async (val) => {
				const _em = await OrderForm.findOne({ step: val });
				if (_em) return 'unique';
				else return true;
			});
			validator.body('stepTitle').required().string().min(1).max(256);
			validator.body('sections').required().arr(1);

			if (request.body.sections?.length > 0) {
				for (let index = 0; index < request.body.sections.length; index++) {
					validator.input('description', request.body.sections[index].description).required().string().min(1).max(256);
					validator.input('sectionType', request.body.sections[index].sectionType).required().enum(['input-ratio']);
					validator.input('items', request.body.sections[index].items).required().arr(1);
					if (request.body.sections[index].items?.length > 0) {
						for (let j = 0; j < request.body.sections[index].items.length; j++) {
							validator.input('itemText', request.body.sections[index].items[j].itemText).required().string().min(1).max(256);
						}
					}
				}
			}

			console.log(request.body.sections.sectionType);

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const { step, stepTitle, sections } = request.body;
			const newOrderForm = await OrderForm.create({
				step,
				stepTitle,
				sections,
			});

			if (!newOrderForm) return response.Json.error('در هنگام ایجاد فرم خطایی رخ داده است');
			return response.Json.successful("", newOrderForm);
		} catch (e) {
			return response.Json.error(`${e}`);
		}
	}

	async update(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('step').required().canBeInt().between(1, 7);
			validator.body('stepTitle').required().string().min(1).max(256);
			validator.body('sections').required().arr(1);

			if (request.body.sections?.length > 0) {
				for (let index = 0; index < request.body.sections.length; index++) {
					validator.input('description', request.body.sections[index].description).required().string().min(1).max(256);
					validator.input('sectionType', request.body.sections[index].sectionType).required().enum(['input-ratio']);
					validator.input('items', request.body.sections[index].items).required().arr(1);
					if (request.body.sections[index].items?.length > 0) {
						for (let j = 0; j < request.body.sections[index].items.length; j++) {
							validator.input('itemText', request.body.sections[index].items[j].itemText).required().string().min(1).max(256);
						}
					}
				}
			}
			if (validator.fails()) return response.Json.validationError(validator.errors());

			const { step, stepTitle, sections } = request.body;

			const editedOrderForm = await OrderForm.findByIdAndUpdate(request.params.id, {
				step,
				stepTitle,
				sections,
			});
			if (!editedOrderForm) return response.Json.error('در هنگام ویرایش فرم خطایی رخ داده است');
			return response.Json.successful();
		} catch (e) {
			return response.Json.error();
		}
	}

	async delete(request: Request, response: Response) {
		try {
			const deletedOrderForm = await OrderForm.findByIdAndDelete(request.params.id);
			// must have a condition for checking successful delete or not ???
			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new adminOrderFormController();
