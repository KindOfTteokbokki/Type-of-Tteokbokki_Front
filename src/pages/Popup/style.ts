import styled from 'styled-components';
import { Header } from '../Loading/style';
import checkIcon from '../../assets/btn_check.svg';

export const PopupHeader = styled(Header)`
	margin-bottom: 0;
`;

export const HeadText = styled.p`
	text-align: initial;
	font-size: ${(props) => props.theme.fontSize.lv3};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const Text = styled(HeadText)`
	font-size: ${(props) => props.theme.fontSize.lv2};
	margin-bottom: 12px;
`;

export const Cont = styled.main`
	margin: 0 auto;
	margin-top: 32px;
	margin-bottom: 72px;
	width: 284px;
	height: 377px;
	background-color: #fff;
	padding: 24px 0 0 24px;
	border-radius: ${(props) => props.theme.borderRadius.lv4};
	box-shadow: 0 3px 16px rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button`
	width: 56px;
	height: 56px;
	background-image: url(${checkIcon});
`;
