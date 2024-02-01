import React from 'react';
import LoadedView from './view/LoadedView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import Modal from './view/Modal';

export interface Props {
	loadedHeader: string;
	loadedMessage: string;
	onClickMove(): void;
	onClickReturn(): void;
	modalHeader: string;
	modalAnswerWhite: string;
	modalAnswerRed: string;
}

export default function Loaded() {
	const navigator = useNavigate();

	const onClickMove = () => {};

	const onClickReturn = () => {
		navigator('/pickTypes');
	};

	return (
		<LoadedView
			loadedHeader={constants.LOADED.header}
			loadedMessage={constants.LOADED.message}
			onClickMove={onClickMove}
			onClickReturn={onClickReturn}
			modalHeader={constants.MODAL.QUESTION}
			modalAnswerWhite={constants.MODAL.ANSWER_1}
			modalAnswerRed={constants.MODAL.ANSWER_2}
		/>
	);
}
