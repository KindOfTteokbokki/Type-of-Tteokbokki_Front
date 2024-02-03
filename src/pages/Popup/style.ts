import styled from 'styled-components';
import { Header } from '../Loading/style';
import checkIcon from '../../assets/btn_check.svg';

export const Layout = styled.section`
	width: 100%;
	margin: 0 auto;
	text-align: center;
	padding: 152px 0;
	background-color: #faf5e2;
	height: 100%;
`;

export const PopupHeader = styled(Header)`
	margin-bottom: 0;
`;

export const HeadText = styled.p`
	padding-left: 24px;
	margin-bottom: 40px;
	text-align: initial;
	font-size: ${(props) => props.theme.fontSize.lv4};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const Text = styled(HeadText)`
	font-size: ${(props) => props.theme.fontSize.lv3};
	margin-bottom: 12px;
	padding: 24px 0 0 24px;
`;

export const Cont = styled.main`
	margin: 0 auto;
	margin-top: 32px;
	margin-bottom: 72px;
	width: 284px;
	height: 377px;
	background-color: #fff;
	border-radius: ${(props) => props.theme.borderRadius.lv4};
	box-shadow: 0 3px 16px rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button`
	width: 56px;
	height: 56px;
	background-image: url(${checkIcon});
`;

export const Img = styled.img`
	background-color: gray;
	width: 100%;
	height: 248px;
`;
