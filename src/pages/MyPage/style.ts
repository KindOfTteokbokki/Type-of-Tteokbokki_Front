import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { NavLayout } from '../../components/Layout/MainLayout.jsx/style';
import { BackButton } from '../Recommend/style';

export const Section = styled.section`
	width: 100%;
	height: 100%;
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

export const MyInfoAndReviewCont = styled.section`
	width: 100%;
	padding: 16px 0 24px;
	background-color: ${theme.color.white};
	border-radius: ${theme.borderRadius.lv4};
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
	margin-bottom: 40px;
	font-size: ${theme.fontSize.lv2};
	font-weight: ${theme.fontWeight.semiBold};
`;
