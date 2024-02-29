import React, { useEffect, useState } from 'react';
import LockedTitleView from './LockedTitleView';
import { useNavigate } from 'react-router-dom';
import { useGet } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

export default function LockedTitle() {
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	const [lockedTitle, setLockedTitle] = useState([
		'맛도리',
		'맛도리',
		'맛도리',
		'맛도리',
		'맛도리',
		'맛도리',
		'맛도리',
		'맛도리',
		'맛도리',
		'맛도리',
	]);
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
			console.log(res);
			setLockedTitle(res.data);
		});
	});

	return (
		<LockedTitleView
			onClickMoveBack={onClickMoveBack}
			lockedTitle={lockedTitle}
			onClickMoveReturn={onClickMoveReturn}
		/>
	);
}
