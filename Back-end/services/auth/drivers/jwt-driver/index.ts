import { Response } from 'express';
import jwt from 'jsonwebtoken';


interface ParsedToken {
	iss: string
	sub: string
	aud: string | string[]
	iat: number
	exp: number
	azp: string
	g: string
}

class JWTDriver {
	login(guardName: string, modelName: string) {
		return jwt.sign({ g: modelName }, process.env.API_JWT_SECRET, { expiresIn: 86400 }); // use g for check guard name.
	}

	check(bearer: string, modelName: string) {
		try {
			if (!bearer) return false;
			const _j = jwt.verify(bearer, process.env.API_JWT_SECRET) as ParsedToken;
			if (_j.g !== modelName) return false;
			return true;
		} catch (e) {
			return false;
		}
	}
}

export default new JWTDriver();
