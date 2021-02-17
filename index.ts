// Packages
import Server from "@acai/server";
import config from "@acai/config";

// interfaces
import ProviderInterface 	from "@acai/server/src/interfaces/provider";
import MiddlewareType 		from "@acai/server/src/interfaces/middleware";

async function main () {
	// -------------------------------------------------
	// Prepare config
	// -------------------------------------------------
	
	await config.fetchEnv(undefined, true, true);
	
	// -------------------------------------------------
	// Prepare server
	// -------------------------------------------------
	
	// get configs
	await import ("./config/paths");
	await import ("./config/database");
	await import ("./config/provider");
	await import ("./config/middleware");
	
	const server = new Server({
		filePrefix: config.config.paths.controllers,
		viewPrefix: config.config.paths.view,
	});
	
	// fetch into server
	server.addProviders(config.config.providers 	as ProviderInterface[]);
	server.addMiddlewares(config.config.middleware 	as Record<string, MiddlewareType>);
	server.addGlobals(config.config.global 			as MiddlewareType[]);
	
	// -------------------------------------------------
	// Run server
	// -------------------------------------------------
	
	const hostname 	= config.env.APP_HOSTNAME 	|| "0.0.0.0";
	const port 		= config.env.APP_PORT 		|| 8080;
	
	console.log(`Server started at ${hostname}:${port}\n`);
	server.run(parseInt(port as string), hostname);
}

main();