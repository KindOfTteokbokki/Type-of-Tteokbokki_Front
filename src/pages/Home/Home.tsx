import React, { useEffect, useState } from 'react';
import HomeView from './HomeView';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../api/useAxios';
import { constants } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../store';

export default function Home() {
	const navigator = useNavigate();
	const [data, setData] = useState();

	const onClickMove = () => {
		navigator('/pickTypes');
	};

	const { response } = useAxios({
		method: 'GET',
		url: 'http://118.67.132.171:8080/api/combination',
		headers: {
			accept: '*/*',
		},
	});

	let combiImgList = response?.data;
	const randIndex = Math.floor(Math.random() * 4);

	return (
		<HomeView onClickMove={onClickMove} combiImgList={combiImgList} nickName={constants.HOME.NICK_NAME[randIndex]} />
	);
}
