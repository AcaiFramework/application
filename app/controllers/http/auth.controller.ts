// Packages
import { DateTime } from "luxon";

// Models
import User		from "../../models/user";
import Token	from "../../models/token";

// Presenters
import Presenter 	from "../../presenters/user.presenter";

// Validators
import RegisterValidator 	from "../../validators/register.validator";
import LoginValidator 		from "../../validators/login.validator";

// Exceptions
import AuthFailException from "../../exceptions/authFail";

export default class AuthController {
	// -------------------------------------------------
	// Main methods
	// -------------------------------------------------

	public async register(request: AppRequest) {
		const { validated } = new RegisterValidator(request.fields);

		// create user
		const user 			= new User(validated);
		user.username 		= validated.name as string;
		user.date_created	= DateTime.now();
		user.date_updated	= DateTime.now();
		await user.save();

		// create login token
		const token 		= new Token();
		token.id_user		= user.id;
		token.date_valid 	= DateTime.now().plus({ days: 2 });
		token.token			= this.generateToken();
		await token.save();

		return Presenter.present(user, {token: token.token});
	}

	public async login(request: AppRequest) {
		const { validated } = new LoginValidator(request.fields);
		const user 			= await User.query().where("email", validated.email as string).first() as User;

		if (!user) {
			throw new AuthFailException();
		}

		// check password validity
		if (!user.password.compare(validated.password as string)) {
			throw new AuthFailException();
		}

		// delete last token
		await Token.query().where("id_user", user.id).delete();

		// create new token
		const token 		= new Token();
		token.id_user		= user.id;
		token.date_valid 	= DateTime.now().plus({ days: 2 });
		token.token			= this.generateToken();
		await token.save();

		return Presenter.present(user, {token: token.token});
	}

	public async show (request: AppRequest) {
		return Presenter.present(request.user);
	}

	// -------------------------------------------------
	// Helper methods
	// -------------------------------------------------

	private generateToken (length = 24) {
		//edit the token allowed characters
		var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
		var b = [];  
		for (var i=0; i<length; i++) {
			var j = (Math.random() * (a.length-1)).toFixed(0);
			b[i] = a[j];
		}
		return b.join("");
	}
}