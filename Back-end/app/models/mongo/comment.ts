import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IComment extends mongoose.Document {
	content: string;
	rate_count: number;
	rate_value: number;
	author: mongoose.Schema.Types.ObjectId;
	blog: mongoose.Schema.Types.ObjectId;
	replies?: this[];
	isFavorite: boolean;
	deletedAt: null | Date;
	createdAt: Date;
	updatedAt: Date;
}

const CommentSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
		},
		blog: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'blogs',
		},
		rate_count: {
			type: Number,
			required: false,
			default: 0,
		},
		rate_value: {
			type: Number,
			required: false,
			default: 0,
		},
		isFavorite: {
			type: Boolean,
			default: false,
			required: false,
		},
		replies: {
			type: [this],
			default: [],
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

CommentSchema.plugin(paginate);

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

const Comment = mongoose.model<IComment, mongoose.PaginateModel<IComment>>('comments', CommentSchema);
export default Comment;
