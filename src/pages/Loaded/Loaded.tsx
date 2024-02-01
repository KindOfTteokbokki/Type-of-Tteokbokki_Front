import React, { ReactNode, useEffect, useState } from 'react';
import LoadedView from './view/LoadedView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal/view/Modal';

export interface Props {
	loadedHeader: string;
	loadedMessage: string;
	onClickReturn(): void;
	onClickModal(): void;
	renderModal(): ReactNode;
	modal: boolean;
}

export default function Loaded() {
	const navigator = useNavigate();
	let [modal, setModal] = useState(false);

	const onClickReturn = () => {
		navigator('/pickTypes');
	};

	const onClickModal = () => {
		setModal(!modal);
	};

	const renderModal = () => {
		if (modal) {
			return (
				<Modal
					modalHeader={constants.MODAL.QUESTION}
					modalAnswerWhite={constants.MODAL.ANSWER_1}
					modalAnswerRed={constants.MODAL.ANSWER_2}
					onClickModal={onClickModal}
				/>
			);
		}
	};

	return (
		<>
			<LoadedView
				loadedHeader={constants.LOADED.header}
				loadedMessage={constants.LOADED.message}
				onClickReturn={onClickReturn}
				onClickModal={onClickModal}
				renderModal={renderModal}
				modal={modal}
			/>
		</>
	);
}
