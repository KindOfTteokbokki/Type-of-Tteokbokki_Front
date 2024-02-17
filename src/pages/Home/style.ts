import styled from 'styled-components';
import plus from '../../assets/아이콘_나도추천할래/나도추천할래플러스.svg';

export const Layout = styled.section`
	width: 100%;
	height: 884px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 5px;
		height: 100%;
	}

	&::-webkit-scrollbar-thumb {
		height: 10%;
		background-color: ${(props) => props.theme.color.gray};
	}

	&::-webkit-scrollbar-track {
		background-color: ${(props) => props.theme.color.white};
	}
`;

export const Section = styled.section`
	width: 100%;
	height: 100%;
	padding: 48px 15px 21px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	background-color: ${(props) => props.theme.color.lightGray};
`;

export const MainCont = styled.section`
	width: 100%;
	height: 100%;
	padding: 16px 0;
	border-radius: ${(props) => props.theme.borderRadius.lv4};
	background-color: #fff;
`;

export const Cont = styled(MainCont)`
	padding: 16px 16px 24px;
	background-color: #fff;
`;

export const Text = styled.p`
	font-size: ${(props) => props.theme.fontSize.lv2};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const MainText = styled(Text)`
	font-size: ${(props) => props.theme.fontSize.lv4};
	padding-left: 16px;
`;

export const Icon = styled.img`
	width: 40px;
	height: 40px;
	position: relative;
	top: 10px;
	margin-right: 8px;
`;

export const Title = styled.p`
	font-family: 'DNFBitBitv2';
	font-size: 24px;
	height: 56px;
	line-height: 56px;
	display: inline-block;
`;

export const MainImg = styled.img`
	width: 100%;
	height: 98px;

	margin: 8px 0;
	border: none;
`;

export const PickButton = styled.button`
	width: 130px;
	height: 46px;
	text-align: center;
	line-height: 36px;
	font-size: ${(props) => props.theme.fontSize.lv1};
	color: ${(props) => props.theme.color.main};
	border: 1px solid ${(props) => props.theme.color.main};
	border-radius: ${(props) => props.theme.borderRadius.lv4};
	display: block;
	margin: 0 auto;
`;

export const FlexCont = styled.section`
	display: flex;
	justify-content: space-between;
`;

export const MyTypeImg = styled.img`
	width: 96px;
	height: 99px;
	border-radius: ${(props) => props.theme.borderRadius.lv2};
	background-color: ${(props) => props.theme.color.lightGray};
	margin-top: 16px;
`;

export const MyRecommedImg = styled.img`
	width: 75px;
	height: 99px;
	border-radius: ${(props) => props.theme.borderRadius.lv2};
	background-color: ${(props) => props.theme.color.lightGray};
	margin-top: 16px;
`;

export const CombiImg = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.color.lightGray};
	margin-top: 14px;
`;

export const EmptyCombiImg = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.color.lightGray};
	margin-top: 14px;
`;

export const LockCont = styled.div`
	width: 96px;
	height: 99px;
	padding: 33px 32px 34px;
	background-color: #f5f5f5;
	border-radius: ${(props) => props.theme.borderRadius.lv2};
	margin-top: 16px;
`;

export const LockImg = styled.img`
	width: 32px;
	height: 32px;
`;

export const PlusIcon = styled.button`
	background-image: url(${plus});
	width: 24px;
	height: 24px;
`;

export const MyRecommendCont = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Alter = styled.h1`
	padding: 40px 76px 45px;
	font-size: 18px;
	font-weight: 600;
`;

export const NavBar = styled.nav`
	width: 390px;
	height: 88px;
	background-color: ${(props) => props.theme.color.white};
	padding: 0 32px 23px 33px;
	display: flex;
	gap: 57px;
	box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08);
	position: sticky;
	bottom: 0;
`;

type NavICon = {
	size: string;
	margin: string;
};

export const Figure = styled.figure`
	width: 100%;
	position: relative;
`;

export const NavIcon = styled.img<NavICon>`
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	margin: ${(props) => props.margin};
`;

export const NavText = styled.figcaption`
	font-size: 12px;
	font-weight: ${(props) => props.theme.fontWeight.regular};
	text-align: center;
	overflow: display;
`;

export const ReviewText = styled(NavText)`
	width: 45px;
	position: absolute;
	left: -3px;
`;
