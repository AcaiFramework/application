// Packages
import Request from "../../../interfaces/Request";

// Models
import User from "../../models/user";
import Presenter from "../../presenters/user.presenter";

// Validators
import RegisterValidator from "../../validators/register.validator";

export default class AuthController {
	public register(request: Request) {
		const { validated } = new RegisterValidator(request.fields);
		
		return new User();
	}

	public async index (request: Request) {
		const { perPage, page } = request.query;
		const users = await User.paginate(page as number, perPage as number);

		return Presenter.present(users);
	}

	public async show (request: Request) {
		const user = await User.findOrFail(request.params.id as string);

		return Presenter.present(user);
	}
}