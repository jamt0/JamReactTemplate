import * as BaseApi from 'data/models/baseApi';
import { BaseResponse } from 'data/types';
import {
	LogoutRequest,
	LogoutResponse,
	SignInRequest,
	SignInResponse,
	SignUpRequest,
	SignUpResponse,
} from 'data/types/userTypes';

export const signIn = async (
	request: SignInRequest
): Promise<BaseResponse<SignInResponse>> => {
	const response = BaseApi.post<SignInRequest, SignInResponse>(
		'/api/auth/signin',
		request
	);
	return response;
};

export const signUp = async (
	request: SignUpRequest
): Promise<BaseResponse<SignUpResponse>> => {
	const response = BaseApi.post<SignUpRequest, SignUpResponse>(
		'/api/auth/signup',
		request
	);
	return response;
};

export const logout = async (): Promise<BaseResponse<LogoutResponse>> => {
	const response = BaseApi.get<LogoutRequest, LogoutResponse>(
		'/api/auth/logout'
	);
	return response;
};

export default {
	signIn,
	signUp,
	logout
};
