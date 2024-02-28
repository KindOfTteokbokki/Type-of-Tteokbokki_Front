import React, { SetStateAction, useEffect, useState } from 'react';
import { useGet } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { setUserToken } from '../../slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function KakaoRedirectView() {
	const dispatch = useDispatch();
	const code = new URL(window.location.href).searchParams.get('code');
	const getFunc = useGet(`${baseUrl}/auth/kakao/?code=${code}`);

	useEffect(() => {
		getFunc().then((res: any) => {
			dispatch(setUserToken(res.data.accessToken));
		});
	});

	return <h1></h1>;
}
