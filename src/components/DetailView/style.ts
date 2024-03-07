import styled from 'styled-components';
import { Header } from '../../pages/Loading/style';
import { LoadCont } from '../../pages/Loaded/style';
import { Layout } from '../../pages/Popup/style';
import basicImg from '../../assets/imagesmode.png';

export const DetailLayout = styled(Layout)`
	background-color: #fff;
`;

export const DetailHeader = styled(Header)`
	margin-bottom: 60px;
`;

export const DetailLoadCont = styled(LoadCont)`
	margin: 0 auto;
	margin-bottom: 60px;
`;

export const DetailImg = styled.img`
	width: 100%;
	height: 286px;
	border-radius: ${(props) => props.theme.borderRadius.lv4} ${(props) => props.theme.borderRadius.lv4} 0 0;
`;

export const EmptyImg = styled.div`
	width: 100%;
	height: 286px;
	border-radius: ${(props) => props.theme.borderRadius.lv4} ${(props) => props.theme.borderRadius.lv4} 0 0;
	background-color: ${(props) => props.theme.color.white};
`;

export const DetailText = styled.div`
	width: 100%;
	height: 114px;
	padding: 16px;
	display: flex;
	gap: 16px;
	border-top: 1px solid ${(props) => props.theme.color.gray};
	z-index: 10;
`;

export const DetailIcon = styled.img`
	width: 20px;
	height: 20px;
	display: block;
`;

export const DetailContent = styled.p`
	font-size: ${(props) => props.theme.fontSize.lv2};
	line-height: 20px;
	text-align: initial;
`;
