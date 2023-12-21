import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';
export interface IOrderFormSchema extends mongoose.Document {
	step: number;
	stepTitle: string;
	sections: [{
		description?: string,
		sectionType: "input-ratio",
		items: [{
			itemText: string
		}]
	}],
	// fields: [
	// 	{
	// 		type: string;
	// 		title: string;
	// 		items: {
	// 			title: string;
	// 		}[];
	// 	}
	// ];
	createdAt: Date;
	updatedAt: Date;
}

const OrderFormSchema = new mongoose.Schema(
	{
		step: {
			type: Number,
			enum: [1, 2, 3, 4, 5, 6, 7],
			unique: true,
		},
		stepTitle: {
			type: String,
			required: true,
		},
		sections: [
			{
				description: {
					type: String,
					required: false,
				},
				sectionType: {
					type: String,
					enum: ['input-ratio'],
					required: true,
				},
				items: [
					{
						itemText: {
							type: String,
							required: true,
						},
					},
				],
			},
		],
		// fields: [{
		// 	items: [{
		// 		fieldText: {
		// 			type: String,
		// 			required: true
		// 		},
		// 		// fieldPlaceholder: {
		// 		// 	type: String,
		// 		// 	required: false
		// 		// }
		// 	}],
		// }],
	},
	{
		timestamps: true,
	}
);

OrderFormSchema.plugin(paginate);
const OrderForm = mongoose.model<IOrderFormSchema, mongoose.PaginateModel<IOrderFormSchema>>('order_form', OrderFormSchema);

export default OrderForm;
