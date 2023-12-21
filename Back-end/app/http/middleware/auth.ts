import { NextFunction, Request, Response } from 'express';
import Auth from '../../../services/auth/index.js';

class AuthMiddleware {

	// public async api(request: Request, response: Response, next: NextFunction) {
	// 	const check = await Auth.guard('api').check(request, response);
	// 	if (!check) return response.Json.unauthorized();
	// 	else return next();
	// }
	// public async web(request: Request, response: Response, next: NextFunction) {
	// 	const check = await Auth.guard('web').check(request, response);
	// 	if (!check) return response.Json.unauthorized();
	// 	else return next();
	// }

	public async admins(request: Request, response: Response, next: NextFunction) {
		const check = await Auth.guard('admins').check(request, response);
		if (!check) return response.Json.unauthorized();
		else return next();
	}

	public async users(request: Request, response: Response, next: NextFunction) {
		const check = await Auth.guard('users').check(request, response);
		if (!check) return response.Json.unauthorized();
		else return next();
	}

}


export default new AuthMiddleware;



