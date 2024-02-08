import React from 'react';
import { Props } from './PickTypesList';
import * as S from './style';
import PickTypesButton from './PickTypesButton';

interface PickTypeListProps extends Props {
	clickedIndex: number;
	onClickSelect(index: number): void;
}

export default function PickTypesListView(props: PickTypeListProps) {
	return (
		<li>
			<S.PickQuestion>{props.question.name_ko}</S.PickQuestion>
			<S.ButtonLayout>
				{props.answerList.map((answer, answerIndex) => {
					return (
						<>
							{props.questionIndex === 5 ? (
								<S.ButtonLayout>
									<PickTypesButton
										answer={answer}
										clickedIndex={props.clickedIndex}
										answerIndex={answerIndex}
										onClickSelect={props.onClickSelect}
										onClickAdd={props.onClickAdd}
										onClickDelete={props.onClickDelete}
										onClickScroll={props.onClickScroll}
										questionIndex={props.questionIndex}
									/>
								</S.ButtonLayout>
							) : (
								<PickTypesButton
									answer={answer}
									clickedIndex={props.clickedIndex}
									answerIndex={answerIndex}
									onClickSelect={props.onClickSelect}
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
