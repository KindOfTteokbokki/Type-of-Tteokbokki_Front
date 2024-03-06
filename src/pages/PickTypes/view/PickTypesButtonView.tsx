import React from 'react';
import { Response } from '../PickTypes';
import { PickButton, UnPickButton } from '../style';

interface Props {
	answer: Response;
	onClickDelete: (type: string) => void;
	onClickAdd: () => void;
	isButtonSelected: () => boolean;
	questionIndex: number;
}

export default function PickTypesButtonView(props: Props) {
	return (
		<>
			{props.isButtonSelected() ? (
				<PickButton
					id="button"
					onClick={() => {
						props.onClickDelete(`${(props.questionIndex + 1).toString()}`);
					}}
				>
					{props.answer.name_ko}
				</PickButton>
			) : (
				<UnPickButton
					id="button"
					onClick={() => {
						props.onClickAdd();
					}}
				>
					{props.answer.name_ko}
				</UnPickButton>
			)}
		</>
	);
}
