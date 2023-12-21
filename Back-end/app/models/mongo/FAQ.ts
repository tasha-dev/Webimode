import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IFAQ extends mongoose.Document {
	title: string;
	content: string;
}

const FAQSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		content: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

FAQSchema.plugin(paginate);

const FAQ = mongoose.model<IFAQ, mongoose.PaginateModel<IFAQ>>('FAQ', FAQSchema);
export default FAQ;
