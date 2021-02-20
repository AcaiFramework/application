// Packages
import { response } 		from "@acai/server";
import { CustomException } 	from "@acai/utils";

export default class UnauthorizedException extends CustomException {
	public readonly shouldReport = false;

	public constructor () {
		super("unauthorized", "Unauthorized");
	}
	
	public render (request: AppRequest) {
		if (request.headers.accept === "application/json" || request.headers["content-type"] === "application/json") {
			return response({
				data: {
					message: "Unauthorized"
				},
				status: 403,
			})
		}

		return response({
			data: "<h1>Unauthorized</h1>",
			status: 403,
		});
	}
}