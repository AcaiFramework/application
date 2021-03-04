// Packages
import config 							from "@acai/config";
import query, { addQuery, setDefault } 	from "@acai/query";
import { getModels }					from "@acai/model";
import * as fs 							from "fs";
import * as path 						from "path";

// interfaces
interface DatabaseConfigInterface {
	connections: Record<string, {
		database: string;
		connection: {
			host	: string;
			username: string;
			password: string;
			database: string;
			port	: number;
		}
	}>;
}

/**
 * If you wish to hardcode the database connection, it could increase perfomance
 */
export default class DatabaseProvider {
	public async boot () {
		const info = config.config.database as DatabaseConfigInterface;

		await Object.keys(info.connections).forEach(async key => {
			await this.instantiate(key, info.connections[key], key === "default");
		});
	}

	protected async instantiate(name: string, info: DatabaseConfigInterface["connections"]["value"], isDefault = false) {
		let type: string;
		let dbconfig = {} as Record<string, string | number>;

		// choose connection
		switch(info.database) {
			case "pg":
			case "postgres":
				type = "pg";
				dbconfig = {
					user	: info.connection.username,
					password: info.connection.password,
					port	: parseInt(info.connection.port as unknown as string),
					hostname: info.connection.host,
					database: info.connection.database,
				};
			break;

			default:
			case "sql":
			case "mysql":
				type = "sql";
				dbconfig = {
					user		: info.connection.username,
					password	: info.connection.password,
					port		: parseInt(info.connection.port as unknown as string),
					host		: info.connection.host,
					database	: info.connection.database,
				};
			break;
		}

		// initialize connection
		if (isDefault) {
			await setDefault(type, dbconfig);
		}
		else {
			await addQuery(name, type, dbconfig);
		}

		// get model files
		const files = fs.readdirSync(config.config.paths.models, {
			encoding: "utf-8",
			withFileTypes: true,
		});

		// load all models
		for await (const dirEntry of files) {
			if (dirEntry.isFile()) {
				await import (path.join("../../",config.config.paths.models, dirEntry.name));
			}
		}

		// run auto migrations
		getModels().map(i => i.addMigration())
		await query().runMigrations();
	}
}
