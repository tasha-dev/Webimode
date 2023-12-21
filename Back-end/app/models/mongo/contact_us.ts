import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IContactUs extends mongoose.Document {
	full_name: string;
	email: string;
	user: mongoose.Schema.Types.ObjectId,
	description: string;
	createdAt: Date
	updatedAt: Date
}

const ContactUsSchema = new mongoose.Schema({
	full_name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		require: false,
		select: false,
	},
}, {
	timestamps: true,
});

ContactUsSchema.plugin(paginate);

const ContactUs = mongoose.model<IContactUs, mongoose.PaginateModel<IContactUs>>('contact_us', ContactUsSchema);
export default ContactUs;
