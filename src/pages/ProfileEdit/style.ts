import styled from 'styled-components';

export const Span = styled.span`
	font-family: 'Pretendard-Regular';
	font-size: ${(props) => props.theme.fontSize.lv4};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	position: absolute;
	right: 15px;
	bottom: 24px;
	cursor: pointer;
`;

export const Profile = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	display: block;
	margin: 0 auto;
	margin-bottom: 24px;
`;

export const Label = styled.label`
	font-size: ${(props) => props.theme.fontSize.lv4};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const Input = styled.input`
	width: 100%;
	height: 49px;
	font-family: 'Pretendard-Regular';
	font-size: ${(props) => props.theme.fontSize.lv2};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	border: 1px solid ${(props) => props.theme.color.gray};
	border-radius: ${(props) => props.theme.borderRadius.lv2};
	margin: 4px 0;
	padding: 12px 16px;
`;

export const InvalidName = styled.p`
	font-weight: ${(props) => props.theme.fontWeight.regular};
	font-size: ${(props) => props.theme.fontSize.lv1};
	color: ${(props) => props.theme.color.main};
`;

export const ValidName = styled(InvalidName)`
	color: ${(props) => props.theme.color.green};
`;
