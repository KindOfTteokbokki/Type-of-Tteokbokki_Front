import styled from 'styled-components';
import Background from '../../assets/스플래시배경.svg';
import { Link } from 'react-router-dom';

export const Layout = styled.section`
	width: 100%;
	height: 844px;
	text-align: center;
	padding: 277px 0 152px;
	background-image: url(${Background});
	position: relative;
`;

export const LogoCont = styled.h1`
	width: 207px;
	margin: 0 auto;
	text-align: initial;
`;

export const LogoText = styled.span`
	display: block;
	line-height: 22px;
	font-size: ${(props) => props.theme.fontSize.lv2};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	color: #383747;
`;

export const Logo = styled.img`
	width: 100%;
	height: 101px;
	display: block;
	margin: 0 auto;
	margin-bottom: 120px;
`;

export const LoginButtonCont = styled.section`
	display: flex;
	gap: 8px;
	margin-bottom: 16px;
	flex-direction: column;
`;

export const LoginButton = styled(Link)<{ bgColor: any }>`
	width: 345px;
	height: 40px;
	display: flex;
	gap: 16px;
	border-radius: ${(props) => props.theme.borderRadius.lv2};
	margin: 0 auto;
	background-color: ${(props) => props.bgColor};
	align-items: center;
	justify-content: center;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LoginIcon = styled.img<{ size: string }>`
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	line-height: 40px;
`;

export const LoginText = styled.span<{ color: any }>`
	font-size: ${(props) => props.theme.fontSize.lv2};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	line-height: 40px;
	color: ${(props) => props.color};
`;

export const NonLoginText = styled.button`
	font-size: ${(props) => props.theme.fontSize.lv1};
	font-weight: ${(props) => props.theme.fontWeight.regular};
	color: #333;
	font-family: 'Pretendard-Regular';
`;

export const SuggestText = styled.a`
	display: block;
	text-align: center;
	position: absolute;
	bottom: 10px;
	right: 10px;
	font-family: 'Pretendard-Regular';
	font-size: ${(props) => props.theme.fontSize.lv1};
`;
