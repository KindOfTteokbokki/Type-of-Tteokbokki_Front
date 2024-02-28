import React from 'react';
import ProfileEditView from './ProfileEditView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';

export default function ProfileEdit() {
	const navigator = useNavigate();
	const text = constants.PROFILE_EDIT;

	const onClickBack = () => {
		navigator(-1);
	};

	return <ProfileEditView text={text} onClickBack={onClickBack} />;
}
