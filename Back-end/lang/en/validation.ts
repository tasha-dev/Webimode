

export type LangType = {
	[key: string]: string | undefined;
}

export const enValidations = {
	required: "$attribute is required field",
	min: "گزینه $attribute باید حداقل $a کاراکتر باشد.",
	max: "گزینه $attribute باید حداکثر $a کاراکتر باشد.",
	string: "the $attribute must be string",
	int: "the $attribute must be integer",
	date: "the $attribute must be type of date",
	boolean: "the $attribute must be type of boolean",
	email: "email invalid",
	unique: "this $attribute already taken",
	enum: "$attribute must be one of ",
	sameAs: "$attribute must be same as $a",
	mongoID: "$attribute is not valid object ID",
	file: "$attr must be file",
	between: "$attr must be between $min and $max"
}

export const enAttributes: LangType = {
	mobile: 'mobile',
	email: 'email',
	password: 'password',
	passwordConfirmation: "password confirmation"
}
