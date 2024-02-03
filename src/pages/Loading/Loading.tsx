import React from 'react';
import LoadingView from './LoadingView';
import { constants } from '../../constants/constants';
import useAxios from '../../api/useAxios';
import { useNavigate } from 'react-router-dom';
import loading from '../../assets/loading.gif';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { addStore } from '../../slice/findStoreSlice';

export interface Props {
	loadingHeader: string;
	loadingMessage: string;
	loadingMessageBottom: string;
	loadingImgUrl: string;
}

export default function Loading() {
	const dispatch = useDispatch();

	const selector = useSelector((state: RootStateType) => {
		return state.userPick;
	});
	const navigator = useNavigate();

	const { response } = useAxios({
		method: 'GET',
		url: 'http://118.67.132.171:8080/api/loading',
		headers: {
			accept: '*/*',
		},
	});

	const imgUrl = response?.data[0].file_path + response?.data[0].file_masking_name;

	const postData: any = {};

	for (const [key, value] of Object.entries(selector)) {
		postData[key] = value.code;
	}

	const params = {
		method: 'POST',
		url: 'http://118.67.132.171:8080/api/findStore',
		headers: {
			accept: '*/*',
		},
		data: postData,
	};

	setTimeout(async () => {
		// await axios.request(params).then((response) => {
		// 	dispatch(addStore(response.data));
		// });

		navigator('/loaded');
	}, 3000);

	return (
		<LoadingView
			loadingHeader={constants.LOADING.header}
			loadingMessage={constants.LOADING.message}
			loadingMessageBottom={response?.data[0].phrases}
			loadingImgUrl={imgUrl}
		/>
	);
}
