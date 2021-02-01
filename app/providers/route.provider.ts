// Packages
import config 			from "config/mod.ts";

export default class RouteProvider {
	public async boot () {
		const instance = config.getEnv("APP_INSTANCE", "all");

		// load all routes
		for await (const dirEntry of Deno.readDir('./routes/')) {
			if (dirEntry.isFile && (instance === "all" || dirEntry.name.match(`${instance}`))) {
				await import (`../../routes/${dirEntry.name}`);
			}
		}
	}
}
