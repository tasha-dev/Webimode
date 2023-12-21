import mongoose from 'mongoose';


export interface IPersonalAccessToken extends mongoose.Document {
	tokenable_type: string;
	user: mongoose.Schema.Types.ObjectId;
	name: string,
	token: string,
	abilities: object,
	last_used_at: string,
	expires_at: string,
	created_at: string,
	updated_at: string,
	from_admins: any,
	from_users: any
}

const PersonalAccessTokensSchema = new mongoose.Schema({
	tokenable_type: {
		type: String,
		required: true,
		index: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	name: {
		type: String,
		default: '',
	},
	token: {
		type: String,
		required: true,
		unique: true,
	},
	abilities: {
		type: Object,
		default: {},
	},
	last_used_at: {
		type: Date,
		default: mongoose.now,
	},
	expires_at: {
		type: Date,
		default: mongoose.now,
	},
}, { timestamps: true, toJSON: { virtuals: true } });


PersonalAccessTokensSchema.virtual('from_admins', {
	ref: 'admins', // Your MonthlyMenu model name
	localField: 'user', // Your local field, like a `FOREIGN KEY` in RDS
	foreignField: '_id', // Your foreign field which `localField` links to. Like `REFERENCES` in RDS
	// If `justOne` is true, 'members' will be a single doc as opposed to
	// an array. `justOne` is false by default.
	justOne: true
});

PersonalAccessTokensSchema.virtual('from_users', {
	ref: 'users',
	localField: 'user',
	foreignField: '_id',
	justOne: true
});


const PersonalAccessToken = mongoose.model<IPersonalAccessToken>('personal_access_token', PersonalAccessTokensSchema);
export default PersonalAccessToken;
