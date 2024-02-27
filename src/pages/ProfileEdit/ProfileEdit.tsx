import React from 'react';
import ProfileEditView from './ProfileEditView';
import { constants } from '../../constants/constants';

export default function ProfileEdit() {
	const text = constants.PROFILE_EDIT;

	return <ProfileEditView text={text} />;
}
