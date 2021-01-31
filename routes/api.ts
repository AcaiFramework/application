// Packages
import Server from "server/mod.ts";
const route = Server.getRoute();

route.get("/", "test.controller@view");
route.get("/request", "test.controller@request");