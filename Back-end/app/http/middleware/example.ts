import { Request, Response, NextFunction } from "express";

function Example(request: Request, response: Response, next: NextFunction) {
    return next();
}

export default Example;