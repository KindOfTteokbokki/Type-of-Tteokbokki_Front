import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { NavLayout } from '../../components/Layout/MainLayout.jsx/style';
import { Icon } from '../Title/style';

export const Layout = styled(NavLayout)`
	padding: 50px 0 0;
	width: 100%;
	height: 756px;
	overflow-y: scroll;

	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	&::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
`;

export const BackIcon = styled(Icon)`
	margin-left: 15px;
`;

export const Header = styled.header`
	width: 100%;
	padding: 0 15px;
	margin: 30px 0 40px;
	display: flex;
	gap: 92px;
	position: relative;
`;

export const H1 = styled.h1`
	font-weight: ${theme.fontWeight.semiBold};
	font-size: ${theme.fontSize.lv5};
	line-height: 140%;
`;

export const Button = styled.button`
	width: 130px;
	height: 46px;
	line-height: 46px;
	color: ${theme.color.main};
	border: 1px solid ${theme.color.main};
	border-radius: ${theme.borderRadius.lv4};
	font-family: Pretendard-SemiBold;
	font-size: ${theme.fontSize.lv1};
	position: absolute;
	right: 15px;
	bottom: 0;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
`;

export const Ul = styled.ul`
	border-top: 3px solid ${theme.color.lightGray};
`;

export const Li = styled.li`
	width: 100%;
	height: 80px;
	border-bottom: 0.3px solid ${theme.color.gray};
	display: flex;
	flex-direction: row;
	gap: 10px;
	align-items: center;
	padding-left: 24px;
`;

export const H2 = styled.h2`
	font-weight: ${theme.fontWeight.semiBold};
	font-size: ${theme.fontSize.lv2};
	line-height: 140%;
`;

export const P = styled.p`
	font-size: ${theme.fontSize.lv1};
	line-height: 140%;
`;
