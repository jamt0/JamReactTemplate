import { BaseResponse } from "data/types";
import * as BaseApi from 'data/models/baseApi';
import { GetPublicKeyRequest, GetPublicKeyResponse } from "data/types/authTypes";

export const getPublicKey = async (): Promise<BaseResponse<GetPublicKeyResponse>> => {
	const response = BaseApi.get<GetPublicKeyRequest, GetPublicKeyResponse>(
		'/api/public/v1/backoffice/auth/pubk'
	);
	return response;
};

export default {
    getPublicKey,
};