import React, { ReactNode, useEffect, useState } from 'react';
import LoadedView from './view/LoadedView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal/view/Modal';
import Popup from '../Popup/Popup';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateType } from '../../store';
import { deletePickType, initializeType } from '../../slice/userPickSlice';
import useAxios from '../../api/useAxios';
import { addStore, initialState } from '../../slice/findStoreSlice';

export interface Props {
	loadedHeader: string;
	loadedMessage: string;
	onClickReturn(): void;
	onClickModal(): void;
	renderModal(): ReactNode;
	modal: boolean;
	onClickPopUp(): void;
	storeData: object;
	response: any;
}

export default function Loaded() {
	const navigator = useNavigate();
	const dispatch = useDispatch();
	let [modal, setModal] = useState(false);
	let [popUp, setPopUp] = useState(false);
	const selector = useSelector((state: RootStateType) => {
		return state.userPick;
	});

	const storeData = useSelector((state: RootStateType) => {
		return state.store.value;
	});

	console.log(storeData);

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

	const postData: any = {};

	type Type = {
		store_name: string;
		store_address: string;
		menu_name: string;
		review: string;
		file_path: string;
		file_masking_name: string;
	};
	const store = initialState;

	for (const [key, value] of Object.entries(selector)) {
		postData[key] = value.code;
	}

	const { response, error, loading, sendData } = useAxios({
		method: 'POST',
		url: 'http://118.67.132.171:8080/api/findStore',
		headers: {
			accept: '*/*',
		},
		data: postData,
	});

	console.log(response);

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
					storeData={storeData}
					response={response?.data}
				/>
			)}
		</>
	);
}
