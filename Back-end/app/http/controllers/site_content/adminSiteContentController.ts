import Validator from '../../../../services/validator/index.js';
import SiteContent from '../../../models/mongo/site_content.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class adminSiteContentController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const site_contents = await SiteContent.paginate({}, { page: Number(request.query.page) || 1, limit: 10 });

			return response.Json.successful('', site_contents);
		} catch (e) {
			return response.Json.error();
		}
	}

	async show(request: Request, response: Response) {
		try {
			const site_content = await SiteContent.findById(request.params.id);

			if (!site_content) return response.Json.notFound('');

			return response.Json.successful('', site_content);
		} catch (e) {
			return response.Json.error();
		}
	}

	async create(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('content').required().string().min(1).max(4096);
			validator.body('page').required().enum(['contact-us']);
			// validator.body('section').required().string();

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const { content, page, section } = request.body;

			const newSiteContent = await SiteContent.create({
				content,
				page,
				// section,
				createdBy: response.locals.user._id,
			});

			if (!newSiteContent) return response.Json.error('');

			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}

	async update(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('content').required().string().min(1).max(256);
			// validator.body('section').required().string();

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const { content, section } = request.body;

			const newSiteContent = await SiteContent.findByIdAndUpdate(request.params.id, {
				content,
				// section,
			});

			if (!newSiteContent) return response.Json.error('');

			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}

	async delete(request: Request, response: Response) {
		try {
			const deletedSiteContent = await SiteContent.findByIdAndDelete(request.params.id);

			if (!deletedSiteContent) return response.Json.error('');

			return response.Json.successful('حذف با موفقیت آمیز بود');
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new adminSiteContentController();
