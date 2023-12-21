import Validator from '../../../../services/validator/index.js';
import Blog from '../../../models/mongo/blog.js';
import Comment from '../../../models/mongo/comment.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class adminBlogController extends Controller {
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
			const blog = await Blog.findById(request.params.id);

			if (!blog) return response.Json.notFound();

			return response.Json.successful('', blog);
		} catch (e) {
			return response.Json.error();
		}
	}

	async create(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('slug').required().min(2).max(128);
			validator.body('tags').required();
			validator.body('title').required().min(3).max(256);
			validator.body('subtitle').required().min(3).max(256);
			validator.body('content').required().min(3);

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const blog = await Blog.create({
				slug: request.body.slug,
				tags: request.body.tags,
				title: request.body.title,
				subtitle: request.body.subtitle,
				content: request.body.content,
				author: response.locals.user._id,
			});
			if (!blog) return response.Json.error();
			return response.Json.created();
		} catch (e) {
			console.log(e);
			return response.Json.error();
		}
	}

	async update(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('slug').required().min(2).max(128);
			validator.body('tags').required();
			validator.body('title').required().min(3).max(256);
			validator.body('subtitle').required().min(3).max(256);
			validator.body('content').required().min(3);

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const blog = await Blog.findByIdAndUpdate(request.params.id, {
				slug: request.body.slug,
				tags: request.body.tags,
				title: request.body.title,
				subtitle: request.body.subtitle,
				content: request.body.content,
			});

			if (!blog) return response.Json.error();
		} catch (e) {
			return response.Json.error();
		}
	}

	async delete(request: Request, response: Response) {
		try {
			const deleted = await Blog.findByIdAndDelete(request.params.id);
			if (!deleted) return response.Json.error();
			return response.Json.successful('حذف موفقیت آمیز');
		} catch (e) {
			return response.Json.error();
		}
	}

	async changeFavoriteStatus(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.param('id').required().mongoID();
			validator.body('status').required().enum(['0', '1']);
			if (validator.fails()) return response.Json.validationError(validator.errors());

			const blog = await Blog.findById(request.params.id);
			if (!blog) return response.Json.notFound('مقاله مورد نظر یافت نشد.');

			const updated = await Blog.findByIdAndUpdate(request.params.id, {
				isFavorite: request.body.status == '1' ? true : false,
			});
			if (!updated) return response.Json.error();
			return response.Json.updated('وضعیت با موفقیت به روز رسانی شد.');
		} catch (e) {
			return response.Json.error();
		}
	}

	async blogComments(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.param('id').required().mongoID();

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const blog = await Comment.find({ blog: request.params.id });

			return response.Json.successful('', blog);
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new adminBlogController();
