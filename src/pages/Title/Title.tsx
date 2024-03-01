import React, { useEffect, useState } from 'react';
import TitleView from './TitleView';
import { useGet } from '../../api/useFetch';
import { theme } from '../../styles/theme';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { baseUrl } from '../../api/useAxios';

export default function Title() {
	const getTitleFunc = useGet(`${baseUrl}/haveTitle`);
	const getNameFunc = useGet(`${baseUrl}/myInfo`);
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	const navigator = useNavigate();
	const onClickMoveBack = () => {
		navigator(-1);
	};

	const onClickMoveLock = () => {
		navigator('/locked-title');
	};

	const bgcolor = [theme.color.TITLE.PINK, theme.color.TITLE.SKY, theme.color.TITLE.YELLOW];
	const [nickName, setNickName] = useState('');
	const [title, setTitle] = useState<any>();
	const role = ['firstList', 'secondList', 'thirdList'];

	useEffect(() => {
		getNameFunc({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }).then((res) => {
			setNickName(res.data);
		});

		getTitleFunc({
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		}).then((res) => {
			console.log(res);
			setTitle(res.data);
		});
	}, []);

	return (
		<TitleView
			nickName={nickName}
			title={title}
			bgcolor={bgcolor}
			role={role}
			moveText={constants.TITLE.MOVE}
			onClickMoveBack={onClickMoveBack}
			onClickMoveLock={onClickMoveLock}
		/>
	);
}
