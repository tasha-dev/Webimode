import Validator from '../../../../services/validator';
import Blog from '../../../models/mongo/blog';
import Controller from '../controller';
import { Request, Response } from 'express';

class siteBlogController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const blogs = await Blog.paginate({}, { page: Number(request.query.page) || 1, limit: 10, sort: '-createdAt' });
			return response.send(blogs);
		} catch (e) {
			return response.Json.error();
		}
	}

	async show(request: Request, response: Response) {
		try {
			const validator = new Validator(request);

			validator.param('id').required().mongoID();

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const blog = await Blog.findById(request.params.id);

			if (!blog) return response.Json.notFound('');

			return response.Json.successful('', blog);
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new siteBlogController();
