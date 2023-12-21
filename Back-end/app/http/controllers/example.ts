import Controller from './controller';
import { Request, Response } from 'express';

class Example extends Controller {
    async index(request: Request, response: Response) {
        try {
            //
        } catch (e) {
            return response.Json.error();
        }
    }

    async show(request: Request, response: Response) {
        try {
            //
        } catch (e) {
            return response.Json.error();
        }
    }

    async create(request: Request, response: Response) {
        try {
            //
        } catch (e) {
            return response.Json.error();
        }
    }

    async update(request: Request, response: Response) {
        try {
            //
        } catch (e) {
            return response.Json.error();
        }
    }

    async delete(request: Request, response: Response) {
        try {
            //
        } catch (e) {
            return response.Json.error();
        }
    }
}

export default new Example();
