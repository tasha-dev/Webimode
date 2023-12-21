import Validator from '../../../../services/validator/index.js';
import Ticket from '../../../models/mongo/ticket.js';
import TicketMessage from '../../../models/mongo/ticket_message.js';
import Controller from '../controller.js';
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

			if (!ticket.deletedAt) return response.Json.notFound('');

			const ticketMessages = await TicketMessage.paginate(
				{
					ticket: ticket._id,
				},
				{ page: Number(request.query.page) || 1, limit: 20, sort: '-createdAt' }
			);

			if (ticket.user === response.locals.user._id) {
				ticket.user_last_seen = new Date();
				const updated_ticket = await ticket.save();
				if (!updated_ticket) return response.Json.error('');
			}

			response.Json.successful('', ticketMessages);
		} catch (e) {
			return response.Json.error();
		}
	}

	async create(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('subject').string().max(128);
			validator.body('text').required().min(3).max(4096);
			if (validator.fails()) return response.Json.validationError(validator.errors());

			// create new Ticket
			const { subject, text } = request.body;
			const ticket = await Ticket.create({
				user: response.locals.user._id,
				subject,
			});

			if (!ticket) return response.Json.error();

			// create Ticket Message
			const ticket_message = await TicketMessage.create({
				ticket: ticket._id,
				author: response.locals.user._id,
				body: text,
			});

			if (!ticket_message) {
				// 1. delete ticket
				Ticket.findByIdAndDelete(ticket._id)
					.then(() => {
						//
					})
					.catch(() => {
						//
					});
				// 2. error response
				return response.Json.error();
			}
			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}

	async answer(request: Request, response: Response) {
		try {
			const validator = new Validator(request);
			validator.body('subject').string().max(128);
			validator.body('text').required().min(3).max(4096);
			if (validator.fails()) return response.Json.validationError(validator.errors());

			const ticket = await Ticket.findById(request.params.id);

			if (!ticket) return response.Json.notFound('');

			if (!ticket.deletedAt && ticket.user === response.locals.user._id && ticket.status !== 'close') {
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

	async statusToggle(request: Request, response: Response) {
		try {
			const ticket = await Ticket.findByIdAndUpdate(request.params.id, {
				status: 'close',
			});

			if (!ticket) return response.Json.error('');
			return response.Json.successful('');
		} catch (e) {
			return response.Json.error();
		}
	}
}

export default new UserTicketController();
