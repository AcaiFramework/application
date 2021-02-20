// Packages
import config from "@acai/config";

// Middlewares
import AuthMiddleware from "../app/middlewares/auth.middleware";

// -------------------------------------------------
// Global middlewares
// -------------------------------------------------

config.setConfig("global", []);

// -------------------------------------------------
// Aliased middlewares
// -------------------------------------------------

config.setConfig("middleware", {
	"auth": AuthMiddleware,
});