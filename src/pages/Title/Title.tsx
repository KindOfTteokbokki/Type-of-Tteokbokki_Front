import React, { useEffect } from 'react';
import TitleView from './TitleView';
import { useGet } from '../../api/useFetch';
import { theme } from '../../styles/theme';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { baseUrl } from '../../api/useAxios';

export default function Title() {
	const getFunc = useGet(`${baseUrl}/haveTitle`);
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

	const name = '개구리';
	const count = 6;
	const bgcolor = [theme.color.TITLE.PINK, theme.color.TITLE.SKY, theme.color.TITLE.YELLOW];
	const text = ['역시 근본', '주는대로 먹을게', '파인애플 극혐', '맛도리', '돌고 돌아 순정', '역시 근본'];
	const role = ['firstList', 'secondList', 'thirdList'];

	useEffect(() => {
		getFunc({ Authorization: token }).then((res) => {
			console.log(res);
		});
	}, []);

	return (
		<TitleView
			name={name}
			count={count}
			text={text}
			bgcolor={bgcolor}
			role={role}
			moveText={constants.TITLE.MOVE}
			onClickMoveBack={onClickMoveBack}
			onClickMoveLock={onClickMoveLock}
		/>
	);
}
