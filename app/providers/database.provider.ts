// Packages
import config 			from "config/mod.ts";
import { setDefault } 	from "query/mod.ts";

// interfaces
interface DatabaseConfigInterface {
	database: string;
	connection: {
		host	: string;
		username: string;
		password: string;
		database: string;
		port	: number;
	}
}

/**
 * If you wish to hardcode the database connection, it could increase perfomance
 */
export default class DatabaseProvider {
	public async boot () {
		const info = config.config.database as DatabaseConfigInterface;

		switch(info.database) {
			case "pg":
			case "postgres":
				await setDefault("pg", {
					user	: info.connection.username,
					password: info.connection.password,
					port	: info.connection.port,
					hostname: info.connection.host,
					database: info.connection.database,
				});
			break;

			default:
			case "mysql":
				await setDefault("sql", {
					username: info.connection.username,
					password: info.connection.password,
					port	: parseInt(info.connection.port as unknown as string),
					hostname: info.connection.host,
					db		: info.connection.database,
				});
			break;
		}
	}
}
