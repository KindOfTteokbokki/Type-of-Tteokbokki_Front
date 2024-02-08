import React, { useState } from 'react';
import { PickButton, UnPickButton } from './style';
import { Response } from './PickTypes';
import { useSelector } from 'react-redux';

interface Props {
	answer: Response;
	clickedIndex: number;
	answerIndex: number;
	onClickAdd: (type: [string, Response]) => void;
	onClickSelect: (answerIdx: number) => void;
	onClickDelete: (type: string) => void;
	onClickScroll: (index: number) => void;
	questionIndex: number;
}

export default function PickTypesButton(props: Props) {
	const [pick, setPick] = useState(true);
	const userPick = useSelector((state: any) => {
		return state.userPick;
	});

	function checkIn(code: any): any {
		for (const [key, value] of Object.entries(userPick)) {
			if (userPick[key][code] === code) {
				return true;
			}
		}
		return false;
	}
	return (
		<>
			{props.clickedIndex === props.answerIndex && pick && checkIn(props.answer.code) ? (
				<PickButton
					id="button"
					onClick={() => {
						props.onClickDelete(`${(props.questionIndex + 1).toString()}`);
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
						props.onClickAdd([(props.questionIndex + 1).toString(), props.answer]);
						setPick(true);
						props.onClickScroll(100 * props.questionIndex);
					}}
				>
					{props.answer.name_ko}
				</UnPickButton>
			)}
		</>
	);
}
