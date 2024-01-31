import React, { useState } from 'react';
import { PickButton, UnPickButton } from './style';

interface Props {
	answer: string;
	clickedIndex: number;
	answerIndex: number;
	onClickAdd: (type: string[]) => void;
	onClickSelect: (answerIdx: number) => void;
	onClickDelete: (type: string[]) => void;
	questionIndex: number;
}

export default function PickTypesButton(props: Props) {
	const [pick, setPick] = useState(true);

	return (
		<>
			{props.clickedIndex === props.answerIndex && pick ? (
				<PickButton
					onClick={() => {
						props.onClickDelete([`question${(props.questionIndex + 1).toString()}`]);
						setPick(false);
					}}
				>
					{props.answer}
				</PickButton>
			) : (
				<UnPickButton
					onClick={() => {
						props.onClickSelect(props.answerIndex);
						props.onClickAdd([(props.questionIndex + 1).toString(), props.answer]);
						setPick(true);
					}}
				>
					{props.answer}
				</UnPickButton>
			)}
		</>
	);
}
