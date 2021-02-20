// Packages
import Validator from "@acai/validator";

export default class RegisterValidator extends Validator {
	protected getSchema () {
		return {
			name	: [ "required", "string" ],
			email	: [ "required", "email" ],
			password: [ "required", "confirmed" ],
		};
	}
}