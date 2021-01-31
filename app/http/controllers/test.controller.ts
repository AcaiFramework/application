// Packages
import { Request, response } 	from "server/mod.ts";

export default class TestController {
	public index() {
		return response().view("index.html");
	}
}