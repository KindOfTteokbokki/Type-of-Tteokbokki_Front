import styled from 'styled-components';

export const RedButton = styled.button`
	width: 130px;
	height: 46px;
	text-align: center;
	line-height: 36px;
	font-family: 'Pretendard-SemiBold';
	font-size: ${(props) => props.theme.fontSize.lv1};
	color: ${(props) => props.theme.color.main};
	border: 1px solid ${(props) => props.theme.color.main};
	border-radius: ${(props) => props.theme.borderRadius.lv4};
	display: block;
	margin: 0 auto;
`;
