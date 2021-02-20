// Packages
import { route } 	from "@acai/router";

// auth
route.post("/register", 	"auth.controller@register");
route.post("/login", 		"auth.controller@login");

// auth user
route.options({middleware: ["auth:required"]}, () => {
	route.group("/auth", () => {
		route.get("/", "auth.controller@show");
	});
});
