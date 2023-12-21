import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';


export interface IBlog extends mongoose.Document {
	slug: string,
	tags: mongoose.Schema.Types.ObjectId[],
	title: string,
	subtitle: string,
	content: string,
	mainImages?: string[],
	author: mongoose.Schema.Types.ObjectId,
	isFavorite: boolean
	createdAt: Date,
	updatedAt: Date,
}


const BlogSchema = new mongoose.Schema({
	slug: {
		type: String,
		index: { unique: true, sparse: true },
		required: true,
		set: (titleStr: string) => {
			titleStr = titleStr.replace(/^\s+|\s+$/g, '');
			titleStr = titleStr.toLowerCase();
			//persian support
			titleStr = titleStr.replace(/[^a-z0-9_\s-ءاأإآؤئبتثجحخدذرزسشصضطظعغفقكلمنهويةى]#u/, '')
				// Collapse whitespace and replace by -
				.replace(/\s+/g, '-')
				// Collapse dashes
				.replace(/-+/g, '-');
			const slugStr = titleStr;
			return slugStr;
		}
	},
	tags: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'blog_tags'
	}],
	title: {
		type: String,
		required: true,
		index: true,
	},
	subtitle: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
		default: null,
	},
	mainImages: [{
		type: String,
		required: false,
	}],
	isFavorite: {
		type: Boolean,
		default: false,
		required: false
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'admins',
	},
}, {
	timestamps: true,
});

BlogSchema.plugin(paginate);



const Blog = mongoose.model<IBlog, mongoose.PaginateModel<IBlog>>('blogs', BlogSchema);
export default Blog;
