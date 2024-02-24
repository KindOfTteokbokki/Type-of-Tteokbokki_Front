import React from 'react';
import LockedTitleView from './LockedTitleView';
import { useNavigate } from 'react-router-dom';

export default function LockedTitle() {
	const navigator = useNavigate();
	const onClickMoveBack = () => {
		navigator(-1);
	};

	return <LockedTitleView onClickMoveBack={onClickMoveBack} />;
}
