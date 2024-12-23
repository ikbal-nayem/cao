import axios from 'axios';

export const axiosIns = axios.create({
	baseURL: 'http://api-stage.cao.gov.bd/api/v1/caoapi',
	headers: {
		Accept: 'application/json',
	},
});
