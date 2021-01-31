// Packages
import config from "config/mod.ts";

// Providers
import RouteProvider 	from "../app/providers/route.provider.ts";
import DatabaseProvider from "../app/providers/database.provider.ts";

// -------------------------------------------------
// List of providers
// -------------------------------------------------

config.setConfig("providers", [
	RouteProvider,
	DatabaseProvider,
]);
