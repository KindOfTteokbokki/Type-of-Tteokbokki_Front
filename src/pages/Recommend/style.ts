import styled from 'styled-components';
import { Cont, Header, MessageLayout } from '../PickTypes/style';
import icon from '../../assets/아이콘_나도추천할래/FAB.svg';
import back from '../../assets/아이콘_나도추천할래/arrow_back_ios_new.svg';
import camera from '../../assets/아이콘_나도추천할래/카메라.svg';
import upload from '../../assets/아이콘_나도추천할래/업로드.svg';

export const Layout = styled(Cont)`
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.color.lightGray};
`;

export const Head = styled(Header)`
	padding: 24px 0;
	height: 76px;
	line-height: 28px;
`;

export const backButton = styled.button`
	width: 24px;
	height: 24px;
	float: left;
	margin-left: 24px;
	background-image: ${back};
	background-color: gray;
`;

export const Main = styled.main`
	padding: 16px 15px 32px;
	postion: relative;
`;

export const Message = styled(MessageLayout)`
	width: 100%;
	height: 56px;
	padding: 8px 70px;
	font-weight: 400;
	word-break: keep-all;
	line-height: 21px;
`;

export const BoldText = styled.span`
	font-size: ${(props) => props.theme.fontSize.lv1};
	font-weight: ${(props) => props.theme.fontWeight.lv3};
`;

export const RecommCont = styled.ul`
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	row-gap: 16px;
	column-gap: 20px;
`;

export const RecommList = styled.li`
	width: 170px;
	height: 179px;
	border-radius: 16px;
`;

export const RecommText = styled.div`
	width: 100%;
	height: 92px;
	font-size: 14px;
	padding: 16px;
	background-color: #fff;
	border-radius: 0 0 16px 16px;
`;

export const RecommImg = styled.div`
	width: 100%;
	height: 87px;
	background-color: ${(props) => props.theme.color.gray};
	border-radius: 16px 16px 0 0;
`;

export const Button = styled.button`
	width: 72px;
	height: 72px;
	background-image: url(${icon});
	background-repeat: no-repeat;
	position: relative;
	bottom: 40px;
	left: 80%;
`;

export const TextField = styled.div`
	background-color: #fff;
	width: 360px;
	height: 148px;
	border-radius: 16px;
	padding: 24px;
	margin: auto;
	box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);
`;

export const TextArea = styled.textarea`
	font-size: ${(props) => props.theme.fontSize.lv2};
	font-family: 'Pretendard-Regular';
	font-weight: 400;
	width: 312px;
	height: 60px;
	overflow: visible;
	margin: 0 auto;
	border: none;
	outline: none;
	resize: none;
	margin-bottom: 28px;
`;

export const CameraIcon = styled.button`
	width: 28px;
	height: 28px;
	background-image: url(${camera});
	float: right;
	margin-right: 22px;
	position: relative;
	bottom: 10px;
`;

export const UploadIcon = styled.button`
	width: 28px;
	height: 28px;
	background-image: url(${upload});
	float: right;
	position: relative;
	bottom: 10px;
`;
