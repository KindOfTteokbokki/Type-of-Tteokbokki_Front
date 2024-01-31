import React from 'react';
import LoadingView from './LoadingView';
import { constants } from '../../constants/constants';

export interface Props {
	loadingHeader: string;
	loadingMessage: string;
	loadingMessageBottom: string;
}

export default function Loading() {
	return (
		<LoadingView
			loadingHeader={constants.LOADING_HEADER}
			loadingMessage={constants.LOADING_MESSAGE}
			loadingMessageBottom={constants.LOADING_MESSAGE_2}
		/>
	);
}
