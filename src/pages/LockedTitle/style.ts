import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Header = styled.header`
	width: 100%;
	margin-top: 30px;
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
	right: 0;
	bottom: 0;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
`;
