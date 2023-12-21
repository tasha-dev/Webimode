import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IEstimatePrice extends mongoose.Document {
	estimate_step: 'site-subject' | 'pages' | 'feature' | 'system';
	estimate_data: {
		name: string;
		price: number;
		additional: {
			key: string;
			value: string;
		}[];
	}[];
	updatedBy: mongoose.Schema.Types.ObjectId;
}

const EstimatePriceSchema = new mongoose.Schema(
	{
		estimate_step: {
			type: String,
			enum: ['site-subject', 'pages', 'feature', 'system'],
			required: true,
		},
		estimate_data: [
			{
				name: {
					type: String,
					required: true,
				},
				price: {
					type: Number,
					required: true,
				},
				additional: {
					key: {
						type: String,
						required: false,
					},
					value: {
						type: String,
						required: false,
					},
				},
			},
		],
		updatedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'admins',
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

EstimatePriceSchema.plugin(paginate);

const EstimatePrice = mongoose.model<IEstimatePrice, mongoose.PaginateModel<IEstimatePrice>>('estimate_price', EstimatePriceSchema);
export default EstimatePrice;
