import React, { useEffect, useState } from 'react';
import ProfileEditView from './ProfileEditView';
import { constants } from '../../constants/constants';
import { useNavigate, useParams } from 'react-router-dom';
import { clientData, connect, disConnect, sendNickName } from './validNickName';

export default function ProfileEdit() {
	const [nickName, setNickName] = useState('');
	const [client, setClient] = useState(false);

	const initializeName = () => {
		setNickName('');
	};

	const initializeClient = () => {
		setClient(true);
	};

	const [chatList, setChatList] = useState([]); // 화면에 표시될 채팅 기록
	const { apply_id } = useParams(); // 채널을 구분하는 식별자를 URL 파라미터로 받는다.

	useEffect(() => {
		clientData.subscribe('/sub/checkNickname/' + apply_id, (body) => {
			const json_body = JSON.parse(body.body);
			console.log(json_body);
			setChatList(json_body);
			// setChatList((_chat_list) => [..._chat_list, json_body]);
		});

		// connect(initializeClient);

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
