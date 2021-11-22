import tokenService from './tokenService';
const BASE_URL = '/api/submissions/';

export function addSubmission(submissionObject) {
	const token = tokenService.getToken()
	return fetch(BASE_URL + 'create', {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}),  
		body: JSON.stringify(submissionObject)
	})
	.then(res => {
		if (res.ok) return res.json();
		throw new Error(res);
	})
}