import { IUser } from './database/mongo/schema/user';
import * as express from 'express';
import AuthorizationHeader from "./providers/request/authorizationHeader";
import { IJsonResponse } from './providers/response/json';
import { EventsMap } from 'socket.io/dist/typed-events';





declare global {
  namespace NodeJS {
    interface Global {
      bootbox: string; // Specify ur type here,use `string` for brief
    }
  }

  namespace Express {
    interface Request {
      Authorization: AuthorizationHeader;
      client: IUser, // ! do not use -user- for this name, because of conflict with user in social passport
      socialUser: any
    }

    interface Response {
      Json: IJsonResponse,
    }
  }
}




declare module 'socket.io' {
  interface Socket {
    user: any, // may use admin or user 
    userConversations: string[]
  }
}


