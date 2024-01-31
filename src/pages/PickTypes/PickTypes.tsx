import React, { useEffect, useState } from 'react';
import PickTypesView from './PickTypesView';
import { constants } from '../../constants/constants';
import { addPickType, deletePickType } from '../../slice/userPickSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAxios, { baseUrl } from '../../api/useAxios';

export interface Props {
	headerText: string;
	alertText: string;
	selectText: string;
	questionList: string[];
	answerList: string[][];
	onClickAdd: (type: string[]) => void;
	onClickMove(): void;
	onClickDelete: (type: string[]) => void;
}

export default function PickTypes() {
	const navigator = useNavigate();
	const dispatch = useDispatch();

	const { response, loading, error, sendData } = useAxios({
		method: 'GET',
		url: 'http://localhost:8080/api/getQA',
		headers: {
			accept: '*/*',
		},
	});

	console.log(response);

	const onClickAdd = (type: string[]) => {
		dispatch(addPickType(type));
	};

	const onClickMove = () => {
		navigator('/recommend');
	};

	const onClickDelete = (type: string[]) => {
		dispatch(deletePickType(type));
	};

	return (
		<PickTypesView
			headerText="같이 떡볶이 고르는 중"
			alertText="좋아하는 거 골라봐! 일부만 선택해도 돼."
			selectText="선택하기"
			questionList={constants.QUESTION}
			answerList={constants.ANSWER}
			onClickAdd={onClickAdd}
			onClickMove={onClickMove}
			onClickDelete={onClickDelete}
		/>
	);
}
