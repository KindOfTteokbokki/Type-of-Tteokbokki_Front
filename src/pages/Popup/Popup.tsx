import React, { useEffect, useState } from 'react';
import PopupView from './PopupView';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../api/useAxios';
import { constants } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { UseSelector } from 'react-redux';
import { addTitle } from '../../slice/findTitleSlice';
import { usePost } from '../../api/useFetch';

interface Props {
	popUpHeader: string;
	popUpMessage: string;
}

export default function Popup(props: Props) {
	const [data, setData] = useState();
	const postFunc = usePost('http://118.67.132.171:8080/api/findTitle');
	const selector = useSelector((state: RootStateType) => {
		return state.userPick;
	});

	const titleStore = useSelector((state: RootStateType) => {
		return state.store;
	});

	const navigator = useNavigate();
	const postData: any = {};

	for (const [key, value] of Object.entries(selector)) {
		postData[key] = value.code;
	}

	// const { response, sendData } = useAxios({
	// 	method: 'POST',
	// 	url: 'http://118.67.132.171:8080/api/findTitle',
	// 	headers: {
	// 		accept: '*/*',
	// 	},
	// 	data: postData,
	// });

	const onClickMove = () => {
		navigator('/home');
	};

	useEffect(() => {
		postFunc(postData).then((res: any) => {
			console.log(res);
			setData(res.data);
		});
	}, []);

	return (
		<PopupView
			popUpHeader={props.popUpHeader}
			popUpMessage={props.popUpMessage}
			onClickMove={onClickMove}
			data={data}
		/>
	);
}
