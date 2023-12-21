import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IAdmin extends mongoose.Document {
	fullName: string;
	mobile: string;
	password: string,
	role: 'super-admin' | 'author',
	_doc?: any, // to remove password after created admin in controller
	createdAt: Date,
	updatedAt: Date,
}

export const AdminSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	mobile: {
		type: String,
		required: true,
		unique: true,
		Set: (mobile: string) => {
			const find = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
			const replace = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			let replaceString = mobile;
			let regex;
			for (let i = 0; i < find.length; i++) {
				regex = new RegExp(find[i], "g");
				replaceString = replaceString.replace(regex, replace[i]);
			}
			return replaceString;
		}
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	role: {
		type: String,
		enum: ['super-admin', 'author'],
		default: 'admin'
	},
}, {
	timestamps: true
});


AdminSchema.plugin(paginate);
const Admin = mongoose.model<IAdmin, mongoose.PaginateModel<IAdmin>>('admins', AdminSchema);

export default Admin;
