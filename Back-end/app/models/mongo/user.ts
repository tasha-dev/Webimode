import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IUser extends mongoose.Document {
	fullName: string;
	mobile: string;
	email: string;
	password: string;
	nationalCode?: string;
	avatarAddress?: string;
	isBlocked: boolean;
	registeredWith: 'google' | 'site';
	wallet: {
		amount: number;
		freeze: number;
	};
	deletedAt: null | Date;
	createdAt: Date;
	updatedAt: Date;
}

const UserSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
			index: true,
		},
		mobile: {
			type: String,
			required: true,
			index: { unique: true, sparse: true },
			trim: true,
		},
		email: {
			type: String,
			required: true,
			index: { unique: true, sparse: true },
			trim: true,
			set: (v: string) => v.toLowerCase(),
		},
		password: {
			type: String,
			select: false,
			required: false, // because of using Social(google)
		},
		nationalCode: {
			type: String,
			default: null,
		},
		avatarAddress: {
			type: String,
			required: false,
			default: ""
		},
		isBlocked: {
			// blocked by admin
			type: Boolean,
			default: false,
			required: false,
		},
		registeredWith: {
			type: String,
			required: false,
			default: 'site',
			enum: ['google', 'site'],
		},
		wallet: {
			amount: {
				type: Number,
				default: 0,
				required: false,
			},
			freeze: {
				type: Number,
				default: 0,
				required: false,
			},
		},
		deletedAt: {
			type: Date,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

UserSchema.plugin(paginate);

// UserSchema.virtual('from_request', {
// 	ref: 'request', // Your MonthlyMenu model name
// 	localField: 'favorites', // Your local field, like a `FOREIGN KEY` in RDS
// 	foreignField: '_id', // Your foreign field which `localField` links to. Like `REFERENCES` in RDS
// 	// If `justOne` is true, 'members' will be a single doc as opposed to
// 	// an array. `justOne` is false by default.
// 	justOne: false
// });

// UserSchema.virtual('from_users', {
// 	ref: 'offers',
// 	localField: 'favorites',
// 	foreignField: '_id',
// 	justOne: false
// });

const User = mongoose.model<IUser, mongoose.PaginateModel<IUser>>('users', UserSchema);
export default User;
