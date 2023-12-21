import Validator from '../../../../services/validator/index.js';
import Comment from '../../../models/mongo/comment.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class userCommentController extends Controller {
	async create(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('content').required().string().min(1).max(256);
			validator.body('rate_value').required().canBeInt().max(5);
			validator.body('rate_count').required().canBeInt();

			if (validator.fails()) return response.Json.validationError(validator.errors());

			const { content, rate_value, rate_count, blogID } = request.body;

			const newComment = await Comment.create({
				content,
				rate_value,
				rate_count,
				author: response.locals.user._id,
				blog: request.body.blogID,
			});
			if (!newComment) return response.Json.error('عملیات با خطا مواجه شد');

			return response.Json.successful('', newComment);
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new userCommentController();
