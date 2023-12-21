import { Application } from "express";
import AuthorizationHeader from "./authorizationHeader.js";

export function ExtendRequest(app: Application) {
    app.use((req, res, next) => {
        req.Authorization = new AuthorizationHeader(req);
        next();
    })
}