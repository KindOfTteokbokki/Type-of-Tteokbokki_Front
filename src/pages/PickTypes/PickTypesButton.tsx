import React, { useState } from 'react';
import { PickButton, UnPickButton } from './style';

interface Props {
	answer: string;
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
					{props.answer}
				</PickButton>
			) : (
				<UnPickButton
					id="button"
					onClick={() => {
						props.onClickSelect(props.answerIndex);
						props.onClickAdd([(props.questionIndex + 1).toString(), props.answer]);
						setPick(true);
						props.onClickScroll(50 * props.questionIndex);
					}}
				>
					{props.answer}
				</UnPickButton>
			)}
		</>
	);
}
