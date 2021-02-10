// // Packages
// import config 					from "@acai/config";
// import { addQuery, setDefault } from "@acai/query";

// // interfaces
// interface DatabaseConfigInterface {
// 	connections: Record<string, {
// 		database: string;
// 		connection: {
// 			host	: string;
// 			username: string;
// 			password: string;
// 			database: string;
// 			port	: number;
// 		}
// 	}>;
// }

// /**
//  * If you wish to hardcode the database connection, it could increase perfomance
//  */
// export default class DatabaseProvider {
// 	public async boot () {
// 		const info = config.config.database as DatabaseConfigInterface;

// 		await Object.keys(info.connections).forEach(async key => {
// 			await this.instantiate(key, info.connections[key], key === "default");
// 		});
// 	}

// 	protected async instantiate(name: string, info: DatabaseConfigInterface["connections"]["value"], isDefault = false) {
// 		let type: string;
// 		let config = {} as Record<string, string | number>;
// 		switch(info.database) {
// 			case "pg":
// 			case "postgres":
// 				type = "pg";
// 				config = {
// 					user	: info.connection.username,
// 					password: info.connection.password,
// 					port	: parseInt(info.connection.port as unknown as string),
// 					hostname: info.connection.host,
// 					database: info.connection.database,
// 				};
// 			break;

// 			default:
// 			case "sql":
// 			case "mysql":
// 				type = "sql";
// 				config = {
// 					username: info.connection.username,
// 					password: info.connection.password,
// 					port	: parseInt(info.connection.port as unknown as string),
// 					hostname: info.connection.host,
// 					db		: info.connection.database,
// 				};
// 			break;
// 		}

// 		if (isDefault) {
// 			await setDefault(type, config);
// 		}
// 		else {
// 			await addQuery(name, type, config);
// 		}
// 	}
// }
