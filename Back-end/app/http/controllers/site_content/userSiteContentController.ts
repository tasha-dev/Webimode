import Validator from '../../../../services/validator/index.js';
import SiteContent from '../../../models/mongo/site_content.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class userSiteContentController extends Controller {
	async show(request: Request, response: Response) {
		const validator = new Validator(request);
		validator.param('page').required().mongoID();

		if (validator.fails()) return response.Json.validationError(validator.errors());

		const site_content = await SiteContent.find({ page: request.params.page });

		if (!site_content) return response.Json.notFound('محتوای مورد نظر یافت نشد');

		return response.Json.successful('', site_content);
	}
}

export default new userSiteContentController();
