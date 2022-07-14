import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'data/global/store';
import authRepository from 'data/repositories/authRepository';
import { ErrorStatus, StatusRequest } from 'data/types';
import { GetPublicKeyRequest, GetPublicKeyResponse } from 'data/types/authTypes';
import { Either, isRight, unwrapEither } from 'models/either';

type TAuthSlice = {
	getPublicKeyStatusRequest: StatusRequest;
	getPublicKeyStatusError?: ErrorStatus;
};

const initialState: TAuthSlice = {
	getPublicKeyStatusRequest: StatusRequest.initial,
	getPublicKeyStatusError: undefined,
};

export const GetPublicKeyAsync = createAsyncThunk<
	GetPublicKeyResponse,
	GetPublicKeyRequest,
	{ rejectValue: ErrorStatus }
>('auth/GetPublicKeyAsync', async (request: GetPublicKeyRequest, thunkAPI) => {
	try {
		const eitherResponse: Either<Error, GetPublicKeyResponse> =
			await authRepository.getPublicKey();
		if (isRight(eitherResponse)) {
			const response = unwrapEither(eitherResponse);
			return response;
		}
		//TODO mejorar manejo error
		const response = unwrapEither(eitherResponse);
		const error: ErrorStatus = {
			error: true,
			message: response.message,
		};
		return thunkAPI.rejectWithValue(error);
	} catch (e) {
		//TODO manejar error
		const error: ErrorStatus = {
			error: true,
			message: 'Error',
		};
		return thunkAPI.rejectWithValue(error);
	}
});

export const AuthSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(GetPublicKeyAsync.pending, (state) => {
			state.getPublicKeyStatusRequest = StatusRequest.pending;
		});
		builder.addCase(GetPublicKeyAsync.fulfilled, (state, action) => {
			state.getPublicKeyStatusRequest = StatusRequest.fulfilled;
			// state.user = action.payload;
		});
		builder.addCase(GetPublicKeyAsync.rejected, (state, action) => {
			state.getPublicKeyStatusRequest = StatusRequest.rejected;
			state.getPublicKeyStatusError = action.payload;
		});
	},
});

export const selectAuth = (state: RootState) => state.auth;
export const {} = AuthSlice.actions;
export default AuthSlice.reducer;
