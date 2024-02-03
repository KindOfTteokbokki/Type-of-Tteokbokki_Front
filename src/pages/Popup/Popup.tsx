import React from 'react';
import PopupView from './PopupView';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../api/useAxios';
import { constants } from '../../constants/constants';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

interface Props {
	popUpHeader: string;
	popUpMessage: string;
}

export default function Popup(props: Props) {
	const selector = useSelector((state: RootStateType) => {
		return state.userPick;
	});

	const navigator = useNavigate();
	const postData: any = {};

	const onClickMove = () => {
		navigator('/home');
	};

	for (const [key, value] of Object.entries(selector)) {
		postData[key] = value.code;
	}

	const { response } = useAxios({
		method: 'POST',
		url: 'http://118.67.132.171:8080/api/findTitle',
		headers: {
			accept: '*/*',
		},
		data: postData,
	});

	return (
		<PopupView
			popUpHeader={props.popUpHeader}
			popUpMessage={props.popUpMessage}
			onClickMove={onClickMove}
			response={response}
		/>
	);
}
