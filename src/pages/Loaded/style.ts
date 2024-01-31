import styled from 'styled-components';

export const LoadCont = styled.figure`
	width: 360px;
	height: 400px;
	padding: 6px;
	border-radius: ${(props) => props.theme.borderRadius.lv4};
	box-shadow: 0 3px 12px rgba(0, 0, 0, 18%);
	margin: 32px 0 102px;
	position: relative;
`;

export const LoadText = styled.figcaption`
	width: 348px;
	height: 144px;
	margin: 6px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	text-align: initial;
	gap: 8px;
	box-shadow: 0 3px 16px rgba(0, 0, 0, 25%);
	border-radius: ${(props) => props.theme.borderRadius.lv3};
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`;

export const Icon = styled.img`
	width: 18.44px;
	height: 16px;
`;

export const Text = styled.p`
	font-size: ${(props) => props.theme.fontSize.lv2};
	display: inline-block;
	margin-left: 16px;
	word-break: keep-all;
`;
