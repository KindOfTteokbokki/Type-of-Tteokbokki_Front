import React, { useEffect, useState } from 'react';
import ProfileEditView from './ProfileEditView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { useGet, usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { useMoveLogin } from '../../hooks/useMoveLogin';

export default function ProfileEdit() {
	const [nickName, setNickName] = useState('');
	const [originName, setOriginName] = useState('');
	const [invalidName, setInValidName] = useState(false);
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	const getValidFunc = useGet(`${baseUrl}/checkNickname?nickname=${nickName}`);
	const getNameFunc = useGet(`${baseUrl}/myInfo`);
	const editPostFunc = usePost(`${baseUrl}/regiNickname`);

	useMoveLogin();
	useEffect(() => {
		getValidFunc().then((res: any) => {
			console.log(res);
			setInValidName(res.data);
		});
	}, [nickName]);

	useEffect(() => {
		getNameFunc({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }).then((res) => {
			setOriginName(res.data);
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

	const editNickName = async () => {
		await editPostFunc({ utteok_nickname: nickName }, { Authorization: `Bearer ${token}` }).then(() => {
			alert('수정되었어!');
			window.location.reload();
		});
	};

	return (
		<ProfileEditView
			text={text}
			onClickBack={onClickBack}
			originName={originName}
			nickName={nickName}
			onChangeNickName={onChangeNickName}
			invalidName={invalidName}
			editNickName={editNickName}
		/>
	);
}
