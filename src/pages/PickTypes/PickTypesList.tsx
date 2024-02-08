import React, { useState } from 'react';
import * as S from './style';
import PickTypesButton from './PickTypesButton';
import { Response } from './PickTypes';
import { constants } from '../../constants/constants';
import PickTypesListView from './PickTypesListView';

export interface Props {
	question: Response;
	questionIndex: number;
	answerList: Response[];
	onClickAdd: (type: [string, Response]) => void;
	onClickDelete: (type: string) => void;
	onClickScroll: (index: number) => void;
}

export default function PickTypesList(props: Props) {
	const [clickedIndex, setClickedIndex] = useState(-1);

	const onClickSelect = (answerIdx: number) => {
		setClickedIndex(answerIdx);
	};

	return (
		<PickTypesListView
			question={props.question}
			answerList={props.answerList}
			clickedIndex={clickedIndex}
			onClickSelect={onClickSelect}
			onClickAdd={props.onClickAdd}
			onClickDelete={props.onClickDelete}
			onClickScroll={props.onClickScroll}
			questionIndex={props.questionIndex}
		/>
	);
}
