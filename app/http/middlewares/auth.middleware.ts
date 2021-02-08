import Request from "../../../interfaces/Request";

export default function AuthMiddleware (request: Request, next: (r: Request) => Promise<Request>) {

	return next(request);
} 