import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface ISetting extends mongoose.Document {
	key: 'request-offer-report' | 'chat-report';
	values: any[];
	previousValue: any;
	updatedBy: mongoose.Schema.Types.ObjectId;
	access: 'super-admin' | 'admin';
}

export const SettingSchema = new mongoose.Schema(
	{
		key: {
			type: String,
			required: true,
			index: { unique: true, sparse: true },
		},
		values: {
			type: Array,
			required: true,
		},
		previousValue: {
			type: Object,
			required: true,
			select: false,
		},
		updatedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'admins',
			select: false,
		},
		access: {
			type: String,
			enum: ['super-admin', 'admin'],
			required: true,
			select: false,
		},
	},
	{
		timestamps: true,
	}
);

SettingSchema.plugin(paginate);

const Setting = mongoose.model<ISetting, mongoose.PaginateModel<ISetting>>('settings', SettingSchema);

export default Setting;
