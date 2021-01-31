// Packages
import Server from "server/mod.ts";
import config from "config/mod.ts";

// interfaces
import ProviderInterface from "server/src/interfaces/provider.ts";
import MiddlewareType from "server/src/interfaces/middleware.ts";

// -------------------------------------------------
// Prepare config
// -------------------------------------------------

await config.fetchEnv(undefined, true, true);

// -------------------------------------------------
// Prepare server
// -------------------------------------------------

const server = new Server({
	filePrefix: "app/http/controllers",
	viewPrefix: "app/views",
});

// get configs
await import ("./config/database.ts");
await import ("./config/provider.ts");
await import ("./config/middleware.ts");

// fetch into server
server.addProviders(config.config.providers 	as ProviderInterface[]);
server.addMiddlewares(config.config.middleware 	as Record<string, MiddlewareType>);
server.addMiddlewares(config.config.global 		as Record<string, MiddlewareType>, true);

// -------------------------------------------------
// Run server
// -------------------------------------------------

const hostname 	= config.env.APP_HOSTNAME 	|| "0.0.0.0";
const port 		= config.env.APP_PORT 		|| 8080;

console.log(`Server started at ${hostname}:${port}`);
server.run(parseInt(port as string), hostname);
