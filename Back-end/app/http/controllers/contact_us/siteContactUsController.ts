import { Request, Response } from 'express';
import Controller from '../controller.js';
import Validator from '../../../../services/validator/index.js';
import ContactUs from '../../../models/mongo/contact_us.js';

class siteContactUsController extends Controller {
	async create(request: Request, response: Response) {
		try {
			const validator = new Validator(request);

			validator.body('full_name').required().string().min(1).max(256);
			validator.body('email').required().string().min(1).max(256);
			validator.body('description').required().string().min(1).max(512);

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const { full_name, email, description } = request.body;

			const newContactUs = await ContactUs.create({
				full_name,
				email,
				description,
			});

			if (!newContactUs) return response.Json.error('');

			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new siteContactUsController();
