import React from 'react';
import LockedTitleView from './LockedTitleView';
import { useNavigate } from 'react-router-dom';

export default function LockedTitle() {
	const navigator = useNavigate();
	const onClickMoveBack = () => {
		navigator(-1);
	};

	const list = [''];

	return <LockedTitleView onClickMoveBack={onClickMoveBack} list={list} />;
}
