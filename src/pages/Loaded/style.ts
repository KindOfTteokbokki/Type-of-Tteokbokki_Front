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
	border-radius: ${(props) => props.theme.borderRadius.lv4};
	box-shadow: 0 3px 12px rgba(0, 0, 0, 18%);
	margin: 32px 0 102px;
	position: relative;
`;

export const ChainImg = styled.img`
	width: 100%;
	height: 286px;
	border-radius: 16px 16px 0 0;
	z-index: 10;
`;

export const NonChainImg = styled.img`
	width: 100%;
	height: 278px;
	z-index: 10;
	border-radius: 16px 16px 0 0;
`;

export const LoadText = styled.figcaption`
	padding: 16px;
	display: flex;
	flex-direction: column;
	text-align: initial;
	gap: 8px;
	box-shadow: 0 3px 16px rgba(0, 0, 0, 25%);
	border-radius: ${(props) => props.theme.borderRadius.lv3};
	background-color: #fff;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 30;
`;

export const TextCont = styled.div`
	line-height: 22px;
	display: flex;
	gap: 16px;
	z-index: 30;
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
