import React, { useEffect } from 'react';
import { usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';

export default function NaverRedirectView() {
	const postFunc = usePost(`${baseUrl}/auth/naver`);

	const code = new URL(window.location.href).searchParams.get('code');

	const postData = {
		authorizationCode: code,
	};

	useEffect(() => {
		postFunc(postData, { 'Content-type': 'application/json' }).then((res: any) => {
			console.log(res.data);
		});
	}, []);

	return <h1>네이버 로그인 로딩중입니다</h1>;
}
