import Validator from '../../../../services/validator/index.js';
import EstimatePrice from '../../../models/mongo/estimate_price.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class siteEstimatePriceController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const estimate_price = await EstimatePrice.find();

			return response.Json.successful('', estimate_price);
		} catch (e) {
			return response.Json.error();
		}
	}
	async show(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.param('id').required().mongoID();

			const estimate_price = await EstimatePrice.findById(request.params.id);

			if (!estimate_price) return response.Json.notFound('');

			return response.Json.successful('', estimate_price);
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new siteEstimatePriceController();
