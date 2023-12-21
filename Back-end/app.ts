import express, { Request, Response, NextFunction } from 'express';
const app = express();
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
// import sassMiddleware from "node-sass-middleware";
import Routes from './routes/http/router.js';
import expressConfig from './webserver/express.js';
import { serverConfig } from './webserver/server.js';
import { errorHandler } from './webserver/errors/index.js';
import mustacheExpress from 'mustache-express';
import timeout from 'connect-timeout';
import { mongoConnection } from './database/mongo/index.js';
import HTTP from 'http';
import SocketIO from './webserver/socket-io/index.js';
import { ExtendRequest } from './providers/request/index.js';
import { ExtendResponse } from './providers/response/index.js';
import InitPassport from './webserver/passport.js';
import passport from 'passport';
import { rateLimit } from 'express-rate-limit'


const server = HTTP.createServer(app);
// * use for Module type.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app.set('trust proxy', 1);
// app.use(express.static(path.join(__dirname, "resources")));
app.use(express.static(path.join(__dirname, '../public')));

// view engine setup
app.set('view engine', 'html');
app.set('views', __dirname + '/resources/views');
app.engine('html', mustacheExpress());

// express
expressConfig(app);
// databases
await mongoConnection(mongoose).connectToMongo();
// timeout handler, must be  before routes
app.use(timeout(30000)); // sec
function haltOnTimedOut(req: Request, res: Response, next: NextFunction) {
	if (!req.timedout) next();
}
app.use(haltOnTimedOut);
// Providers
ExtendRequest(app);
ExtendResponse(app);

// SocketIO.startSocket();
const _SocketIO = SocketIO.startSocketWithHttpServer(server);
app.set('SocketIO', _SocketIO); // set socket for APIs
// Router
// passport
InitPassport();
app.use(passport.initialize());
// app.use(passport.session());

// 

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100,
	standardHeaders: 'draft-7',
	legacyHeaders: false,
});
app.use(limiter);
Routes(app);
serverConfig(app, mongoose, server).startServer();

// app.use(
//   sassMiddleware({
//     src: path.join(__dirname, "public"),
//     dest: path.join(__dirname, "public"),
//     indentedSyntax: true, // true = .sass and false = .scss
//     sourceMap: true,
//   })
// );
// * Error Handler must be last app.use();
errorHandler(app);
