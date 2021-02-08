// Packages
import { Request as AcaiServerRequest } 	from "@acai/server";

export default interface HttpRequest extends AcaiServerRequest {
	route: string;
}