import Validator from '../../../../services/validator/index.js';
import BlogTags from '../../../models/mongo/blog_tags.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class adminBlogTagsController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const tags = await BlogTags.paginate({}, { page: Number(request.query.page) || 1, limit: 10, sort: '-createdAt' });
			return response.send(tags);
		} catch (e) {
			return response.Json.error();
		}
	}

    async show(request: Request, response: Response) {
        try {
            const Tag = await BlogTags.findById(request.params.id).populate("createdBy");
            if (!Tag) return response.Json.notFound();
            return response.Json.successful("", Tag);
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
				.min(2)
				.max(32)
				.bail()
				.custom(async (val) => {
					const _em = await BlogTags.findOne({ title: val });
					if (_em) return 'unique';
					else return true;
				});
			if (validator.fails()) return response.Json.validationError(validator.errors());

			const Tag = await BlogTags.create({
				title: request.body.title,
				createdBy: response.locals.user._id,
			});
			if (!Tag) return response.Json.error();
			return response.Json.created();
		} catch (e) {
			return response.Json.error();
		}
	}

	async update(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			await validator
				.body('title')
				.required()
				.min(2)
				.max(32)
				.bail()
				.custom(async (val) => {
					const _em = await BlogTags.findOne({ title: val });
					if (!_em || _em._id == request.params.id) return true;
					else return 'unique';
				});
			if (validator.fails()) return response.Json.validationError(validator.errors());

			const updated = await BlogTags.findByIdAndUpdate(request.params.id, {
				title: request.body.title,
			});
			if (!updated) return response.Json.error('در هنگام ویرایش هشتگ خطایی رخ داد');
			return response.Json.successful('ویرایش موفقیت آمیز بود');
		} catch (e) {
			return response.Json.error();
		}
	}

	async delete(request: Request, response: Response) {
		try {
			const deleted = await BlogTags.findByIdAndDelete(request.params.id);
			if (!deleted) return response.Json.error();
			return response.Json.successful('حذف موفقیت آمیز بود');
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new adminBlogTagsController();
