import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	SignInRequest,
	SignInResponse,
	SignUpRequest,
	SignUpResponse,
} from 'data/types/userTypes';
import { RootState } from 'data/global/store';
import { Either, isRight, unwrapEither } from 'models/either';
import UserRepository from 'data/repositories/userRepository';
import { ErrorStatus, StatusRequest } from 'data/types';
import { TUser } from 'data/models/userModels';

type TUserSlice = {
	signUpStatusRequest: StatusRequest;
	signInStatusRequest: StatusRequest;
	signUpStatusError?: ErrorStatus;
	signInStatusError?: ErrorStatus;
	user: TUser;
};

const initialState: TUserSlice = {
	signUpStatusRequest: StatusRequest.initial,
	signInStatusRequest: StatusRequest.initial,
	signUpStatusError: undefined,
	signInStatusError: undefined,
	user: { email: '', name: '' },
};

export const signUpUserAsync = createAsyncThunk<
	SignUpResponse,
	SignUpRequest,
	{ rejectValue: ErrorStatus }
>('user/signupUserAsync', async (request: SignUpRequest, thunkAPI) => {
	try {
		const eitherResponse: Either<Error, SignUpResponse> =
			await UserRepository.signUp(request);
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

export const signInUserAsync = createAsyncThunk<
	SignInResponse,
	SignInRequest,
	{ rejectValue: ErrorStatus }
>('user/signInUserAsync', async (request: SignInRequest, thunkAPI) => {
	console.log('signInUserAsync');
	try {
		const eitherResponse: Either<Error, SignInResponse> =
			await UserRepository.signIn(request);
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

export const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(signUpUserAsync.pending, (state) => {
			state.signUpStatusRequest = StatusRequest.pending;
		});
		builder.addCase(signUpUserAsync.fulfilled, (state, action) => {
			state.signUpStatusRequest = StatusRequest.fulfilled;
			state.user = action.payload;
		});
		builder.addCase(signUpUserAsync.rejected, (state, action) => {
			state.signUpStatusRequest = StatusRequest.rejected;
			state.signUpStatusError = action.payload;
		});
		builder.addCase(signInUserAsync.pending, (state) => {
			state.signInStatusRequest = StatusRequest.pending;
		});
		builder.addCase(signInUserAsync.fulfilled, (state, action) => {
			state.signInStatusRequest = StatusRequest.fulfilled;
			state.user = action.payload;
		});
		builder.addCase(signInUserAsync.rejected, (state, action) => {
			state.signInStatusRequest = StatusRequest.rejected;
			state.signInStatusError = action.payload;
		});
	},
});

export const selectUser = (state: RootState) => state.user;
export const {} = UserSlice.actions;
export default UserSlice.reducer;
