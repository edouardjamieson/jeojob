/**
 * Runs before an API call.
 * @param {object} req - API request object.
 * @param {object} res - API response object.
 * @param {function} cb - Middleware callback.
 */
export function runMiddleware(req, res, cb) {
	return new Promise((resolve, reject) => {
		cb(req, res, (result) => {
			if (result instanceof Error) return reject(result);
			return resolve(result);
		});
	});
}
