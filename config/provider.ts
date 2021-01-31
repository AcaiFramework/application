// Packages
import config from "config/mod.ts";

// -------------------------------------------------
// List of providers
// -------------------------------------------------

config.setConfig("providers", [
	(await import("../app/providers/route.provider.ts")).default,
]);
