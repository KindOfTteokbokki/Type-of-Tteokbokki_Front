import React, { SetStateAction, useEffect, useState } from 'react';
import { useGet } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { setUserToken } from '../../slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function KakaoRedirectView() {
	const dispatch = useDispatch();
	const code = new URL(window.location.href).searchParams.get('code');
	const getFunc = useGet(`${baseUrl}/auth/kakao/?code=${code}`);
	const navigate = useNavigate();

	useEffect(() => {
		getFunc().then((res: any) => {
			console.log(res.data);
			localStorage.setItem('token', res.data.accessToken);
			dispatch(setUserToken(res.data.accessToken));
			navigate(-1);
		});
	}, []);

	return <h1></h1>;
}
