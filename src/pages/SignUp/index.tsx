import { GetPublicKeyAsync, selectAuth } from 'data/global/features/AuthSlice/authSlice';
import { useAppDispatch, useAppSelector } from 'data/global/hooks';
import React from 'react';
import { ViewSignUp } from './view';

export const SignUp: React.FC = () => {

	const { getPublicKeyStatusRequest, getPublicKeyStatusError} = useAppSelector(selectAuth);

	const dispatch = useAppDispatch();

	const onClick = () => {
		console.log("onclik");
		dispatch(GetPublicKeyAsync({}));
	};
	
	return <ViewSignUp />;
};
