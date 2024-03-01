import React, { useEffect, useState } from 'react';
import LockedTitleView from './LockedTitleView';
import { useNavigate } from 'react-router-dom';
import { useGet } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { constants } from '../../constants/constants';

export default function LockedTitle() {
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	const [lockedTitle, setLockedTitle] = useState([]);
	const getFunc = useGet(`${baseUrl}/doNotHaveTitle`);
	const navigator = useNavigate();
	const onClickMoveBack = () => {
		navigator(-1);
	};

	const onClickMoveReturn = () => {
		navigator('/pick-types');
	};

	useEffect(() => {
		getFunc({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }).then((res) => {
			setLockedTitle(res.data);
		});
	});

	return (
		<LockedTitleView
			onClickMoveBack={onClickMoveBack}
			lockedTitle={lockedTitle}
			onClickMoveReturn={onClickMoveReturn}
			header={constants.LOCKED_TITLE.header}
			button={constants.LOCKED_TITLE.button}
		/>
	);
}
