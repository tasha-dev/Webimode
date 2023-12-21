import { Response } from "express";


export interface IJsonResponse {
	unauthorized(message?: string): Response;
	validationError(errors: object | Array<object>, message?: string): Response;
	created(model?: object | Array<object>, message?: string): Response;
	successful(message?: string, data?: object | Array<any>): Response;
	updated(message?: string, status?: number): Response;
	forbidden(message?: string): Response;
	error(message?: string, code?: number): Response;
	notFound(message?: string): Response;
}


class JsonResponse implements IJsonResponse {
	private $response: Response;

	constructor(res: Response) {
		this.$response = res;
	}

	unauthorized(message?: string) {
		return this.$response.status(401).json({ message: message || "Unauthorized" });
	}

	validationError(errors: object | Array<object>, message?: string) {
		return this.$response.status(422).json({ errors, message: message || "داده های ورودی را بررسی کنید" });
	}

	created(model?: object | Array<object>, message?: string) {
		return this.$response.status(201).json({ data: model, message: message || "ثبت موفقیت آمیز" });
	}

	successful(message?: string, data?: object | Array<any>) {
		return this.$response.status(200).send({ message, data });
	}

	updated(message?: string, status = 200) {
		return this.$response.status(status).send({ message: message || "ویرایش موفقیت آمیز" });
	}

	forbidden(message?: string) {
		return this.$response.status(403).send({ message: message || "دسترسی شما به این قسمت محدود شده است." });
	}

	error(message?: string, code = 400) {
		return this.$response.status(code).send({ message: message || "خطایی پیش آمده است، لطفا مجددا تلاش نمایید." });
	}

	notFound(message?: string) {
		return this.$response.status(404).send({ message: message || "داده درخواستی پیدا نشد" });
	}



}

export default JsonResponse;