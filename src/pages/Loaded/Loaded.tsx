import React, { ReactNode, useEffect, useState } from 'react';
import LoadedView from './view/LoadedView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal/view/Modal';
import Popup from '../Popup/Popup';

export interface Props {
	loadedHeader: string;
	loadedMessage: string;
	onClickReturn(): void;
	onClickModal(): void;
	renderModal(): ReactNode;
	modal: boolean;
	onClickPopUp(): void;
}

export default function Loaded() {
	const navigator = useNavigate();
	let [modal, setModal] = useState(false);
	let [popUp, setPopUp] = useState(false);

	const onClickReturn = () => {
		navigator('/pickTypes');
	};

	const onClickModal = () => {
		setModal(!modal);
	};

	const onClickPopUp = () => {
		setPopUp(true);
	};

	const renderModal = () => {
		if (modal) {
			return (
				<Modal
					modalHeader={constants.MODAL.QUESTION}
					modalAnswerWhite={constants.MODAL.ANSWER_1}
					modalAnswerRed={constants.MODAL.ANSWER_2}
					onClickModal={onClickModal}
					onClickPopUp={onClickPopUp}
				/>
			);
		}
	};

	return (
		<>
			{popUp ? (
				<Popup popUpHeader={constants.POPUP.header} popUpMessage={constants.POPUP.message} />
			) : (
				<LoadedView
					loadedHeader={constants.LOADED.header}
					loadedMessage={constants.LOADED.message}
					onClickReturn={onClickReturn}
					onClickModal={onClickModal}
					renderModal={renderModal}
					modal={modal}
					onClickPopUp={onClickPopUp}
				/>
			)}
		</>
	);
}
