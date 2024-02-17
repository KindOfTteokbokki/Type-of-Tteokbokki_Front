import React, { SetStateAction, useEffect, useState } from 'react';
import { kakaoLogin } from './kakaoLogin';

export default function KakaoRedirectView() {
	const [accessToken, setAccessToken] = useState<any>();

	const code = new URL(window.location.href).searchParams.get('code');

	useEffect(() => {
		kakaoLogin(code).then((res) => {
			setAccessToken(kakaoLogin(res));
		});
	}, []);

	return <h1>로딩중입니다.</h1>;
}
