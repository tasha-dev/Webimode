import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IUserWallet extends mongoose.Document {
	amount: number;
	user: mongoose.Schema.Types.ObjectId;
	deletedAt?: null | Date;
}

const UserWalletSchema = new mongoose.Schema(
	{
		name: {
			type: Number,
			default: 0,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
			select: false,
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

UserWalletSchema.plugin(paginate);
const User = mongoose.model<IUserWallet, mongoose.PaginateModel<IUserWallet>>('user_wallets', UserWalletSchema);
export default User;
