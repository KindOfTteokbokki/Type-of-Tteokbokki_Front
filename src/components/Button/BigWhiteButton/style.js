import styled from 'styled-components';
import { Button } from '../BigRedButton/style';

export const WhiteButton = styled(Button)`
	position: static;
	color: ${(props) => props.theme.color.main};
	background-color: ${(props) => props.theme.color.white};
	border: 1px solid ${(props) => props.theme.color.main};
`;
