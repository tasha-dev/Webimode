import Validator from '../../../../services/validator/index.js';
import PortFolioCategory from '../../../models/mongo/portfolio_category.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class adminPortfolioCategoryController extends Controller {
	async index(request: Request, response: Response): Promise<Response> {
		try {
			const portfolioCategory = await PortFolioCategory.paginate({}, { page: Number(request.query.page) || 1, limit: 10 });
			// if(portfolioCategory.length === 0) return response.Json
			return response.Json.successful('', portfolioCategory);
		} catch (e) {
			return response.Json.error();
		}
	}

	async show(request: Request, response: Response) {
		try {
			const singlePortfolioCategory = await PortFolioCategory.findById(request.params.id);

			if (!singlePortfolioCategory) return response.Json.notFound('');

			return response.Json.successful('', singlePortfolioCategory);
		} catch (e) {
			return response.Json.error();
		}
	}

	async create(request: Request, response: Response) {
		try {
			const validator = new Validator(request);

			await validator
				.body('title')
				.required()
				.min(1)
				.max(128)
				.custom(async (val) => {
					const _em = await PortFolioCategory.findOne({ title: val });
					if (_em) return 'unique';
					else return true;
				});

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const newPortfolioCategory = await PortFolioCategory.create({
				title: request.body.title,
				createdBy: response.locals.user._id,
			});

			if (!newPortfolioCategory) return response.Json.error('');

			return response.Json.successful('', newPortfolioCategory);
		} catch (e) {
			return response.Json.error();
		}
	}

	async update(request: Request, response: Response) {
		try {
			const validator = new Validator(request);

			validator.body('title').required().min(1).max(128);

			if (validator.fails()) return response.Json.error('');

			const editPortfolioCategory = await PortFolioCategory.findByIdAndUpdate(request.params.id);

			if (!editPortfolioCategory) return response.Json.error('');

			return response.Json.successful('', editPortfolioCategory);
		} catch (e) {
			return response.Json.error();
		}
	}

	async delete(request: Request, response: Response) {
		try {
			const deletePortfolioCategory = await PortFolioCategory.findByIdAndDelete(request.params.id);

			if (!deletePortfolioCategory) return response.Json.error('');

			return response.Json.successful('', deletePortfolioCategory);
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new adminPortfolioCategoryController();
