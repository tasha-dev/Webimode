import User from "../app/models/mongo/user.js";
import Admin from '../app/models/mongo/admin.js';
import { Model } from 'mongoose';


export type GuardType = {
	driver: string;
	model: typeof Model
}

export type GuardsType = {
	[key: string]: GuardType
}

export default {
	defaultGuard: 'api',

	guards: {
		api: {
			driver: 'jwt',
			model: User,
		},
		web: {
			driver: 'access-token',
			model: User,
		},
		users: {
			driver: 'access-token',
			model: User,
		},
		admins: {
			driver: 'access-token',
			model: Admin,
		},
	},
};