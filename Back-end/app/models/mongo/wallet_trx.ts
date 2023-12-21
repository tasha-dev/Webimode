import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IUserWallet extends mongoose.Document {
	amount: number;
	description: string;
	wallet: mongoose.Schema.Types.ObjectId;
	user: mongoose.Schema.Types.ObjectId;
}
const UserWalletSchema = new mongoose.Schema(
	{
		amount: {
			type: Number,
			required: true,
		},
		wallet: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'user_wallets',
		},
		description: {
			type: String,
			default: null,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
		},

	},
	{
		timestamps: true,
	}
);

UserWalletSchema.plugin(paginate);
const User = mongoose.model<IUserWallet, mongoose.PaginateModel<IUserWallet>>('wallet_trx', UserWalletSchema);
export default User;
