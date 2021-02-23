// Packages
import { Presenter } from "@acai/utils";

export default class {{ name }} extends Presenter {
	public async format (model: Record<string, string>) {
		return {
			id: 			model.id,
			name: 			model.label,
		};
	}
}