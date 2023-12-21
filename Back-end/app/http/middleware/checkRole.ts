import { NextFunction } from "connect";
import { Request, Response } from "express";

function CheckRole(role: string) {
    return function (req: Request, res: Response, next: NextFunction) {
        if (role !== res.locals.user.role) res.Json.forbidden();
        else next();
    }
}

export default CheckRole;