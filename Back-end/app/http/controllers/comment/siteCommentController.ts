import Comment from '../../../models/mongo/comment.js';
import Controller from '../controller.js';
import { Request, Response } from 'express';

class siteCommentController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const Comments = await Comment.paginate({}, { page: Number(request.query.page) || 1, limit: 10 });
			return response.send(Comments);
		} catch (e) {
			return response.Json.error();
		}
	}

	async show(request: Request, response: Response) {
		try {
			const singleComment = await Comment.findById(request.params);
			if (!singleComment) return response.Json.notFound();
			return response.Json.successful('', singleComment);
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new siteCommentController();
