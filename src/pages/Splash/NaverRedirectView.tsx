import React, { useEffect } from 'react';
import { useGet } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';

export default function NaverRedirectView() {
	const code = new URL(window.location.href).searchParams.get('code');
	const getFunc = useGet(`${baseUrl}/auth/naver/?code=${code}`);

	useEffect(() => {
		getFunc().then((res: any) => {
			console.log(res.data);
		});
	}, []);

	return <h1>네이버 로그인 로딩중입니다</h1>;
}
