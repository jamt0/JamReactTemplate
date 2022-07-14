var api_url = process.env.API_URL || 'http://localhost:4000';

const config = {
	baseURL: api_url,
	headers: {
		accessToken: localStorage.getItem('accessToken'),
	},
};

export default config;
