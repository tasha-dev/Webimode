import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IPortFolioCategory extends mongoose.Document {
	title: string;
	createdBy: mongoose.Schema.Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}

export const PortFolioCategorySchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			index: { unique: true, sparse: true },
			trim: true,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'admins',
			select: false,
		},
	},
	{
		timestamps: true,
	}
);

PortFolioCategorySchema.plugin(paginate);
const PortFolioCategory = mongoose.model<IPortFolioCategory, mongoose.PaginateModel<IPortFolioCategory>>('portfolio_categories', PortFolioCategorySchema);
export default PortFolioCategory;
