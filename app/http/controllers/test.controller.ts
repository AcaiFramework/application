// Packages
import { Request, response } from "server/mod.ts";

export default class TestController {
	public request(request: Request) {
		return response().data(request);
	}

	public view() {
		return response().view("index.html");
	}
}