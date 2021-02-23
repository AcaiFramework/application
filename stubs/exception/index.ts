// Packages
import { response } 		from "@acai/server";
import { CustomException } 	from "@acai/utils";

export default class {{ name }}Exception extends CustomException {
	public readonly shouldReport = false;

	public render (request: AppRequest) {
		return "something wrong happened";
	}
}