import axios, { AxiosResponse } from 'axios';
import config from 'config';
import { BaseResponse } from 'data/types';

export async function post<Request, Response>(
	url: string,
	body: Request
): Promise<BaseResponse<Response>> {
	try {
		const response: AxiosResponse<Response> = await axios.post(
			config.baseURL + url,
			body
		);
		console.log("response.data")
		console.log(response.data)
		return {
			error: false,
			data: response.data,
			statusCode: response.status,
		};
	} catch (error) {
		//TODO: Manejar que tipo de error es
		return {
			error: true,
		};
	}
}

export async function get<Request, Response>(
	url: string,
	request?: Request
): Promise<BaseResponse<Response>> {
	//TODO: Request como query
	try {
		const response: AxiosResponse<Response> = await axios.post(
			config.baseURL + url,
		);
		return {
			error: false,
			data: response.data,
			statusCode: response.status,
		};
	} catch (error) {
		//TODO: Manejar que tipo de error es
		return {
			error: true,
		};
	}
}

export async function put<Request, Response>(
	url: string,
	body: Request
): Promise<BaseResponse<Response>> {
	try {
		const response: AxiosResponse<Response> = await axios.put(
			config.baseURL + url,
			body
		);
		return {
			error: false,
			data: response.data,
			statusCode: response.status,
		};
	} catch (error) {
		//TODO: Manejar que tipo de error es
		return {
			error: true,
		};
	}
}

export async function deleteApi<Request, Response>(
	url: string,
	body: Request
): Promise<BaseResponse<Response>> {
	try {
		const response: AxiosResponse<Response> = await axios.delete(
			config.baseURL + url,
			body
		);
		return {
			error: false,
			data: response.data,
			statusCode: response.status,
		};
	} catch (error) {
		//TODO: Manejar que tipo de error es
		return {
			error: true,
		};
	}
}