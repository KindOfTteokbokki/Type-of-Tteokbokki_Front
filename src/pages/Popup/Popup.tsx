import React, { useEffect, useState } from 'react';
import PopupView from './PopupView';
import { useNavigate } from 'react-router-dom';
import useAxios, { baseUrl } from '../../api/useAxios';
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
	const postFunc = usePost(`${baseUrl}/findTitle`);

	const selector = useSelector((state: RootStateType) => {
		return state.userPick;
	});

	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	const navigator = useNavigate();
	const postData: any = {};
	const dispatch = useDispatch();

	for (const [key, value] of Object.entries(selector)) {
		postData[key] = value.code;
	}

	const onClickMove = () => {
		navigator('/home');
	};

	useEffect(() => {
		if (token) {
			postFunc(postData, { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }).then((res: any) => {
				setData(res.data);
				dispatch(addTitle(res.data));
			});
		} else {
			postFunc(postData).then((res: any) => {
				setData(res.data);
				dispatch(addTitle(res.data));
			});
		}
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
