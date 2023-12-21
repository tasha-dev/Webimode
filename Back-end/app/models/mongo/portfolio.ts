import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IPortFolio extends mongoose.Document {
	title: string;
	description: string;
	images: string[];
	rate?: {
		count: number;
		value: number;
	};
	minPrice: number;
	maxPrice: number;
	category: mongoose.Schema.Types.ObjectId;
	createdBy: mongoose.Schema.Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}

export const PortFolioSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		images: [
			{
				type: String,
				required: true,
			},
		],
		rate: {
			count: {
				type: Number,
				required: false,
				default: 0
			},
			value: {
				type: Number,
				required: false,
				default: 0
			},
		},
		minPrice: {
			type: Number,
			default: 0,
		},
		maxPrice: {
			type: Number,
			default: 0,
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'portfolio_categories',
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

PortFolioSchema.plugin(paginate);

const PortFolio = mongoose.model<IPortFolio, mongoose.PaginateModel<IPortFolio>>('portfolio', PortFolioSchema);
export default PortFolio;
