import express, { Application } from 'express';
import AuthMiddleware from '../../../app/http/middleware/auth.js';
import userAuthController from '../../../app/http/controllers/auth/userAuthController.js';
import Controller from '../../../app/http/controllers/controller.js';
import userForgetPasswordController from '../../../app/http/controllers/auth/userForgetPasswordController.js';
import Storage from '../../../services/storage/index.js';
import Validator, { SocketValidator } from '../../../services/validator/index.js';
import userCommentController from '../../../app/http/controllers/comment/userCommentController.js';
import userTicketController from '../../../app/http/controllers/ticket/userTicketController.js';
import userSiteContentController from '../../../app/http/controllers/site_content/userSiteContentController.js';
import userProfileController from '../../../app/http/controllers/profile/userProfileController.js';
const baseController = new Controller();

// --
const userAvatarUploader = Storage.single('user_avatar');

export default function (app: Application) {
	const Router = express.Router();
	// base auth
	Router.post('register', userAuthController.register);
	Router.post('login', userAuthController.login);
	Router.post('forget', userForgetPasswordController.sendEmail);
	Router.post('forget/update', userForgetPasswordController.updatePassword);
	// * --------------------------------------- Social Google --------------------------------------- * //
	// Router.get("/auth/google", UserGoogleAuthController.authenticate);
	// Router.get("/auth/google/success", UserGoogleAuthController.success);
	// Router.get("/auth/google/error", UserGoogleAuthController.error);
	// Router.get("/auth/google/callback", UserGoogleAuthController.callback);
	// * --------------------------------------- Social Google --------------------------------------- * //
	// Auth
	Router.use([AuthMiddleware.users]);
	// Tickets
	Router.get('tickets', userTicketController.index);
	Router.post('tickets', userTicketController.create);

	//comments
	Router.post('comments', userCommentController.create);

	//ticket
	Router.get('tickets', userTicketController.index);
	Router.get('ticket/:id', userTicketController.show);
	Router.post('ticket', userTicketController.create);
	Router.post('ticket/answer/:id', userTicketController.answer);
	Router.get('ticket/status/:id', userTicketController.statusToggle);

	//site-content
	Router.get('site-content/:page', userSiteContentController.show);

	//profile
	Router.get('profile/update-info', userProfileController.updateInfo);
	Router.get('profile/update-password', userProfileController.updatePassword);

	//  not found user api.
	Router.all('/*', baseController.notFound);
	// Apply Router
	app.use('/api/user/', Router);
}
