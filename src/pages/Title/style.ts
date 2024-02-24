import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const DeleteIcon = styled.img<{ marginbottom: string }>`
	width: 24px;
	height: 24px;
	margin-bottom: 72px;
`;

export const Header = styled.header`
	width: 214px;
	font-size: 32px;
	font-weight: 600;
	line-height: 140%;
`;

export const Ul = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-top: 24px;
`;

export const Li = styled.li<{ bgcolor: string }>`
	width: 100%;
	height: 70px;
	display: flex;
	gap: 16px;
	line-height: 70px;
	background-color: ${(props) => props.bgcolor};
	border-radius: 16px;
	font-weight: 600;
	font-size: 20px;
	align-items: center;
`;

export const TitleIcon = styled.img`
	width: 40px;
	height: 40px;
	margin-left: 24px;
`;

export const Button = styled.button`
	width: 100%;
	height: 100px;
	background-color: ${theme.color.lightGray};
	padding: 0 24px;
	display: flex;
	align-items: center;
`;
