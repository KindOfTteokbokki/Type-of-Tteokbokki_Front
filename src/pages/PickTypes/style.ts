import styled from 'styled-components';

export const Layout = styled.section`
	width: 390px;
	height: 100%;

	&::-webkit-scrollbar {
		width: 5px;
		height: 30px;
	}

	&::-webkit-scrollbar-thumb {
		max-height: 40px;
		background-color: ${(props) => props.theme.color.gray};
	}

	&::-webkit-scrollbar-track {
		background-color: ${(props) => props.theme.color.white};
	}

	overflow-y: scroll;
`;

export const Header = styled.header`
	width: 100%;
	height: 116px;
	border-bottom: 1px solid ${(props) => props.theme.color.gray};
	padding: 64px 0 24px;
	text-align: center;
`;

export const HeadText = styled.h1`
	font-size: 20px;
	font-weight: 800;
`;

export const Main = styled.main`
	padding: 16px 15px 56px;
`;

export const MessageLayout = styled.p`
	width: 100%;
	height: 32px;
	line-height: 32px;
	color: ${(props) => props.theme.color.white};
	background-color: ${(props) => props.theme.color.main};
	font-size: ${(props) => props.theme.fontSize.lv1};
	border-radius: ${(props) => props.theme.borderRadius.lv1};
	margin-bottom: 32px;
	text-align: center;
`;

export const FlexLayout = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 28px;
`;

export const PickQuestion = styled.h2`
	font-size: ${(props) => props.theme.fontSize.lv3};
	font-weight: 800;
	margin-bottom: 8px;
`;

export const UnPickButton = styled.button`
	width: fit-content;
	height : 36px;
	font-size : ${(props) => props.theme.fontSize.lv1};
	background-color ${(props) => props.theme.color.white};
	border : 1px solid ${(props) => props.theme.color.black};
	border-radius : ${(props) => props.theme.borderRadius.lv1};
	padding: 8px 16px;
	margin :0 12px 12px 0;
`;

export const PickButton = styled(UnPickButton)`
	border: 1px solid ${(props) => props.theme.color.main};
	color: ${(props) => props.theme.color.main};
`;

export const ButtonLayout = styled.div`
	max-width: 390px;
	margin: 0 auto;
`;

export const ResultLayout = styled.section`
	padding: 24px 15px 0;
	border-top: 1px solid ${(props) => props.theme.color.gray};
`;

export const AddIcon = styled.img`
	width: 9.15px;
	height: 9.15px;
	margin-left: 15.5px;
	cursor: pointer;
`;

export const ResultButtonLayout = styled.div`
	width: 100%;
	text-align: center;
	padding: 37px 0 41px;
`;
