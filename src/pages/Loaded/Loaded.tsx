import React, { useEffect, useState } from 'react';
import LoadedView from './view/LoadedView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateType } from '../../store';
import { initializeType } from '../../slice/userPickSlice';
import { addStore, initialState } from '../../slice/findStoreSlice';
import { usePost } from '../../api/useFetch';
import { Action } from '../../slice/findStoreSlice';
import { baseUrl } from '../../api/useAxios';

export default function Loaded() {
	const [data, setData] = useState<Action>(initialState);
	const navigator = useNavigate();
	const dispatch = useDispatch();
	let [modal, setModal] = useState(false);
	let [popUp, setPopUp] = useState(false);

	const selector = useSelector((state: RootStateType) => {
		return state.userPick;
	});
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});
	const postFunc = usePost(`${baseUrl}/findStore`);

	const onClickReturn = () => {
		dispatch(initializeType(initialState));
		navigator('/pick-types');
	};

	const onClickModal = () => {
		setModal(!modal);
	};

	const onClickRedBtn = () => {
		setPopUp(true);
	};

	const postData: any = {};

	for (const [key, value] of Object.entries(selector)) {
		postData[key] = value.code;
	}

	useEffect(() => {
		if (token) {
			postFunc(postData, { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }).then((res: any) => {
				console.log(res);
				setData(res.data);
				dispatch(addStore(res.data));
			});
		} else {
			postFunc(postData).then((res: any) => {
				console.log(res);
				setData(res.data);
				dispatch(addStore(res.data));
			});
		}
	}, []);

	const renderModal = () => {
		if (modal) {
			return true;
		}
		return false;
	};

	const isNonChainStore = () => {
		if (data?.store_address) {
			return true;
		}
		return false;
	};

	const isNonData = () => {
		if (data?.review === '') {
			return true;
		}
		return false;
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
					onClickRedBtn={onClickRedBtn}
					data={data}
					renderModal={renderModal}
					isNonChainStore={isNonChainStore}
					isNonData={isNonData}
				/>
			)}
		</>
	);
}
