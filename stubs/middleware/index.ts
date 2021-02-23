export default async function {{ name }}Middleware (request: AppRequest, next: (r: AppRequest) => Promise<AppRequest>, args?: [string?]) {
	
	

	// return request to allow it to go through the pipeline
	return next(request);
} 