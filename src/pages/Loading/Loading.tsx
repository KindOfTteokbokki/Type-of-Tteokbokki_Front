import React from 'react';
import LoadingView from './LoadingView';
import { constants } from '../../constants/constants';
import useAxios from '../../api/useAxios';
import { useNavigate } from 'react-router-dom';
import loading from '../../assets/loading.gif';

export interface Props {
	loadingHeader: string;
	loadingMessage: string;
	loadingMessageBottom: string;
	loadingImgUrl: string;
}

export default function Loading() {
	const navigator = useNavigate();

	const { response } = useAxios({
		method: 'GET',
		url: 'http://118.67.132.171:8080/api/loading',
		headers: {
			accept: '*/*',
		},
	});

	setTimeout(() => {
		navigator('/loaded');
	}, 3000);

	return (
		<LoadingView
			loadingHeader={constants.LOADING.header}
			loadingMessage={constants.LOADING.message}
			loadingMessageBottom={response?.data[0].phrases}
			loadingImgUrl={loading}
		/>
	);
}
