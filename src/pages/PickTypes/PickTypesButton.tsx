import React from 'react';
import { PickButton, UnPickButton } from './style';

interface Props {
	answer: string;
	index: number;
	onClickSelect: (text: number) => void;
	answerIndex: number;
}

export default function PickTypesButton(props: Props) {
	return (
		<>
			{props.index === props.answerIndex ? (
				<PickButton>{props.answer}</PickButton>
			) : (
				<UnPickButton
					onClick={() => {
						props.onClickSelect(props.answerIndex);
					}}
				>
					{props.answer}
				</UnPickButton>
			)}
		</>
	);
}
