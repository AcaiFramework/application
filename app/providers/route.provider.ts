// Packages
import config from "@acai/config";
import * as fs from "fs";

export default class RouteProvider {
	public async boot () {
		const instance = config.getEnv("APP_INSTANCE", "all");

		const files = fs.readdirSync('./routes/', {
			encoding: "utf-8",
			withFileTypes: true,
		});

		// load all routes
		for await (const dirEntry of files) {
			if (dirEntry.isFile && (instance === "all" || dirEntry.name.match(`${instance}`))) {
				await import (`../../routes/${dirEntry.name}`);
			}
		}
	}
}
