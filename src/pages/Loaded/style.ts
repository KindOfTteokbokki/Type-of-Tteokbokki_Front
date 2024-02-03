import styled from 'styled-components';
import { Layout } from '../Splash/style';

export const Main = styled(Layout)`
	background-color: #fff;
	padding: 152px 15px;
	background-image: none;
`;

export const LoadCont = styled.figure`
	width: 360px;
	height: 400px;
	padding: 6px;
	border-radius: ${(props) => props.theme.borderRadius.lv4};
	box-shadow: 0 3px 12px rgba(0, 0, 0, 18%);
	margin: 32px 0 102px;
	position: relative;
`;

export const LoadImg = styled.img`
	width: 100%;
	height: 100%;
`;

export const LoadText = styled.figcaption`
	padding: 16px;
	display: flex;
	flex-direction: column;
	text-align: initial;
	gap: 8px;
	box-shadow: 0 3px 16px rgba(0, 0, 0, 25%);
	border-radius: ${(props) => props.theme.borderRadius.lv3};
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`;

export const TextCont = styled.div`
	line-height: 22px;
	display: flex;
	gap: 16px;
`;

export const Icon = styled.img`
	width: 18.44px;
	height: 16px;
	position: relative;
	top: 3px;
`;

export const Text = styled.p`
	font-size: ${(props) => props.theme.fontSize.lv2};
	display: inline-block;
	word-break: keep-all;
`;

export const ButtonLayout = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
`;

export const ModalCont = styled.article`
	width: 284px;
	height: 180px;
	margin: 0 auto;
	padding: 48px 0 32px;
	background-color: #fff;
	border-radius: ${(props) => props.theme.borderRadius.lv4};
`;

export const ModalText = styled.p`
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
