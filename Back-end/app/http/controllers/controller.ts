import { Request, Response } from 'express'

export default class Controller {
	public notFound(request: Request, response: Response) {
		return response.Json.notFound();
	}
}
