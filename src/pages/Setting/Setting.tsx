import React, { ReactEventHandler, useEffect, useState } from 'react';
import SettingView from './SettingView';
import { useGet } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useNavigate } from 'react-router-dom';

export default function Setting() {
	const [check, setCheck] = useState(false);
	const [valid, setValid] = useState(true);
	const [duplicated, setDuplicated] = useState(false);
	const [nickName, setNickName] = useState('');
	const korean = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,9}$/;
	const getValidFunc = useGet(`${baseUrl}/checkNickname?nickname=${encodeURI(encodeURIComponent(nickName))}`);
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

	const onClickCheck = () => {
		getValidFunc().then((res: any) => {
			console.log(res);

			setCheck(true);
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
