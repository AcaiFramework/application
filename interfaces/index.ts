// Packages
import { Request as AcaiServerRequest } 	from "@acai/server";

// Models
import User from "../app/models/user";

declare global {
	interface AppRequest extends AcaiServerRequest {
		user: User;
	}
}
