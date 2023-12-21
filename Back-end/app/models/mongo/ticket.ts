import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface ITicket extends mongoose.Document {
	user: mongoose.Schema.Types.ObjectId;
	admin: mongoose.Schema.Types.ObjectId | null;
	subject?: string;
	status: 'open' | 'close';
	admin_last_seen: Date;
	user_last_seen: Date;
	deletedAt: Date | null;
	createdAt: Date;
	updatedAt: Date;
}

export const TicketSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
			required: true,
			index: true,
		},
		admin: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'admins',
			default: null,
			required: false,
			index: true,
		},
		subject: {
			type: String,
			required: false,
		},
		status: {
			type: String,
			enum: ['open', 'close'],
			default: 'open',
		},
		admin_last_seen: {
			type: Date,
			default: new Date(),
			require: false,
		},
		user_last_seen: {
			type: Date,
			default: new Date(),
			require: false,
		},
		deletedAt: {
			type: Date,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

TicketSchema.plugin(paginate);
const Ticket = mongoose.model<ITicket, mongoose.PaginateModel<ITicket>>('tickets', TicketSchema);

export default Ticket;
