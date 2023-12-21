import Blog from '../../../models/mongo/blog.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class siteLandingController extends Controller {
	async index(request: Request, response: Response) {
		try {
			// 1. blogs
			const blogs = await Blog.paginate({ isFavorite: true }, { page: Number(request.query.page) || 1, limit: 16 });

			return response.Json.successful('', {
				blogs,
			});
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new siteLandingController();
