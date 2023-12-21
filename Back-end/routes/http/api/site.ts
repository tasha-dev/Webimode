import express, { Application } from 'express';
import portfolio_category from '../../../app/http/controllers/portfolio_category/sitePortfolioCategoryController.js';
import portfolio from '../../../app/http/controllers/portfolio/sitePortfolioController.js';
import siteCommentController from '../../../app/http/controllers/comment/siteCommentController.js';
import siteOrderFormController from '../../../app/http/controllers/order_form/siteOrderFormController.js';
import siteFAQController from '../../../app/http/controllers/FAQ/siteFAQController.js';
import siteContactUsController from '../../../app/http/controllers/contact_us/siteContactUsController.js';
import siteEstimatePriceController from '../../../app/http/controllers/estimate_price/siteEstimatePriceController.js';
import siteLandingController from '../../../app/http/controllers/landing/siteLandingController.js';
import siteBlogController from '../../../app/http/controllers/blog/siteBlogController.js';

// const BaseController = new Controller();
export default function (app: Application) {
	const Router = express.Router();

	//portfolio
	Router.get('portfolio', portfolio.index);
	Router.get('portfolio/searchable', portfolio.searchable);
	Router.get('portfolio/:id', portfolio.show);

	//portfolio-category
	Router.get('portfolio-category', portfolio_category.index);
	Router.get('portfolio-category/:id', portfolio_category.show);

	//contact-us
	Router.post('contact-us', siteContactUsController.create);

	//order-form
	Router.get('order-form', siteOrderFormController.index);
	Router.get('order-form/:id', siteOrderFormController.show);

	//FAQ
	Router.get('FAQ', siteFAQController.index);

	//comment
	Router.get('comments', siteCommentController.index);
	Router.get('comments/:id', siteCommentController.show);

	//blog
	Router.get('blog', siteBlogController.index);
	Router.get('blog/:id', siteBlogController.show);

	//estimate-price
	Router.get('estimate-price', siteEstimatePriceController.index);
	Router.get('estimate-price/:id', siteEstimatePriceController.show);

	Router.get('landing', siteLandingController.index);

	// Router.use([AuthMiddleware.users]);

	// Apply Route
	app.use('/api/site/', Router);
}
