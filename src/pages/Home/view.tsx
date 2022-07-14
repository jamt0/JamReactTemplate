import { TUser } from 'data/models/userModels';
import { StatusRequest } from 'data/types';
import { FunctionComponent, MouseEventHandler } from 'react';

type Props = {
	onClick: MouseEventHandler<HTMLButtonElement>;
	signUpStatusRequest: StatusRequest;
	user: TUser;
};

export const ViewHome: FunctionComponent<Props> = (props) => (
	<div>
		<div>Home</div>
		<div>{props.signUpStatusRequest.toString()}</div>
		<button onClick={props.onClick}>Boton</button>
		<div>email: {props.user.name}</div>
	</div>
);
