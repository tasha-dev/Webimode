import express, { Application } from 'express';
import AuthMiddleware from '../../../app/http/middleware/auth.js';
import adminController from '../../../app/http/controllers/admin/adminController.js';
import adminAuthController from '../../../app/http/controllers/auth/adminAuthController.js';
import AdminCommentController from '../../../app/http/controllers/comment/AdminCommentController.js';
import PortFolio from '../../../app/http/controllers/portfolio/adminPortfolioController.js';
import portfolioCategory from '../../../app/http/controllers/portfolio_category/adminPortfolioCategoryController.js';
import adminOrderFormController from '../../../app/http/controllers/order_form/adminOrderFormController.js';
import adminBlogController from '../../../app/http/controllers/blog/adminBlogController.js';
import adminFAQController from '../../../app/http/controllers/FAQ/adminFAQController.js';
import adminContactUsController from '../../../app/http/controllers/contact_us/adminContactUsController.js';
import adminTicketController from '../../../app/http/controllers/ticket/adminTicketController.js';
// import multer from 'multer';
import Storage from '../../../services/storage/index.js';
import adminUserController from '../../../app/http/controllers/user/adminUserController.js';
import adminBlogTagsController from '../../../app/http/controllers/blog_tags/adminBlogTagsController.js';
import adminOrderController from '../../../app/http/controllers/orders/adminOrderController.js';
import Controller from '../../../app/http/controllers/controller.js';
import adminSiteContentController from '../../../app/http/controllers/site_content/adminSiteContentController.js';
import adminEstimatePriceController from '../../../app/http/controllers/estimate_price/adminEstimatePriceController.js';
import ManagerUserController from '../../../app/http/controllers/admin/adminController.js';
const baseController = new Controller();

const PortfolioUploader = Storage.array('portfolio');

export default function (app: Application) {
	const Router = express.Router();
	Router.post('/register', adminController.addAdmin); // ! should remove  in production
	Router.post('/login', adminAuthController.login);

	// <<--------------------------------- use Auth Middleware ------------------------------------------ >>
	Router.use([AuthMiddleware.admins]);

	// admin-controller
	Router.get('admins', ManagerUserController.all);
	Router.get('admins/:id', ManagerUserController.single);
	Router.post('admins', ManagerUserController.addAdmin);
	Router.put('admins/:id', ManagerUserController.updateInfo);
	Router.delete('admins/:id', ManagerUserController.deleteAdmin);

	// Users
	Router.get('users', adminUserController.index);
	Router.get('users/:id', adminUserController.show);
	Router.post('users', adminUserController.create);
	Router.put('users/:id', adminUserController.update);
	Router.delete('users/:id', adminUserController.delete);
	Router.get('users/block', adminUserController.changeBlockStatus);

	// Blogs
	Router.get('blogs', adminBlogController.index);
	Router.get('blogs/:id', adminBlogController.show);
	Router.post('blogs', adminBlogController.create);
	Router.put('blogs/:id', adminBlogController.update);
	Router.delete('blogs/:id', adminBlogController.delete);
	Router.post('blogs/:id', adminBlogController.changeFavoriteStatus);
	Router.get('blogs/:id/comment', adminBlogController.blogComments);

	// blog Tags
	Router.get('blog-tag', adminBlogTagsController.index);
	Router.get('blog-tag/:id', adminBlogTagsController.show);
	Router.post('blog-tag', adminBlogTagsController.create);

	// comments
	Router.get('comments', AdminCommentController.index);
	Router.get('comments/:id', AdminCommentController.show);
	Router.post('comments', AdminCommentController.create);
	Router.put('comments/:id', AdminCommentController.update);
	Router.delete('comments/:id', AdminCommentController.delete);
	Router.post('comments/:id/reply', AdminCommentController.addReply);
	Router.delete('comments/:id/reply/:replyID', AdminCommentController.RemoveReply);

	// portfolio
	Router.get('portfolio', PortFolio.index);
	Router.get('portfolio/:id', PortFolio.show);
	Router.post('portfolio', PortfolioUploader, PortFolio.create);
	Router.put('portfolio/:id', PortFolio.update);
	Router.delete('portfolio/:id', PortFolio.delete);

	// portfolio-category
	Router.get('portfolio-category', portfolioCategory.index);
	Router.get('portfolio-category/:id', portfolioCategory.show);
	Router.post('portfolio-category', portfolioCategory.create);
	Router.put('portfolio-category/:id', portfolioCategory.update);
	Router.delete('portfolio-category/:id', portfolioCategory.delete);

	// order-form
	Router.get('order-form', adminOrderFormController.index);
	Router.get('order-form/:id', adminOrderFormController.show);
	Router.post('order-form', adminOrderFormController.create);
	Router.put('order-form/:id', adminOrderFormController.update);
	Router.delete('order-form/:id', adminOrderFormController.delete);

	//orders
	Router.get('order', adminOrderController.index);
	Router.get('order/:id', adminOrderController.show);
	Router.post('order', adminOrderController.create);
	Router.put('order/:id', adminOrderController.update);

	//FAQ
	Router.get('FAQ', adminFAQController.index);
	Router.get('FAQ/:id', adminFAQController.show);
	Router.post('FAQ', adminFAQController.create);
	Router.put('FAQ/:id', adminFAQController.update);
	Router.delete('FAQ/:id', adminFAQController.delete);

	//Contact-Us
	Router.get('contact-us', adminContactUsController.index);
	Router.get('contact-us/:id', adminContactUsController.show);
	Router.delete('contact-us/:id', adminContactUsController.delete);

	//ticket
	Router.get('tickets', adminTicketController.index);
	Router.get('ticket/:id', adminTicketController.show);
	Router.post('ticket/:id', adminTicketController.answer);
	Router.get('ticket/status/:id', adminTicketController.accept);
	Router.delete('ticket/:id', adminTicketController.delete);

	//blog-tags
	Router.get('blog-tags', adminBlogTagsController.index);
	Router.get('blog-tags/:id', adminBlogTagsController.show);
	Router.post('blog-tags', adminBlogTagsController.create);
	Router.put('blog-tags/:id', adminBlogTagsController.update);
	Router.delete('blog-tags/:id', adminBlogTagsController.delete);

	//site-content
	Router.get('site-content', adminSiteContentController.index);
	Router.get('site-content/:id', adminSiteContentController.show);
	Router.post('site-content', adminSiteContentController.create);
	Router.put('site-content/:id', adminSiteContentController.update);
	Router.delete('site-content/:id', adminSiteContentController.delete);

	//estimate-price
	Router.get('estimate-price', adminEstimatePriceController.index);
	Router.get('estimate-price/:id', adminEstimatePriceController.show);
	Router.post('estimate-price', adminEstimatePriceController.create);
	Router.put('estimate-price/:id', adminEstimatePriceController.update);
	Router.delete('estimate-price/:id', adminEstimatePriceController.delete);

	//admin-controller ???

	Router.all('/*', baseController.notFound);

	// prefix & use
	app.use('/api/admin/', Router);
}
