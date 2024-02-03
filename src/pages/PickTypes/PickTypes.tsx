import React, { useEffect, useState } from 'react';
import PickTypesView from './PickTypesView';
import { constants } from '../../constants/constants';
import { addPickType, deletePickType, initialState, initializeType } from '../../slice/userPickSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAxios, { baseUrl } from '../../api/useAxios';
import axios, { AxiosPromise } from 'axios';
import { RootStateType } from '../../store';
import { addStore } from '../../slice/findStoreSlice';
import { addTitle, titleInitialState } from '../../slice/findTitleSlice';

export interface Props {
	headerText: string;

	alertText: string;
	selectText: string;
	questionList: Response[];
	answerList: Response[];
	onClickAdd: (type: [string, Response]) => void;
	onClickMove(): void;
	onClickDelete: (type: string) => void;
}

export type Response = {
	code: string;
	name_ko: string;
};

export default function PickTypes() {
	const navigator = useNavigate();
	const dispatch = useDispatch();
	const selector = useSelector((state: RootStateType) => {
		return state.userPick;
	});

	console.log(selector);
	const store = useSelector((state: RootStateType) => {
		return state.store.value;
	});

	const { response, error, loading, sendData } = useAxios({
		method: 'GET',
		url: 'http://118.67.132.171:8080/api/getQA',
		headers: {
			accept: '*/*',
		},
	});

	const questionList = response?.data.question;
	const answerList = response?.data.answer;

	const onClickAdd = (type: [string, Response]) => {
		dispatch(addPickType(type));
	};

	const onClickMove = () => {
		navigator('/loading');
	};

	const onClickDelete = (type: string) => {
		dispatch(deletePickType(type));
	};

	return (
		<>
			<PickTypesView
				headerText="같이 떡볶이 고르는 중"
				alertText="좋아하는 거 골라봐! 일부만 선택해도 돼."
				selectText="선택하기"
				questionList={questionList}
				answerList={answerList}
				onClickAdd={onClickAdd}
				onClickMove={onClickMove}
				onClickDelete={onClickDelete}
			/>
		</>
	);
}
