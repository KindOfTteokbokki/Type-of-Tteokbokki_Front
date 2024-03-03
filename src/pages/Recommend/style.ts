import styled from 'styled-components';
import { Cont, Header, MessageLayout, HeadText } from '../PickTypes/style';
import icon from '../../assets/아이콘_나도추천할래/FAB.svg';
import back from '../../assets/아이콘_나도추천할래/뒤로가기.svg';
import camera from '../../assets/아이콘_나도추천할래/카메라.svg';
import upload from '../../assets/아이콘_나도추천할래/업로드.svg';
import Delete from '../../assets/아이콘_나도추천할래/닫기.svg';
import { DropBack } from '../../components/Modal/style';
import PreloadDelete from '../../assets/아이콘_나도추천할래/사진삭제.svg';

export const RecommDropBack = styled(DropBack)`
	display: initial;
`;

export const Layout = styled(Cont)`
	width: 100%;
	height: 756px;
	background-color: ${(props) => props.theme.color.lightGray};
	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: block;
		width: 5px;
		background-color: ${(props) => props.theme.color.gray};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.color.gray};
	}

	&::-webkit-scrollbar-track {
		background-color: ${(props) => props.theme.color.white};
	}
`;

export const Head = styled(Header)`
	padding: 24px 0;
	height: 76px;
	line-height: 28px;
	position: relative;
`;

export const BackButton = styled.button`
	width: 24px;
	height: 24px;
	background-image: url(${back});
	position: absolute;
	left: 15px;
`;

export const RecommHeadText = styled(HeadText)`
	display: inline-block;
`;

export const Main = styled.main`
	padding: 16px 15px 0;
`;

export const Message = styled(MessageLayout)`
	width: 360px;
	height: 56px;
	padding: 8px 70px;
	font-weight: 400;
	line-height: 21px;
`;

export const BoldText = styled.span`
	font-size: ${(props) => props.theme.fontSize.lv1};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const RecommCont = styled.ul`
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	row-gap: 16px;
	column-gap: 20px;
	position: relative;
`;

export const RecommList = styled.li<{ border: string }>`
	width: 170px;
	height: 179px;
	border-radius: 16px;
	border: ${(props) => props.border};
`;

export const RecommText = styled.div`
	width: 100%;
	height: 92px;
	font-size: 14px;
	line-height: 20px;
	padding: 16px;
	background-color: #fff;
	border-radius: 0 0 16px 16px;
`;

export const ReCommOnlyText = styled(RecommText)`
	font-size: ${(props) => props.theme.fontSize.lv1};
	line-height: 20px;
	height: 100%;
	border-radius: ${(props) => props.theme.borderRadius.lv4};
`;

export const RecommImg = styled.img`
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
	position: sticky;
	bottom: 40px;
	left: 100%;
`;

export const TextField = styled.div`
	background-color: #fff;
	width: 360px;
	height: 241px;
	border-radius: 16px;
	padding: 24px;
	margin: auto;
	box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);
	position: relative;
	z-index: 10;
`;

export const TextArea = styled.textarea`
	font-size: ${(props) => props.theme.fontSize.lv2};
	font-family: 'Pretendard-Regular';
	font-weight: 400;
	width: 312px;
	height: 44px;
	overflow: visible;
	margin: 0 auto;
	padding: 0;
	border: none;
	outline: none;
	resize: none;
	margin-bottom: 16px;
`;

export const CountText = styled.div`
	font-size: ${(props) => props.theme.fontSize.lv2};
	text-align: right;
`;

export const PreloadCont = styled.div`
	position: absolute;
	bottom: 24px;
	right: 76px;
`;

export const PreloadImg = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 4px;
	background-color: ${(props) => props.theme.color.gray};
`;

export const PreloadDeleteIcon = styled.button`
	width: 20px;
	height: 20px;
	background-image: url(${PreloadDelete});
	vertical-align: top;
`;

export const CameraIcon = styled.label`
	width: 28px;
	height: 28px;
	background-image: url(${camera});
	position: absolute;
	bottom: 24px;
	right: 76px;
	cursor: pointer;
`;

export const CameraInput = styled.input`
	display: none;
`;

export const UploadIcon = styled.button`
	width: 28px;
	height: 28px;
	background-image: url(${upload});
	position: absolute;
	bottom: 24px;
	right: 24px;
`;

export const DeleteIcon = styled.button`
	width: 28px;
	height: 28px;
	background-image: url(${Delete});
	display: block;
	position: relative;
	left: 90%;
	margin-bottom: 16px;
`;

export const WriteCont = styled.div`
	width: 390px;
	position: relative;
	margin: 0 auto;
	padding: 164px 15px;
`;
