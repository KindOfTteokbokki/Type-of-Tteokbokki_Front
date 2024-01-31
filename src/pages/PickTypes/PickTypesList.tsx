import React, { useState } from 'react';
import * as S from './style';
import PickTypesButton from './PickTypesButton';

interface Props {
	question: string;
	questionIndex: number;
	answerList: string[][];
	onClickAdd: (type: string[]) => void;
	onClickDelete: (type: string[]) => void;
	onClickScroll: (index: number) => void;
}

export default function PickTypesList(props: Props) {
	const [clickedIndex, setClickedIndex] = useState(-1);

	const onClickSelect = (answerIdx: number) => {
		setClickedIndex(answerIdx);
	};

	return (
		<li>
			<S.PickQuestion>{props.question}</S.PickQuestion>
			<S.ButtonLayout>
				{props.answerList[props.questionIndex].map((answer, answerIndex) => {
					return (
						<>
							{props.questionIndex === 5 ? (
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
							) : (
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
							)}
						</>
					);
				})}
			</S.ButtonLayout>
		</li>
	);
}
