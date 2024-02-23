import React, { SetStateAction, useEffect, useState } from 'react';
import { kakaoLogin } from './kakaoLogin';
import { useGet } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';

export default function KakaoRedirectView() {
	const [accessToken, setAccessToken] = useState<any>();
	const code = new URL(window.location.href).searchParams.get('code');
	const getFunc = useGet(`${baseUrl}/auth/kakao/?code=${code}`);

	// const postData = {
	// 	authorizationCode: code,
	// };

	useEffect(() => {
		getFunc().then((res: any) => {
			console.log(res);
		});
	}, []);

	return <h1>카카오 로그인 로딩중입니다.</h1>;
}
