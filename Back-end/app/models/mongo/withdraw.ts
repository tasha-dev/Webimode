import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IWithdraw extends mongoose.Document {
    amount_request: number,
    user: mongoose.Schema.Types.ObjectId,
    confirmed_by: mongoose.Schema.Types.ObjectId,
    description: null | string,
    amount_before_withdraw: number,
    amount_after_withdraw: number,
}

export const WithdrawSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    },
    confirmed_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'admin',
        select: false
    },
    description: {
        type: String,
        default: null
    },
    amount_request: {
        type: Number,
        required: true,
    },
    amount_before_withdraw: {
        type: Number,
        required: true,
    },
    amount_after_withdraw: {
        type: Number,
        required: true,
    },

}, {
    timestamps: true
});


WithdrawSchema.plugin(paginate);

const Withdraw = mongoose.model<IWithdraw, mongoose.PaginateModel<IWithdraw>>('withdraw', WithdrawSchema);

export default Withdraw;
