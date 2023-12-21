import PortFolioCategory from '../../../models/mongo/portfolio_category.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class sitePortfolioCategoryController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const portfolioCategory = await PortFolioCategory.find();
			return response.Json.successful('', portfolioCategory);
		} catch (e) {
			return response.Json.error();
		}
	}

	async show(request: Request, response: Response) {
		try {
			const portfolioCategory = await PortFolioCategory.findById(request.params.id);

			if (!portfolioCategory) return response.Json.error('');

			return response.Json.successful('', portfolioCategory);
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new sitePortfolioCategoryController();
