import styled from 'styled-components';
import { ButtonLayout } from '../style';

export const ModalCont = styled.article`
	width: 284px;
	height: 180px;
	margin: 0 auto;
	padding: 48px 0 32px;
	background-color: #fff;
	border-radius: ${(props) => props.theme.borderRadius.lv4};
	z-index: 50;
`;

export const ModalText = styled.p`
	text-align: center;
	font-size: ${(props) => props.theme.fontSize.lv3};
	font-weight: 500;
	height: 32px;
	line-height: 32px;
	margin-bottom: 32px;
`;

export const ModalIcon = styled.img`
	width: 32px;
	height: 32px;
	margin-right: 9px;
	vertical-align: top;
`;

export const ModalButtonLayout = styled(ButtonLayout)`
	padding: 0 57px;
`;

export const ModalWhiteButton = styled.button`
	display: inline-block;
	width: 75px;
	height: 36px;
	color: ${(props) => props.theme.color.main};
	border: 1px solid ${(props) => props.theme.color.main};
	border-radius: ${(props) => props.theme.borderRadius.lv3};
	font-size: ${(props) => props.theme.fontSize.lv1};
`;

export const ModalRedButton = styled(ModalWhiteButton)`
	color: ${(props) => props.theme.color.white};
	background-color: ${(props) => props.theme.color.main};
	border: none;
`;
