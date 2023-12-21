import Validator from '../../../../services/validator/index.js';
import Blog from '../../../models/mongo/blog.js';
import Comment from '../../../models/mongo/comment.js';
import User from '../../../models/mongo/user.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

class AdminCommentController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const comments = await Comment.paginate({}, { page: Number(request.query.page) || 1, limit: 10, sort: '-createdAt' });
			return response.Json.successful('', comments);
		} catch (e) {
			return response.Json.error();
		}
	}

	async show(request: Request, response: Response) {
		try {
			const comment = await Comment.findById(request.params.id);
			if (!comment) return response.Json.notFound();
			return response.Json.successful('', comment);
		} catch (e) {
			return response.Json.error();
		}
	}

	async create(request: Request, response: Response) {
		try {
			// create
			const validator = new Validator(request);
			validator.body('content').required().min(5).max(256);
			validator.body('rate_value').required().canBeInt().max(5);
			validator.body('rate_count').required().canBeInt();
			validator.body('mobile').required().mobile();
			validator.body('blogID').required().mongoID();

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const { mobile, content, rate_value, rate_count, blogID } = request.body;

			const _user = await User.findOne({ mobile });
			if (!_user) return response.Json.notFound(`کاربر با موبایل ${mobile} پیدا نشد`);

			const _blog = await Blog.findById(request.body.blogID);
			if (!_blog) return response.Json.notFound('بلاگ مورد نظر یافت نشد');

			const comment = await Comment.create({
				content,
				rate_count: Number(rate_count),
				rate_value: Number(rate_value),
				blog: blogID,
				author: _user._id, // base on user token
				// replies: [],
			});

			if (!comment) return response.Json.error();

			return response.Json.created(comment);
		} catch (e) {
			console.log(e);
			return response.Json.error();
		}
	}

	async update(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.param('id').required().mongoID();
			validator.body('rate_value').required().canBeInt().max(5);
			validator.body('rate_count').required().canBeInt();
			validator.body('content').required().min(2).max(256);

			if (validator.fails()) return response.Json.validationError(validator.errors());

			// find => 404
			const { content, rate_count, rate_value } = request.body;
			const updated = await Comment.findByIdAndUpdate(request.params.id, {
				content,
				rate_count: Number(rate_count),
				rate_value: Number(rate_value),
			});

			if (!updated) return response.Json.error('');
			// successful
			return response.Json.successful('', updated);
		} catch (e) {
			return response.Json.error();
		}
	}

	async delete(request: Request, response: Response) {
		try {
			const comment = await Comment.findByIdAndUpdate(request.params.id, {
				deletedAt: new Date(),
			});

			if (!comment) return response.Json.error('');

			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}

	async addReply(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('content').required().min(5).max(256);
			validator.body('rate_value').required().canBeInt().max(5);
			validator.body('rate_count').required().canBeInt();
			validator.body('mobile').required().mobile();
			validator.body('blogID').required().mongoID(); // find it from here or get it from user ??
			validator.param('id').required();

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const { mobile, content, rate_value, rate_count, blogID } = request.body;

			const _user = await User.findOne({ mobile });
			if (!_user) return response.Json.notFound(`کاربر با موبایل ${mobile} پیدا نشد`);

			const comment = await Comment.findByIdAndUpdate(request.params.id, {
				$push: {
					replies: { _id: new ObjectId(), content, rate_count: Number(rate_count), rate_value: Number(rate_value), blog: blogID, author: _user._id },
				},
			});

			if (!comment) return response.Json.error('');

			return response.Json.successful('افزودن ریپلای موفقیت آمیز بود');
		} catch (e) {
			return response.Json.error();
		}
	}

	async RemoveReply(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.param('id').required().mongoID();
			validator.param('replyID').required().mongoID();

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const comment = await Comment.findByIdAndUpdate(request.params.id, {
				$pull: { replies: { _id: new ObjectId(request.params.replyID) } },
			});

			const failDeletedReply = comment?.replies?.find(({ id }) => id === new ObjectId(request.params.replyID));

			if (failDeletedReply || !comment) return response.Json.error('');

			return response.Json.successful('حذف موفقیت آمیز');
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new AdminCommentController();
