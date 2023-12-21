import { Request, Response } from 'express';
import Controller from '../controller.js';
import ContactUs from '../../../models/mongo/contact_us.js';

class adminContactUsController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const All = await ContactUs.paginate({}, { page: Number(request.query.page) || 1, limit: 10 });

			return response.Json.successful('', All);
		} catch (e) {
			return response.Json.error();
		}
	}

	async show(request: Request, response: Response) {
		try {
			const Single = await ContactUs.findById(request.params.id);

			if (!Single) return response.Json.notFound('');

			return response.Json.successful('', Single);
		} catch (e) {
			return response.Json.error();
		}
	}

	async delete(request: Request, response: Response) {
		try {
			const deletedContactUs = await ContactUs.findByIdAndDelete(request.params.id);

			if (!deletedContactUs) return response.Json.error();

			return response.Json.successful('حذف فرم با موفقیت انجام شد');
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new adminContactUsController();
