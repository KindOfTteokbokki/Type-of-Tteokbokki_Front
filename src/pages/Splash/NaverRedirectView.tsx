import React, { useEffect } from 'react';
import { useGet } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { setUserToken } from '../../slice/userSlice';
import { useDispatch } from 'react-redux';

export default function NaverRedirectView() {
	const dispatch = useDispatch();
	const code = new URL(window.location.href).searchParams.get('code');
	const getFunc = useGet(`${baseUrl}/auth/naver/?code=${code}`);

	useEffect(() => {
		getFunc().then((res: any) => {
			localStorage.setItem('token', res.data.accessToken);
			dispatch(setUserToken(res.data.accessToken));
		});
	}, []);

	return <h1></h1>;
}
