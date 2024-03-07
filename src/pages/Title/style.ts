import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Icon = styled.img`
	width: 24px;
	height: 24px;
	cursor: pointer;
`;

export const Header = styled.header`
	margin-top: 72px;
`;

export const H1 = styled.h1`
	font-size: 32px;
	font-weight: 600;
	line-height: 140%;
`;

export const Ul = styled.ul`
	width: 100%;
	max-height: 396px;
	overflow-y: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-top: 24px;
`;

export const Li = styled.li<{ bgcolor: string }>`
	width: 100%;
	height: 70px;
	display: flex;
	flex-shrink: 0;
	gap: 16px;
	background-color: ${(props) => props.bgcolor};
	border-radius: 16px;
	align-items: center;
`;

export const ListText = styled.p`
	line-height: 140%;
	font-weight: 600;
	font-size: ${theme.fontSize.lv4};
`;

export const TitleIcon = styled.img`
	width: 40px;
	height: 40px;
	margin-left: 24px;
`;

export const Button = styled.button`
	width: 100%;
	height: 100px;
	background-color: ${theme.color.lightGray};
	padding: 0 24px;
	display: flex;
	align-items: center;
	position: sticky;
	bottom: 88px;
`;

export const Span = styled.span`
	font-family: Pretendard-SemiBold;
	font-size: ${theme.fontSize.lv4};
	margin: 0 45px 0 16px;
`;
