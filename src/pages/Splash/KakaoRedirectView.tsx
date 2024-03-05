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
	const getUseNameFunc = useGet(`${baseUrl}/useCheckNickName`);
	const navigate = useNavigate();

	useEffect(() => {
		getFunc().then((res: any) => {
			dispatch(setUserToken(res.data.accessToken));

			getUseNameFunc({ Authorization: `Bearer ${res.data.accessToken}` }).then((res) => {
				if (res.data) {
					navigate('/home', { state: { nickName: undefined } });
				} else {
					navigate('/setting');
				}
			});
		});
	}, []);

	return <></>;
}
