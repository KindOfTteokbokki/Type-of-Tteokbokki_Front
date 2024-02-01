import React, { useState } from 'react';
import { PickButton, UnPickButton } from './style';
import { Answer } from './PickTypes';

interface Props {
	answer: Answer;
	clickedIndex: number;
	answerIndex: number;
	onClickAdd: (type: string[]) => void;
	onClickSelect: (answerIdx: number) => void;
	onClickDelete: (type: string[]) => void;
	onClickScroll: (index: number) => void;
	questionIndex: number;
}

export default function PickTypesButton(props: Props) {
	const [pick, setPick] = useState(true);

	return (
		<>
			{props.clickedIndex === props.answerIndex && pick ? (
				<PickButton
					id="button"
					onClick={() => {
						props.onClickDelete([`question${(props.questionIndex + 1).toString()}`]);
						setPick(false);
						props.onClickScroll(100 * props.questionIndex);
					}}
				>
					{props.answer.name_ko}
				</PickButton>
			) : (
				<UnPickButton
					id="button"
					onClick={() => {
						props.onClickSelect(props.answerIndex);
						props.onClickAdd([(props.questionIndex + 1).toString(), props.answer.name_ko]);
						setPick(true);
						props.onClickScroll(50 * props.questionIndex);
					}}
				>
					{props.answer.name_ko}
				</UnPickButton>
			)}
		</>
	);
}
