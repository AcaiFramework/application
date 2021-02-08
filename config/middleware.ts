// Packages
import config from "@acai/config";

// Middlewares
import AuthMiddleware from "../app/http/middlewares/auth.middleware";

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