import * as BaseRepository from 'data/models/baseRepository';
import UserApi from 'data/api/userApi';
import { Either } from 'models/either';
import { LogoutResponse, SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from 'data/types/userTypes';

export const signIn = async (
	request: SignInRequest
): Promise<Either<Error, SignInResponse>> => {
	return BaseRepository.toEither(() => UserApi.signIn(request));
};

export const signUp = async (
	request: SignUpRequest
): Promise<Either<Error, SignUpResponse>> => {
	return BaseRepository.toEither(() => UserApi.signUp(request));
};

export const logout = async (
): Promise<Either<Error, LogoutResponse>> => {
	return BaseRepository.toEither(() => UserApi.logout());
};

export default {
    signIn,
    signUp,
	logout
};
