import React, { ReactEventHandler, useEffect, useState } from 'react';
import SettingView from './SettingView';
import { useGet, usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

export default function Setting() {
	const [check, setCheck] = useState(false);
	const [valid, setValid] = useState(true);
	const [duplicated, setDuplicated] = useState(false);
	const [nickName, setNickName] = useState('');
	const korean = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,9}$/;
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	const registerFunc = usePost(`${baseUrl}/regiNickname`);
	const getValidFunc = useGet(`${baseUrl}/checkNickname?nickname=${nickName}`);
	const navigator = useNavigate();

	const checkValidName = () => {
		return korean.test(nickName);
	};

	const onChangeName = (value: string) => {
		setNickName(value);
	};

	const onChangeValid = (value: boolean) => {
		setValid(value);
	};

	const onClickMovehome = () => {
		navigator('/home', { state: { nickName: nickName } });
	};

	useEffect(() => {
		setValid(checkValidName());
		getValidFunc({ Authorization: `Bearer ${token}` }).then((res: any) => {
			setDuplicated(res.data);
		});
	}, [nickName]);

	const onClickCheck = () => {
		registerFunc({ utteok_nickname: nickName }, { Authorization: `Bearer ${token}` }).then(() => {
			onClickMovehome();
		});
	};

	return (
		<SettingView
			nickName={nickName}
			checkValidName={checkValidName}
			onChangeName={onChangeName}
			valid={valid}
			onChangeValid={onChangeValid}
			duplicated={duplicated}
			onClickMovehome={onClickMovehome}
			onClickCheck={onClickCheck}
			check={check}
		/>
	);
}
