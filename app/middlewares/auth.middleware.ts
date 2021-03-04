import MalformedException from "../exceptions/malformed";
import UnauthorizedException from "../exceptions/unauthorized";
import Token from "../models/token";
import User from "../models/user";

export default async function AuthMiddleware (request: AppRequest, next: (r: AppRequest) => Promise<AppRequest>, args?: [string?]) {
	const required = args && args[0] && args[0] === "required";

	// find token from header
	const tokenHeader 	= request.headers["authorization"];

	// no header given
	if (!tokenHeader) {
		if (required) throw new UnauthorizedException();

		return next(request);
	}

	// invalid token
	const tokenString = tokenHeader.split("Bearer ")[1];
	if (!tokenString) {
		throw new MalformedException("Token invalid format");
	}

	// fetch token from database
	const token = await Token.query().where("token", tokenString).first();

	if (required && !token) {
		if (required) throw new UnauthorizedException();

		return next(request);
	}

	// check token validity
	if (token.date_valid.diffNow().milliseconds < 0) {
		throw new UnauthorizedException();
	}

	// fetch user from token
	const user = await token.user.get();

	return next({...request, user});
} 