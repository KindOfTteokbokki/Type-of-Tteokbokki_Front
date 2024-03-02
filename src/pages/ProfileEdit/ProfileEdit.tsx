import React, { useEffect, useState } from 'react';
import ProfileEditView from './ProfileEditView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { useGet } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

export default function ProfileEdit() {
	const [nickName, setNickName] = useState('');
	const [validName, setValidName] = useState(true);
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	const getValidFunc = useGet(`${baseUrl}/checkNickname?nickname=${nickName}`);
	const getNameFunc = useGet(`${baseUrl}/myInfo`);

	useEffect(() => {
		getValidFunc().then((res) => {
			console.log(res);
		});
	}, [nickName]);

	useEffect(() => {
		getNameFunc({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }).then((res) => {
			setNickName(res.data);
		});
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
			nickName={nickName}
			onChangeNickName={onChangeNickName}
			validName={validName}
		/>
	);
}
