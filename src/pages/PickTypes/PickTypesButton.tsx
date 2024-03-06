import React, { useState } from 'react';
import { RootStateType } from '../../store';
import { Response } from './PickTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addPickType } from '../../slice/userPickSlice';
import PickTypesButtonView from './view/PickTypesButtonView';

interface Props {
	answer: Response;
	onClickDelete: (type: string) => void;
	questionIndex: number;
}

export default function PickTypesButton(props: Props) {
	const dispatch = useDispatch();

	const onClickAdd = () => {
		dispatch(addPickType([props.questionIndex + 1, props.answer]));
	};

	const userPick = useSelector((state: RootStateType) => {
		return state.userPick;
	});

	// 해당 값이 유저 선택 리듀서에 있는지 확인
	function checkInUserPick(checkCode: string) {
		for (const [key, value] of Object.entries(userPick)) {
			if (value.code === checkCode) {
				return true;
			}
		}
		return false;
	}

	// 버튼이 눌렸는지 확인
	function isButtonSelected() {
		if (checkInUserPick(props.answer.code)) {
			return true;
		}
		return false;
	}

	return (
		<PickTypesButtonView
			answer={props.answer}
			onClickDelete={props.onClickDelete}
			onClickAdd={onClickAdd}
			isButtonSelected={isButtonSelected}
			questionIndex={props.questionIndex}
		/>
	);
}
