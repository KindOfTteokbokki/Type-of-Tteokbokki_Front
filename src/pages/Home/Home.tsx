import React, { useEffect, useState } from 'react';
import HomeView from './HomeView';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../api/useAxios';
import { constants } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { initialState, initializeType } from '../../slice/userPickSlice';
import { useGet } from '../../api/useFetch';

export default function Home() {
	const navigator = useNavigate();
	const dispatch = useDispatch();
	const getFunc = useGet('http://118.67.132.171:8080/api/getRecommendToMain');
	const [myRecommData, setMyRecommData]: any = useState([]);

	const onClickMove = () => {
		dispatch(initializeType(initialState));
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

	useEffect(() => {
		const filteredData: any = [];
		getFunc().then((res: any) => {
			res.data.map((data: any) => {
				if (filteredData.length >= 4) {
					return;
				}
				if (data.file_masking_name) {
					filteredData.push(res.data.file_path + res.data.file_masking_name);
				}
			});
			setMyRecommData([...filteredData]);
		});
	}, []);

	return (
		<HomeView
			onClickMove={onClickMove}
			combiImgList={combiImgList}
			nickName={constants.HOME.NICK_NAME[randIndex]}
			myRecommData={myRecommData}
		/>
	);
}
