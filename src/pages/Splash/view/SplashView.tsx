import React from 'react';
import * as S from '../style';
import Logo from '../../../assets/Logo.svg';
import LoginButtons from '../LoginButtons';

export interface Props {
	onClickMove(): void;
	header: string[];
	guestText: string;
}

export default function SplashView(props: Props) {
	return (
		<S.Layout>
			<S.LogoCont>
				<S.LogoText>{props.header[0]}</S.LogoText>
				<S.LogoText>{props.header[1]}</S.LogoText>
				<S.Logo src={Logo} alt="어떡 로고 이미지" />
			</S.LogoCont>
			<LoginButtons />
			<S.NonLoginText onClick={props.onClickMove}>{props.guestText}</S.NonLoginText>
			<S.SuggestText href="mailto:utteok401@gmail.com">불편 및 문의사항 보내기</S.SuggestText>
		</S.Layout>
	);
}
