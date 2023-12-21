import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface ITicketMessages extends mongoose.Document {
	ticket: mongoose.Schema.Types.ObjectId;
	author: mongoose.Schema.Types.ObjectId;
	body: string;
	attach: {
		attachType: 'image' | 'file';
		attachValue: string;
	}[];
	deletedAt: null | Date;
}

// department , user , admin, title , desc, status

export const TicketMessagesSchema = new mongoose.Schema(
	{
		ticket: {
			type: mongoose.Schema.Types.ObjectId,
			index: true,
			required: true,
			ref: 'tickets',
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			index: true,
			ref: 'users',
		},
		body: {
			type: String,
			required: false,
		},
		attach: [
			{
				attachType: {
					type: String,
					enum: ['image', 'file'],
					required: true,
				},
				attachValue: {
					type: String,
					required: true,
				},
			},
		],
		deletedAt: {
			type: Date,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

TicketMessagesSchema.plugin(paginate);

const TicketMessage = mongoose.model<ITicketMessages, mongoose.PaginateModel<ITicketMessages>>('ticket_messages', TicketMessagesSchema);

export default TicketMessage;
