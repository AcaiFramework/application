// Packages
import Request from "../../../interfaces/Request";

// Models
import User from "../../models/user";

// Validators
import RegisterValidator from "../../validators/register.validator";

export default class AuthController {
	public register(request: Request) {
		const { validated } = new RegisterValidator(request.fields);
		
		return new User();
	}
}