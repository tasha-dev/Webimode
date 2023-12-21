import express, { Application } from "express"
import appRootPath from "app-root-path";
import path from "path";

export default function (app: Application) {
	const Route = express.Router();
	Route.get('/*', (req, res) => {
		return res.sendFile(path.join(appRootPath.toString(), 'public', "index.html"))
	});
	app.use('/', Route);
}
