import React, { useEffect, useState } from 'react';
import { Response } from './PickTypes';
import PickTypesListView from './view/PickTypesListView';
import useAxios from '../../api/useAxios';

export interface Props {
	onClickScroll: (index: number) => void;
	onClickDelete(type: string): void;
}

export default function PickTypesList(props: Props) {
	const newArr: Response[][] = [];

	const { response } = useAxios({
		method: 'GET',
		url: 'http://118.67.132.171:8080/api/getQA',
		headers: {
			accept: '*/*',
		},
	});

	const questionList = response?.data.question;
	const answerList = response?.data.answer;

	// answerList를 질문code에 맞게 걸러주는 역할
	const setConstants = (list: Response[], questionCode: string) => {
		const filteredList = list.filter(
			(answer: Response) => Number(answer.code[2]) === Number(questionCode) && answer.code[4] !== '0'
		);
		return filteredList;
	};

	// 전체 answerList를 걸러서 새로운 배열에 넣어주는 역할
	function createNewAnswerList() {
		questionList?.map((question: Response) => {
			const filteredAnswerList = setConstants(answerList, question.code[4]);
			newArr.push(filteredAnswerList);
		});
		return newArr;
	}

	return (
		<PickTypesListView
			questionList={questionList}
			answerList={createNewAnswerList()}
			onClickDelete={props.onClickDelete}
			onClickScroll={props.onClickScroll}
		/>
	);
}
