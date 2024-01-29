import React, { useState } from 'react';
import PickTypesView from './PickTypesView';
import { constants } from '../../constants/constants';

export interface Props {
	headerText: string;
	alertText: string;
	questionList: string[];
	onClickSelect: (index: number) => void;
	index: number;
	answerList: string[];
}

export default function PickTypes() {
	const [button, setButton] = useState(0);
	const [index, setIndex] = useState(0);

	const onClickSelect = (index: number) => {
		setIndex(index);
	};

	return (
		<PickTypesView
			headerText="같이 떡볶이 고르는 중"
			alertText="좋아하는 거 골라봐! 일부만 선택해도 돼."
			questionList={constants.QUESTION}
			onClickSelect={onClickSelect}
			index={index}
			answerList={constants.ANSWER}
		/>
	);
}
