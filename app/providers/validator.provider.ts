// Packages
import { ProviderData, response }	from "@acai/server";

export default class ValidatorProvider {
	public onError ({ error }: ProviderData) {
		if (error.type === "validation") {
			return response().status(403).data(error.data);
		}
	}
}
