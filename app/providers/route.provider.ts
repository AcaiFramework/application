// Packages
import * as fs 		from "fs";
import * as path 	from "path";
import config 		from "@acai/config";

export default class RouteProvider {
	public async boot () {
		const instance = config.getEnv("APP_INSTANCE", "all");

		const files = fs.readdirSync(config.config.paths.routes, {
			encoding: "utf-8",
			withFileTypes: true,
		});

		// load all routes
		for await (const dirEntry of files) {
			if (dirEntry.isFile() && (instance === "all" || dirEntry.name.match(`${instance}`))) {
				await import (path.join("../../",config.config.paths.routes, dirEntry.name));
			}
		}
	}
}
