import Validator from '../../../../services/validator/index.js';
import EstimatePrice from '../../../models/mongo/estimate_price.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class settingController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const estimate_table = await EstimatePrice.paginate({}, { page: Number(request.query.page) || 1, limit: 10 });

			return response.Json.successful('', estimate_table);
		} catch (e) {
			return response.Json.error();
		}
	}

	async show(request: Request, response: Response) {
		try {
			const estimate_price = await EstimatePrice.findById(request.params.id);

			if (!estimate_price) return response.Json.notFound('');

			return response.Json.successful('', estimate_price);
		} catch (e) {
			return response.Json.error();
		}
	}

	async create(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			
			validator.body('estimate_step').required().enum(['site-subject', 'pages', 'feature', 'system']);

			if (request.body.estimate_data?.length > 0) {
				for (let index = 0; index < request.body.estimate_data.length; index++) {
					const step = request.body.estimate_data[index];
					validator.input('name', step.name).required().string().min(1).max(256);
					validator.input('price', step.price).required().int().min(1).max(128);
					validator.input('additional', step.additional).requiredIf(request.body.estimate_step === 'pages');
					validator
						.input('additional_key', step.additional.key)
						.requiredIf(request.body.estimate_step === 'pages')
						.string()
						.min(1)
						.max(256);
					validator
						.input('additional_value', step.additional.value)
						.requiredIf(request.body.estimate_step === 'pages')
						.canBeInt()
						.min(1)
						.max(256);
				}
			}

			const { estimate_step, estimate_data } = request.body;

			const newEstimateTime = await EstimatePrice.create({
				estimate_step,
				estimate_data,
			});

			if (!newEstimateTime) return response.Json.error('');

			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}

	async update(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('estimate_step').required().enum(['site-subject', 'pages', 'feature', 'system']);

			if (request.body.estimate_data?.length > 0) {
				for (let index = 0; index < request.body.estimate_step.length; index++) {
					validator.input('name', request.body.estimate_step[index].name).required().string().min(1).max(256);
					validator.input('price', request.body.estimate_step[index].price).required().int();
					validator.input('additional', request.body.estimate_step[index].additional).requiredIf(request.body.estimate_step === 'pages');
					validator
						.input('additional_key', request.body.estimate_step[index].additional.key)
						.requiredIf(request.body.estimate_step === 'pages')
						.string()
						.min(1)
						.max(256);
					validator
						.input('additional_value', request.body.estimate_step[index].additional.value)
						.requiredIf(request.body.estimate_step === 'pages')
						.canBeInt()
						.min(1)
						.max(256);
				}
			}

			const { estimate_step, estimate_data } = request.body;

			const newEstimateTime = await EstimatePrice.findByIdAndUpdate(request.params.id, {
				estimate_step,
				estimate_data,
				updatedBy: response.locals.user._id,
			});

			if (!newEstimateTime) return response.Json.error('');

			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}

	async delete(request: Request, response: Response) {
		try {
			const deletedEstimatePrice = await EstimatePrice.findByIdAndDelete(request.params.id);

			if (!deletedEstimatePrice) return response.Json.error('عملیات حذف با خطا مواجه شد');

			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new settingController();
