//Response
export type SignInResponse = {
	name: string;
	email: string;
};

export type SignUpResponse = {
	name: string;
	email: string;
};

export type LogoutResponse = {};

//Request
export type SignInRequest = {
	email: string;
	password: string;
};

export type SignUpRequest = {
	email: string;
	password: string;
};

export type LogoutRequest = {};
