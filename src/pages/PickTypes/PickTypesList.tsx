import React, { useState } from 'react';
import * as S from './style';
import PickTypesButton from './PickTypesButton';
import { Answer } from './PickTypes';

interface Props {
	question: any;
	questionIndex: number;
	answerList: Answer[];
	onClickAdd: (type: string[]) => void;
	onClickDelete: (type: string[]) => void;
	onClickScroll: (index: number) => void;
}

export default function PickTypesList(props: Props) {
	const [clickedIndex, setClickedIndex] = useState(-1);

	const onClickSelect = (answerIdx: number) => {
		setClickedIndex(answerIdx);
	};

	console.log(props.answerList[0].code);

	// const array = props.answerList.filter((data) => {
	// 	Number(data.code[2]) === props.questionIndex
	// });

	return (
		<li>
			<S.PickQuestion>{props.question.name_ko}</S.PickQuestion>
			<S.ButtonLayout>
				{props.answerList.map((answer, answerIndex) => {
					return (
						<>
							{props.questionIndex === 5 && Number(answer.code[2]) === props.questionIndex + 1 ? (
								<S.ButtonLayout>
									<PickTypesButton
										answer={answer}
										clickedIndex={clickedIndex}
										answerIndex={answerIndex}
										onClickSelect={onClickSelect}
										onClickAdd={props.onClickAdd}
										onClickDelete={props.onClickDelete}
										onClickScroll={props.onClickScroll}
										questionIndex={props.questionIndex}
									/>
								</S.ButtonLayout>
							) : Number(answer.code[2]) === props.questionIndex + 1 ? (
								<PickTypesButton
									answer={answer}
									clickedIndex={clickedIndex}
									answerIndex={answerIndex}
									onClickSelect={onClickSelect}
									onClickAdd={props.onClickAdd}
									onClickDelete={props.onClickDelete}
									onClickScroll={props.onClickScroll}
									questionIndex={props.questionIndex}
								/>
							) : null}
						</>
					);
				})}
			</S.ButtonLayout>
		</li>
	);
}
