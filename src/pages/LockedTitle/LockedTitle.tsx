import React from 'react';
import LockedTitleView from './LockedTitleView';
import { useNavigate } from 'react-router-dom';

export default function LockedTitle() {
	const navigator = useNavigate();
	const onClickMoveBack = () => {
		navigator(-1);
	};

	const onClickMoveReturn = () => {
		navigator('/pick-types');
	};

	const list = ['맛도리', '맛도리', '맛도리', '맛도리', '맛도리', '맛도리', '맛도리', '맛도리', '맛도리', '맛도리'];

	return <LockedTitleView onClickMoveBack={onClickMoveBack} list={list} onClickMoveReturn={onClickMoveReturn} />;
}
