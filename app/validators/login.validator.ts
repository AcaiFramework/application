// Packages
import Validator from "@acai/validator";

export default class LoginValidator extends Validator {
	protected getSchema () {
		return {
			email	: [ "required", "email" ],
			password: [ "required", "string" ],
		};
	}
}