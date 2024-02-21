import React, { SetStateAction, useEffect, useState } from 'react';
import { kakaoLogin } from './kakaoLogin';
import { usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';

export default function KakaoRedirectView() {
	const [accessToken, setAccessToken] = useState<any>();
	const postFunc = usePost(`${baseUrl}/auth/kakao/`);

	const code = new URL(window.location.href).searchParams.get('code');

	useEffect(() => {
		postFunc(code).then((res: any) => {
			console.log(res.data);
		});
	}, []);

	return <h1>로딩중입니다.</h1>;
}
