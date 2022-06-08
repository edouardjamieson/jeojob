// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { validateAuthorization } from '../../functions/utils/authorization';

export default async function handler(req, res) {
	const auth = await validateAuthorization(req);
	// console.log(auth);

	res.status(200).json({ name: 'John Doe' });
}
