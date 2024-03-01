import React, { useEffect, useState } from 'react';
import HomeView from './HomeView';
import { useNavigate } from 'react-router-dom';
import useAxios, { baseUrl } from '../../api/useAxios';
import { constants } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { initialState, initializeType } from '../../slice/userPickSlice';
import { usePost, useGet } from '../../api/useFetch';

export default function Home() {
	const navigator = useNavigate();
	const dispatch = useDispatch();
	const postFunc = usePost(`${baseUrl}/getRecommendToPage`);
	const getFunc = useGet(`${baseUrl}/myTaste`);

	const [myTaste, setMyTaste] = useState([]);
	const [lockTaste, setLockTaste] = useState(['']);

	const [myRecommData, setMyRecommData]: any = useState([]);
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

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
			res.data.map((data: any) => {
				if (filteredData.length >= 4) {
					return;
				}
				if (data.file_masking_name) {
					filteredData.push(data);
				}
			});
			setMyRecommData([...filteredData]);
		});

		if (token) {
			getFunc({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }).then((res: any) => {
				if (res.data.length > 3) {
					setMyTaste(res.data.slice(res.data.length - 3).reverse());
				} else {
					setMyTaste(res.data.reverse());

					const lockArray = new Array(3 - res.data.length);
					setLockTaste([...lockArray]);
				}
			});
		}
	}, []);

	return (
		<HomeView
			onClickMove={onClickMove}
			combiImgList={combiImgList}
			nickName={constants.HOME.NICK_NAME[randIndex]}
			myRecommData={myRecommData}
			myTaste={myTaste}
			lockTaste={lockTaste}
		/>
	);
}
