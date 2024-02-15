import styled from 'styled-components';

export const Button = styled.button`
	width: 170px;
	height: 56px;
	color: ${(props) => props.theme.color.white};
	background-color: ${(props) => props.theme.color.main};
	font-size: ${(props) => props.theme.fontSize.lv1};
	border-radius: ${(props) => props.theme.borderRadius.lv4};
`;
