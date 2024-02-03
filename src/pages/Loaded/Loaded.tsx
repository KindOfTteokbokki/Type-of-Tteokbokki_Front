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
import axios from 'axios';
import { usePost } from '../../api/useFetch';
import { addTitle } from '../../slice/findTitleSlice';

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
	const [data, setData] = useState();
	const navigator = useNavigate();
	const dispatch = useDispatch();
	let [modal, setModal] = useState(false);
	let [popUp, setPopUp] = useState(false);
	const selector = useSelector((state: RootStateType) => {
		return state.userPick;
	});
	const postFunc = usePost('http://118.67.132.171:8080/api/findStore');

	const storeData = useSelector((state: RootStateType) => {
		return state.store.value;
	});

	console.log(storeData);

	const onClickReturn = () => {
		dispatch(initializeType(initialState));
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

	useEffect(() => {
		postFunc(postData).then((res: any) => {
			console.log(res);
			setData(res.data);
			dispatch(addStore(res.data));
		});
	}, []);

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
					data={data}
				/>
			)}
		</>
	);
}
