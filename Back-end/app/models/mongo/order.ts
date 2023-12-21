import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IOrder extends mongoose.Document {
    orderDetails: { detail_name: string, detail_value: string }[]
    progress: { progress_name: string, progress_value: number }[],
    price: number,
    user: mongoose.Schema.Types.ObjectId,
    status: "done" | "in-progress"
    deadline: Date
    createdAt: Date,
    updatedAt: Date,
}

export const OrderSchema = new mongoose.Schema({
    orderDetails: [{
        detail_name: {
            type: String,
            required: true,
        },
        detail_value: {
            type: String,
            required: true,
        }
    }],
    orderProgress: [{
        progress_name: {
            type: String,
            required: true
        },
        progress_value: {
            type: Number,
            required: true
        }
    }],
    price: {
        type: Number,
        default: 0,
        required: false
    },
    status: {
        type: String,
        enum: ["done", "in-progress"],
        default: "in-progress",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },
    deadline: {
        type: Date,
        required: false,
        default: null
    },
}, {
    timestamps: true
});


OrderSchema.plugin(paginate);
const Order = mongoose.model<IOrder, mongoose.PaginateModel<IOrder>>('order', OrderSchema);

export default Order;
