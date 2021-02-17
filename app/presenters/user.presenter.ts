// Packages
import BasePresenter from "@acai/presenter";

// Models
import User from "../models/user";

export default class Presenter extends BasePresenter {
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