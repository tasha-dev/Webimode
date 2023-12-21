import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';


export interface IBlogTags extends mongoose.Document {
    title: string,
    createdBy: mongoose.Schema.Types.ObjectId,
    createdAt: Date,
    updatedAt: Date,
}


const BlogTagsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: { unique: true, sparse: true },
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admins',
    },
}, {
    timestamps: true,
});

BlogTagsSchema.plugin(paginate);
const BlogTags = mongoose.model<IBlogTags, mongoose.PaginateModel<IBlogTags>>('blog_tags', BlogTagsSchema);
export default BlogTags;
