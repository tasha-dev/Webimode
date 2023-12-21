import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface ISite_Content extends mongoose.Document {
	content: string;
	page: 'contact-us';
	section: string | null;
	createdBy: mongoose.Schema.Types.ObjectId;
}

export const SiteContentSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		page: {
			type: String,
			required: true,
			enum: ['contact-us'],
			unique: true,
		},
		section: {
			type: String,
			required: false,
			default: null,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'admins',
		},
	},
	{
		timestamps: true,
	}
);

SiteContentSchema.plugin(paginate);

const SiteContent = mongoose.model<ISite_Content, mongoose.PaginateModel<ISite_Content>>('site_content', SiteContentSchema);

export default SiteContent;
