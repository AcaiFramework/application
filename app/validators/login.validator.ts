// Packages
import Validator from "@acai/validator";

export default class LoginValidator extends Validator {
	public getSchema () {
		return {
			email	: [ "required", "email" ],
			password: [ "required", "string" ],
		};
	}
}