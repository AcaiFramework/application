// Packages
import Server from "server/mod.ts";
const route = Server.getRoute();

route.get("/", 		"test.controller@index");
route.get("/{id}", 	"test.controller@show");