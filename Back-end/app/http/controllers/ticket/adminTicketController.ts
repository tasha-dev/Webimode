import Validator from '../../../../services/validator/index.js';
import Ticket from '../../../models/mongo/ticket.js';
import TicketMessage from '../../../models/mongo/ticket_message.js';
import Controller from '.././controller.js';
import { Request, Response } from 'express';

class UserTicketController extends Controller {
	async index(request: Request, response: Response) {
		try {
			const tickets = await Ticket.paginate(
				{
					user: response.locals.user._id,
				},
				{ page: Number(request.query.page) || 1, limit: 10, sort: '-createdAt' }
			);
			return response.Json.successful('', tickets);
		} catch (e) {
			return response.Json.error();
		}
	}

	async show(request: Request, response: Response) {
		try {
			const ticket = await Ticket.findById(request.params.id);

			if (!ticket) return response.Json.notFound('');

			// if (!ticket.deletedAt) return response.Json.notFound('');

			const ticketMessages = await TicketMessage.paginate(
				{
					ticket: ticket._id,
				},
				{ page: Number(request.query.page) || 1, limit: 20, sort: '-createdAt' }
			);

			if (ticket.admin === response.locals.user._id) {
				ticket.admin_last_seen = new Date();
				const updated_ticket = await ticket.save();
				if (!updated_ticket) return response.Json.error('');
			}

			response.Json.successful('', ticketMessages);
		} catch (e) {
			return response.Json.error();
		}
	}

	async answer(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('text').required().min(3).max(4096);
			if (validator.fails()) return response.Json.validationError(validator.errors());

			const ticket = await Ticket.findById(request.params.id);

			if (!ticket) return response.Json.notFound('');

			if (!ticket.deletedAt && ticket.admin === response.locals.user._id) {
				const ticket_message = await TicketMessage.create({
					ticket: ticket._id,
					author: response.locals.user._id,
					body: request.body.text,
				});
				if (!ticket_message) return response.Json.error('');

				return response.Json.successful('');
			}

			return response.Json.error('');
		} catch (e) {
			return response.Json.error();
		}
	}

	async accept(request: Request, response: Response) {
		try {
			const ticket = await Ticket.findById(request.params.id);

			if (!ticket) return response.Json.notFound('');

			if (!ticket.deletedAt && !ticket.admin) return response.Json.error('');

			ticket.admin = response.locals.user._id;
			const edited_ticket = await ticket.save();
			if (!edited_ticket) return response.Json.error();

			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}

	async delete(request: Request, response: Response) {
		try {
			const ticket = await Ticket.findByIdAndUpdate(request.params.id, {
				deletedAt: new Date(),
			});

			if (!ticket) return response.Json.error('');

			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new UserTicketController();
