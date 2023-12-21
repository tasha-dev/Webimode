import Validator from '../../../../services/validator/index.js';
import PortFolio from '../../../models/mongo/portfolio.js';
import PortFolioCategory from '../../../models/mongo/portfolio_category.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class adminPortfolioController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const portfolio = await PortFolio.paginate({}, { page: Number(request.query.page) || 1, limit: 10, sort: '-createdAt' });
			return response.send(portfolio);
		} catch (e) {
			return response.Json.error();
		}
	}

	async show(request: Request, response: Response) {
		try {
			const portfolio = await PortFolio.findById(request.params.id).populate('category', ['title']);
			if (!portfolio) return response.Json.notFound('');
			return response.Json.successful('', portfolio);
		} catch (e) {
			return response.Json.error();
		}
	}

	async create(request: Request, response: Response) {
		try {
			const validator = new Validator(request);

			validator.body('title').required().string().min(1).max(128);
			validator.body('description').required().string().min(1).max(256);
			validator.body('minPrice').required().canBeInt().max(256);
			validator.body('maxPrice').required().canBeInt().max(256);
			validator
				.body('category')
				.required()
				.mongoID()
				.bail()
				.custom(async (val) => {
					const _em = await PortFolioCategory.findOne({ _id: val });
					if (!_em) return 'exists';
					else return true;
				});

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const { title, description, minPrice, maxPrice, category } = request.body;

			let _images = [];
			if (request.files) {
				_images = (request.files as any).map((img: any) => img.destination.replace('public\\', ''));
			}

			const newPortfolio = await PortFolio.create({
				title,
				description,
				rate: {
					count: 0,
					value: 0,
				},
				minPrice: Number(minPrice),
				maxPrice: Number(maxPrice),
				category,
				createdBy: response.locals.user._id,
				images: _images,
			});

			if (!newPortfolio) return response.Json.error('');
			return response.Json.successful('', newPortfolio);
		} catch (e) {
			return response.Json.error();
		}
	}

	async update(request: Request, response: Response) {
		try {
			const validator = new Validator(request);

			validator.body('title').required().string().min(1).max(128);
			validator.body('description').required().string().min(1).max(256);
			validator.body('minPrice').required().int().max(256);
			validator.body('maxPrice').required().int().max(256);
			validator.body('category').required().mongoID();
			if (validator.fails()) return response.Json.validationError(validator.errors());

			const { title, description, minPrice, maxPrice, category } = request.body;

			const editedPortfolio = await PortFolio.findByIdAndUpdate(request.params.id, {
				title,
				description,
				minPrice,
				maxPrice,
				category,
			});
			if (!editedPortfolio) return response.Json.validationError(validator.errors());
			return response.Json.successful();
		} catch (e) {
			return response.Json.error(`${e}`);
		}
	}

	async delete(request: Request, response: Response) {
		try {
			const deletePortfolio = await PortFolio.findByIdAndDelete(request.params.id);
			if (!deletePortfolio) return response.Json.notFound();
			return response.Json.successful('حذف موفقیت آمیز');
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new adminPortfolioController();
