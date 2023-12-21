export type LangType = {
	[key: string]: string | undefined;
};

export const faValidations = {
	required: '$attribute الزامی میباشد',
	min: 'گزینه $attribute باید حداقل $a کاراکتر باشد.',
	max: 'گزینه $attribute باید حداکثر $a کاراکتر باشد.',
	string: '$attribute باید از نوع رشته باشد.',
	int: '$attribute باید از نوع عددی باشد.',
	date: '$attribute باید از نوع تاریخ باشدو.',
	boolean: '$attribute باید از نوع boolean باشد.',
	email: 'ایمیل نا معتبر میباشد.',
	mobile: 'تلفن همراه نا معتبر میباشد..',
	unique: 'این $attribute از قبل ثبت شده است.',
	exists: "$attribute نا معتبر میباشد",
	enum: '$attribute باید یکی ازاین موارد باشد.',
	sameAs: '$attribute باید با $a یکسان باشد.',
	mongoID: '$attribute نا معتبر است.',
	file: '$attribute باید فایل باشد.',
	between: '$attribute باید بین  $a و $b  باشد.',
	arr: '$attribute باید از نوع آرایه باشد.',
	minArr: '$attribute باید از بیشتر $a باشد.',
	maxArr: '$attribute باید از کمتر $a باشد.',
};

export const faAttributes: LangType = {
	mobile: 'موبایل',
	email: 'ایمیل',
	password: 'رمز عبور',
	passwordConfirmation: 'تکرار رمز عبور',
	role: "نقش",
	rate: "امتیاز",
	step: "مرحله"
};
