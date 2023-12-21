import { Request, Response, NextFunction } from "express";

function ProfileCompleted(request: Request, response: Response, next: NextFunction) {
    // ! also used in isLogin api 
    const requiredKeys = ['name', 'lastName', 'paymentMethods', 'countryCode', 'mobile', 'location', 'accountType']
    const user = response.locals.user;
    const checkAllKeys = requiredKeys.every((i) => user[i]);
    if (!checkAllKeys)
        return response.Json.forbidden("Please complete your profile data")
    else return next();
}

export default ProfileCompleted;