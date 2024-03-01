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

	const getTitleFunc = useGet(`${baseUrl}/haveTitle`);
	const getNameFunc = useGet(`${baseUrl}/myInfo`);
	const [nickName, setNickName] = useState('');
	const [count, setCount] = useState<number>(0);
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
		getNameFunc({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }).then((res) => {
			setNickName(res.data);
		});

		getTitleFunc({
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		}).then((res) => {
			setCount(res.data.countTitle.count);
		});
	}, []);

	return (
		<MyPageView
			text={constants.MYPAGE}
			data={data}
			onClickBack={onClickBack}
			onClickMoveRecommend={onClickMoveRecommend}
			nickName={nickName}
			count={count}
			onClickMoveProfileEdit={onClickMoveProfileEdit}
		/>
	);
}
