

export type LangType = {
	[key: string]: string | undefined;
}

export const faValidations = {
	required: 'تکمیل گزینه $attribute الزامی میباشد',
	min: "گزینه $attribute باید حداقل $a کاراکتر باشد.",
	max: "گزینه $attribute باید حداکثر $a کاراکتر باشد.",
	string: "گزینه $attribute باید به صورت رشته‌ای باشد",
	boolean: "bool",
	email: "!@#ASdvnjkhjksd",
	unique: "this $attribute already taken",
	enum: "$attribute must be one of ",
	sameAs: "$attribute must be same as $a"
}

export const faAttributes: LangType = {
	mobile: 'موبایل',
	email: 'ایمیل',
	password: 'رمز عبور',
	passwordConfirmation : "تایید رمز عبور"
}
