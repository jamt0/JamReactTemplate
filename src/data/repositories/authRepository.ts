import AuthApi from 'data/api/authApi';
import * as BaseRepository from 'data/models/baseRepository';
import { GetPublicKeyResponse } from 'data/types/authTypes';
import { Either } from 'models/either';

export const getPublicKey = async (): Promise<
	Either<Error, GetPublicKeyResponse>
> => {
	return BaseRepository.toEither(() => AuthApi.getPublicKey());
};

export default {
	getPublicKey,
};
