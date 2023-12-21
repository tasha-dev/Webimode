
import { Request } from "express";


class ExtendAuthorizationHeader {
    private request: Request;
    constructor(req: Request) {
        this.request = req;
    }

    public Bearer(): string {
        const a = this.request.headers.authorization;
        if (!a || !a.split(' ')[1]) return "";
        return a.split(' ')[1];
    }
}

export default ExtendAuthorizationHeader;

