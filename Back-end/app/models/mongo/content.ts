import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';


export interface IContent extends mongoose.Document {
    text: string,
    rate: number,
    author: mongoose.Schema.Types.ObjectId,
    reply?: this[],
    ref: mongoose.Schema.Types.ObjectId,
    deletedAt?: null | Date,
}


const ContentSchema = new mongoose.Schema({
    text: {
        type: String,
        default: null,
        index: true,
    },
    rate: {
        type: String,
        // index: { unique: true, sparse: true },
        default: null,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    replies: [this],
    ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blogs',
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true,
});

ContentSchema.plugin(paginate);

const Content = mongoose.model<IContent, mongoose.PaginateModel<IContent>>('content', ContentSchema);
export default Content;
