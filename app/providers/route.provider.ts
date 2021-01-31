export default class RouteProvider {
	public async boot () {
		// load all routes
		for await (const dirEntry of Deno.readDir('./routes/')) {
			if (dirEntry.isFile) {
				await import (`../../routes/${dirEntry.name}`);
			}
		}
	}
}