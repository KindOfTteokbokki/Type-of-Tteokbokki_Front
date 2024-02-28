import React, { useEffect, useState } from 'react';
import HomeView from './HomeView';
import { useNavigate } from 'react-router-dom';
import useAxios, { baseUrl } from '../../api/useAxios';
import { constants } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { initialState, initializeType } from '../../slice/userPickSlice';
import { usePost } from '../../api/useFetch';

export default function Home() {
	const navigator = useNavigate();
	const dispatch = useDispatch();
	const postFunc = usePost(`${baseUrl}/getRecommendToPage`);
	const [myRecommData, setMyRecommData]: any = useState([]);

	const onClickMove = () => {
		dispatch(initializeType(initialState));
		navigator('/pick-types');
	};

	const { response } = useAxios({
		method: 'GET',
		url: `${baseUrl}/combination`,
		headers: {
			accept: '*/*',
		},
	});

	let combiImgList = response?.data;
	const randIndex = Math.floor(Math.random() * 4);

	const postData = {
		pageNum: 0,
		size: 4,
	};

	useEffect(() => {
		const filteredData: any = [];
		postFunc(postData).then((res: any) => {
			console.log(res.data);
			res.data.map((data: any) => {
				if (filteredData.length >= 4) {
					return;
				}
				if (data.file_masking_name) {
					filteredData.push(data.file_path + data.file_masking_name);
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
