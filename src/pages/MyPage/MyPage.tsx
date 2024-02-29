import React, { useEffect, useState } from 'react';
import MyPageView from './view/MyPageView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { useGet } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

export default function MyPage() {
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	console.log(token);

	const getFunc = useGet(`${baseUrl}/myInfo`);
	const [data, setData] = useState(['후기', '후기', '후기']);
	const navigate = useNavigate();

	const onClickBack = () => {
		navigate(-1);
	};
	const onClickMoveProfileEdit = () => {
		navigate('/profile-edit');
	};

	const onClickMoveRecommend = () => {
		navigate('/recommend');
	};

	useEffect(() => {
		getFunc({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }).then((res) => {
			console.log(res);
		});
	}, []);

	return (
		<MyPageView
			text={constants.MYPAGE}
			onClickBack={onClickBack}
			onClickMoveRecommend={onClickMoveRecommend}
			data={data}
			onClickMoveProfileEdit={onClickMoveProfileEdit}
		/>
	);
}
