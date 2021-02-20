// Packages
import { response } 		from "@acai/server";
import { CustomException } 	from "@acai/utils";

export default class AuthFailException extends CustomException {
	public readonly shouldReport = false;
	
	public constructor () {
		super("authFail", "User does not exist or password does not match");
	}

	public render (request: AppRequest) {
		if (request.headers.accept === "application/json" || request.headers["content-type"] === "application/json") {
			return response({
				data: {
					message: "User does not exist or password does not match"
				},
				status: 403,
			});
		}

		return response({
			data: "<h1>User does not exist or password does not match</h1>",
			status: 403,
		});
	}
}