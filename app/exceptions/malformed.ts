// Packages
import { response } 		from "@acai/server";
import { CustomException } 	from "@acai/utils";

export default class MalformedException extends CustomException {
	public readonly shouldReport = false;

	public constructor (reason: string) {
		super("malformedRequest", reason);
	}
	
	public render (request: AppRequest) {
		if (request.headers.accept === "application/json" || request.headers["content-type"] === "application/json") {
			return response({
				data: {
					message: "Malformed request: " + this.message
				},
				status: 400,
			})
		}

		return response({
			data: `<h1>Malformed request: ${this.message}</h1>`,
			status: 400,
		});
	}
}