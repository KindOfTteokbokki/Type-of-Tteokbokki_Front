import styled from 'styled-components';
import { Layout } from '../Splash/style';

export const Main = styled(Layout)`
	background-color: #fff;
`;

export const Icon = styled.img`
	width: 32px;
	height: 32px;
	margin-right: 8px;
	position: relative;
	top: 5px;
`;

export const Header = styled.h1`
	font-size: 24px;
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	text-align: center;
	margin-bottom: 8px;
	position: relative;
`;

export const Text = styled.div`
	text-align: center;
	font-size: ${(props) => props.theme.fontSize.lv1};
	font-weight: ${(props) => props.theme.fontWeight.regular};
`;

export const RedText = styled(Text)`
	width: 150px;
	margin: 0 auto;
	color: ${(props) => props.theme.color.main};
`;

export const Img = styled.img`
	width: 211px;
	height: 212px;
	margin: 76px 0 12px;
	background-color: ${(props) => props.theme.color.gray};
	border-radius: ${(props) => props.theme.borderRadius.lv2};
`;
