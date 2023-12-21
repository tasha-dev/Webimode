import { Application } from 'express';
import Users from './api/user.js';
import Admins from './api/admin.js';
import WebRoutes from './web/index.js';
import SiteRoutes from "./api/site.js";

export default function Router(app: Application) {
    SiteRoutes(app);
    Admins(app);
    Users(app);
    WebRoutes(app); // * must be last
}