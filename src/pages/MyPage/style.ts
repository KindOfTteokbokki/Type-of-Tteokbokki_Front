import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { BackButton } from '../Recommend/style';
import Icon from '../../assets/내후기관리.svg';

export const Section = styled.section`
	width: 100%;
	height: 756px;
	margin: 0 auto;
	background-color: ${theme.color.lightGray};
`;

export const Header = styled.header`
	width: 100%;
	font-size: ${theme.fontSize.lv4};
	font-weight: ${theme.fontWeight.semiBold};
	padding: 50px 0 24px;
	border-bottom: 1px solid ${theme.color.gray};
	text-align: center;
	position: relative;
`;

export const Button = styled(BackButton)`
	bottom: 24px;
`;

export const Main = styled.main`
	width: 100%;
	padding: 16px 15px 0;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const MyInfoAndReviewCont = styled.section<{ padding?: string }>`
	width: 100%;
	overflow-y: scroll;

	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}

	padding: ${(props) => (props.padding ? props.padding : '16px 0 24px')};
	background-color: ${(props) => props.theme.color.white};
	border-radius: ${(props) => props.theme.borderRadius.lv4};
	margin: 0 auto;
`;

export const MyNameAndButtonCont = styled.section`
	width: 100%;
	display: flex;
	padding: 0 16px;
	justify-content: space-between;
	margin-bottom: 32px;
`;

export const Name = styled.h2`
	font-size: ${theme.fontSize.lv5};
	font-weight: ${theme.fontWeight.semiBold};
	line-height: 140%;
`;

export const editButton = styled.button`
	width: 103px;
	height: 33px;
	position: relative;
	top: 1px;
	border-radius: ${theme.borderRadius.lv1};
	background-color: ${theme.color.gray};
	color: ${theme.color.white};
	font-size: 12px;
	font-family: 'Pretendard-Regular';
`;

export const IconCont = styled.div`
	width: 282px;
	height: 88px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Li = styled.li`
	list-style: none;
	width: 52px;
	height: 88px;
	text-align: center;
`;

export const Img = styled.img`
	width: 40px;
	height: 40px;
	margin-bottom: 8px;
`;

export const Span = styled.span<{ color?: string }>`
	font-size: ${theme.fontSize.lv1};
	font-weight: ${theme.fontWeight.semiBold};
	line-height: 140%;
	word-break: keep-all;
	color: ${(props) => (props.color ? props.color : theme.color.black)};
`;

export const Border = styled.div<{ margin: string }>`
	width: 0;
	height: 70px;
	border-right: 0.5px solid ${theme.color.gray};
	margin: ${(props) => props.margin};
`;

export const MyReviewTitle = styled.h2`
	font-size: ${theme.fontSize.lv2};
	font-weight: ${theme.fontWeight.semiBold};
	padding-left: 16px;
`;

export const EmptyText = styled.p`
	margin: 40px 0;
	font-size: ${theme.fontSize.lv2};
	text-align: center;
`;

export const MyReviewCont = styled.ul`
	width: 100%;
	border-top: 3px solid ${(props) => props.theme.color.gray};
	margin-top: 16px;
	overflow: visible;
	max-height: 360px;
`;

export const MyReviewList = styled.li<{ border?: string | undefined }>`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	padding: 0 16px;
	border-bottom: ${(props) => (props.border ? `0.3px solid ${props.border}` : null)};
	position: relative;
	overflow-y: visible;
`;

export const ReviewImg = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 4px;
`;

export const ReviewText = styled.p`
	width: 220px;
	font-size: ${(props) => props.theme.fontSize.lv1};
	line-height: 140%;
	margin: 0 8px 0 16px;
	flex-shrink: 0;
`;

export const ReviewIcon = styled.button`
	width: 24px;
	height: 24px;
	background-image: url(${Icon});
`;

export const EditAndRemoveBtnCont = styled.div`
	width: 91px;
	height: 70px;
	border-radius: 8px;
	box-shadow: 0 3px 12px rgba(0, 0, 0, 0.18);
	position: absolute;
	right: 16px;
	top: 60px;
	overflow: visible;
	background-color: ${(props) => props.theme.color.white};
	z-index: 10;
`;

export const RemoveButton = styled.button`
	width: 100%;
	height: 35px;
	font-size: ${(props) => props.theme.fontSize.lv1};
	font-family: 'Pretendard-Regular';
	border-bottom: 0.5px solid ${(props) => props.theme.color.gray};
`;

export const EditButton = styled.button`
	width: 100%;
	height: 35px;
	font-size: ${(props) => props.theme.fontSize.lv1};
	font-family: 'Pretendard-Regular';
`;
