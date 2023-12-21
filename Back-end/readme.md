-------------------------------------------------------------------------------------- Extend Request
How to extend request ?
    1. create new file in webserver/request
    2. add class or function in webserver/request/index.ts
    3. add type to index.d.ts

 -------------------------------------------------------------------------------------- Validation
How to validate request ?
    a) in controller
        1. import Validator
        2. logic
        const validation = await validator.validate(request, [
			body("userName")
				.exists({ checkFalsy: true })
				.withMessage("User name is required")
				.isString()
				.withMessage("User name should be string")
		]);

		if (validation.fails()) {
			// do some stuff
		}

    b) in router
        1. cerate file validation in app/http/validations and export it
            return [...]
        2. add in router like a middleware.
