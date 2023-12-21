import FAQ from '../../../models/mongo/FAQ.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class siteFAQController extends Controller {
	async index(request: Request, response: Response) {
		const AllFAQ = await FAQ.find();
		return response.Json.successful('', AllFAQ);
	}
}

export default new siteFAQController();
