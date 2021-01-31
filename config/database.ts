// Packages
import config from "config/mod.ts";

// -------------------------------------------------
// Database configuration
// -------------------------------------------------

config.setConfig("database", {
	database	: config.getEnv("DATABASE", "postgres"),
	connection	: {
		username: config.getEnv("DATABASE_USERNAME", 	"root"),
		password: config.getEnv("DATABASE_PASSWORD", 	""),
		database: config.getEnv("DATABASE_NAME", 		"acai"),
		host	: config.getEnv("DATABASE_HOST", 		"127.0.0.1"),
		port	: config.getEnv("DATABASE_PORT", 		"5432"),
	}
});
