import React from 'react';
import * as S from './style';
import Logo from '../../assets/Logo.svg';
import Kakao from '../../assets/카카오 로고.svg';
import Naver from '../../assets/네이버 로고.svg';

export interface Props {
	kakaoText: string;
	naverText: string;
	guestText: string;
	onClickMove(): void;
}

export default function SplashView(props: Props) {
	return (
		<S.Layout>
			<S.LogoCont>
				<S.LogoText>말만해,</S.LogoText>
				<S.LogoText>내가 다 골라줄게!</S.LogoText>
				<S.Logo src={Logo} />
			</S.LogoCont>
			<S.LoginButtonCont>
				<S.LoginButton bgColor={(props: any) => props.theme.color.kakao}>
					<S.LoginIcon src={Kakao} alt="카카오 로고" size="20px" />
					<S.LoginText color={(props: any) => props.theme.color.login}>{props.kakaoText}</S.LoginText>
				</S.LoginButton>
				<S.LoginButton bgColor={(props: any) => props.theme.color.naver}>
					<S.LoginIcon src={Naver} alt="네이버 로고" size="20px" />
					<S.LoginText color={(props: any) => props.theme.color.white}>{props.naverText}</S.LoginText>
				</S.LoginButton>
			</S.LoginButtonCont>
			<S.NonLoginText onClick={props.onClickMove}>{props.guestText}</S.NonLoginText>
		</S.Layout>
	);
}
