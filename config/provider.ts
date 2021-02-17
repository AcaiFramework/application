// Packages
import config from "@acai/config";

// Providers
import RouteProvider 		from "../app/providers/route.provider";
import DatabaseProvider 	from "../app/providers/database.provider";
import ValidatorProvider 	from "../app/providers/validator.provider";

// -------------------------------------------------
// List of providers
// -------------------------------------------------

config.setConfig("providers", [
	RouteProvider,
	DatabaseProvider,
	ValidatorProvider,
]);
