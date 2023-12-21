import { Application } from "express";
import JsonResponse from "./json.js"

export function ExtendResponse(app: Application) {
    app.use((req, res, next) => {
        const _jsonResponse = new JsonResponse(res);
        res.Json = _jsonResponse;
        next();
    })
}