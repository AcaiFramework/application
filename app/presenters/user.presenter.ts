// Packages
import { Presenter } from "@acai/utils";

// Models
import User from "../models/user";

export default class UserPresenter extends Presenter {
	public async format (model: User) {
		return {
			id: 			model.id,
			name: 			model.name,
			username: 		model.username,
			avatar: 		model.avatar,
			email:			model.email,
		};
	}
}