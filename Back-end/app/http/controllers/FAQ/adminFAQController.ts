import FAQ from '../../../models/mongo/FAQ.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';
import Validator from '../../../../services/validator/index.js';

class adminFAQController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const FAQList = await FAQ.paginate({}, { page: Number(request.query.page) || 1, limit: 10 });
			return response.Json.successful('', FAQList);
		} catch (e) {
			return response.Json.error();
		}
	}
	async show(request: Request, response: Response) {
		try {
			const SingleFAQ = await FAQ.findById(request.params.id);
			if (!SingleFAQ) return response.Json.notFound('');
			return response.Json.successful('', SingleFAQ);
		} catch (e) {
			return response.Json.error();
		}
	}
	async create(request: Request, response: Response) {
		try {
			const validator = new Validator(request);

			validator.body('title').required().string().min(1).max(256);
			validator.body('content').required().string().min(1).max(512);

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const newFAQ = await FAQ.create({
				title: request.body.title,
				content: request.body.content,
			});

			if (!newFAQ) return response.Json.error('');

			return response.Json.successful('', newFAQ);
		} catch (e) {
			return response.Json.error();
		}
	}
	async update(request: Request, response: Response) {
		try {
			const validator = new Validator(request);

			validator.body('title').required().string().min(1).max(256);
			validator.body('content').required().string().min(1).max(512);

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const editedFAQ = await FAQ.findByIdAndUpdate(request.params.id, {
				title: request.body.title,
				content: request.body.content,
			});

			if (!editedFAQ) return response.Json.error('');

			return response.Json.successful('', editedFAQ);
		} catch (e) {
			return response.Json.error();
		}
	}
	async delete(request: Request, response: Response) {
		try {
			const deletedFAQ = await FAQ.findByIdAndDelete(request.params.id);

			if (!deletedFAQ) return response.Json.error('');

			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new adminFAQController();
