import React from 'react';
import * as S from '../style';
import { KAKAO_AUTH_URL } from '../../../components/Auth/OAuth';
import Kakao from '../../../assets/카카오 로고.svg';
import Naver from '../../../assets/네이버 로고.svg';

interface LoginButtonType {
	kakaoText: string;
	naverText: string;
	guestText: string;
}

export default function LoginButtonsView(props: LoginButtonType) {
	return (
		<S.LoginButtonCont>
			<S.LoginButton to={KAKAO_AUTH_URL} bgColor={(props: any) => props.theme.color.kakao}>
				<S.LoginIcon src={Kakao} alt="카카오 로고" size="20px" />
				<S.LoginText color={(props: any) => props.theme.color.login}>{props.kakaoText}</S.LoginText>
			</S.LoginButton>
			<S.LoginButton to={KAKAO_AUTH_URL} bgColor={(props: any) => props.theme.color.naver}>
				<S.LoginIcon src={Naver} alt="네이버 로고" size="20px" />
				<S.LoginText color={(props: any) => props.theme.color.white}>{props.naverText}</S.LoginText>
			</S.LoginButton>
		</S.LoginButtonCont>
	);
}
