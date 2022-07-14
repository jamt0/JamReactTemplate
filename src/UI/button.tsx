import { FunctionComponent } from 'react';
import { Button as ButtonMUI, ButtonProps } from '@mui/material';

type Props = {} & ButtonProps;

export const Button: FunctionComponent<Props> = ({
	variant = 'contained',
	...props
}) => (
	<ButtonMUI variant={variant} {...props}>
		{props.children}
	</ButtonMUI>
);