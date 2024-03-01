import React, { useEffect, useState } from 'react';
import ProfileEditView from './ProfileEditView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { connect, disConnect, sendNickName } from './validNickName';

export default function ProfileEdit() {
	const [nickName, setNickName] = useState('');
	const [client, setClient] = useState(false);

	const initializeName = () => {
		setNickName('');
	};

	const initializeClient = () => {
		setClient(true);
	};

	useEffect(() => {
		connect(initializeClient);

		return () => disConnect(client);
	}, []);

	const navigator = useNavigate();
	const text = constants.PROFILE_EDIT;

	const onClickBack = () => {
		navigator(-1);
	};

	const onChangeNickName = (name: string) => {
		setNickName(name);
	};

	return (
		<ProfileEditView
			text={text}
			onClickBack={onClickBack}
			sendNickName={sendNickName}
			nickName={nickName}
			onChangeNickName={onChangeNickName}
			// initializeName={initializeName}
		/>
	);
}
