import Validator from '../../../../services/validator/index.js';
import PortFolio from '../../../models/mongo/portfolio.js';
import PortFolioCategory from '../../../models/mongo/portfolio_category.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class sitePortfolioController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const PortFolios = await PortFolio.paginate({}, { page: Number(request.query.page) || 1, limit: 10 });
			return response.send(PortFolios);
		} catch (e) {
			return response.Json.error();
		}
	}

	async searchable(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.query('category').max(128).nullable();
			validator.query('page').canBeInt().nullable();

			if (validator.fails()) return response.Json.validationError(validator.errors());

			// filter
			const filters: {
				category?: any
			} = {};
			if (request.query.category) filters.category = request.query.category

			const portfolios = await PortFolio.paginate(filters, { page: Number(request.query.page) || 1, limit: 4, sort: "-createdAt" });
			return response.Json.successful("", portfolios);

		} catch (e) {
			return response.Json.error();
		}
	}

	async show(request: Request, response: Response) {
		try {
			const PortfolioCategory = await PortFolioCategory.findById(request.params.id);
			if (!PortfolioCategory) return response.Json.notFound('');
			const PortFolioList = PortFolio.find({ category: PortfolioCategory._id });
			return response.Json.successful('', PortFolioList);
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new sitePortfolioController();
