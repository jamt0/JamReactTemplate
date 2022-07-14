import {
	selectUser,
	signUpUserAsync,
} from 'data/global/features/UserSlice/userSlice';
import { useAppDispatch, useAppSelector } from 'data/global/hooks';
import React from 'react';
import { ViewHome } from './view';

export const Home: React.FC = () => {
	const { signUpStatusRequest, user } = useAppSelector(selectUser);

	const dispatch = useAppDispatch();

	const onClick = () => {
		console.log("onclik");
		const request = { email: "", password: "" };
		dispatch(signUpUserAsync(request));
	};

	return (
		<ViewHome onClick={onClick} signUpStatusRequest={signUpStatusRequest} user={user}/>
	);
};
