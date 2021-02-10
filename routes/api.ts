// Packages
import { route } 	from "@acai/router";

route.get("/", "test.controller@test");

// auth
route.post("/register", "auth.controller@register");
route.post("/login", 	"auth.controller@login");
route.post("/recover", 	"auth.controller@recover");

// auth user
route.options({middleware: ["auth"]}, () => {
	route.group("/auth", () => {
		route.get("/", "auth.controller@show");
	});
});
