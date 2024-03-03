import styled from 'styled-components';
import { shadowButton } from '../../components/Button/BigRedShadowButton/style';
import { InvalidName } from '../ProfileEdit/style';

export const Layout = styled.section`
	width: 100%;
	height: 844px;
	padding: 152px 15px 121px;
	position: relative;
`;

export const LogoImg = styled.img`
	width: 106px;
	height: 51px;
	display: block;
	margin-bottom: 72px;
`;

export const LogoHeader = styled.header`
	font-size: ${(props) => props.theme.fontSize.lv5};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	line-height: 140%;
`;

export const Input = styled.input`
	outline: none;
	width: 100%;
	border-bottom: 1px solid ${(props) => props.theme.color.gray};
	margin: 48px 0 8px;
	padding-bottom: 8px;
	font-family: 'Pretendard-Regular';
	font-size: ${(props) => props.theme.fontSize.lv4};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const ButtonCont = styled.div`
	margin: 0 auto;
	text-align: center;
`;

export const ErrorName = styled(InvalidName)`
	display: block;
	height: 20px;
	margin-bottom: 212px;
`;

export const RedShadowButton = styled(shadowButton)`
	margin: 0 auto;
	display: block;
	text-align: center;
`;

export const GrayShadowButton = styled(shadowButton)`
	background-color: ${(props) => props.theme.color.gray};
	cursor: initial;
	margin: 0 auto;
	display: block;
	text-align: center;
`;
