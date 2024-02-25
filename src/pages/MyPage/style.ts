import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { NavLayout } from '../../components/Layout/MainLayout.jsx/style';

export const Section = styled.section`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	background-color: ${theme.color.lightGray};
`;

export const Header = styled.header`
	width: 100%;
	font-size: ${theme.fontSize.lv3};
	font-weight: ${theme.fontWeight.semiBold};
	padding: 50px 0 24px;
	border-bottom: 1px solid ${theme.color.gray};
`;
