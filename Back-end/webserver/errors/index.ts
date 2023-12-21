import { Application, NextFunction, Request, Response, Express } from 'express';
// import {  NextFunction, Request, Response , Express } from 'express-serve-static-core';
import createError from 'http-errors';
// must be last app.use();
export const errorHandler = function (app: Application) {

	app.use(function (req: Request, res: Response, next: NextFunction) {
		next(createError(404));
	});

	app.use(function (err: any, req: Request, res: Response, next: NextFunction): void {
		// set locals, only providing error in development
		const error = process.env.APP_DEBUG === 'true' ? err : {};
		if (req.is('application/json')) {
			res.Json.error(error, err.status || 500);
		} else {
			res.locals.message = err.message;
			res.locals.error = error;
			// render the error page
			res.status(err.status || 500);
			res.render('error');
		}

	});
};
