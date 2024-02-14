import React, { SetStateAction } from 'react';
import * as S from '../style';
import { Props } from '../EachList';
import PickTypesButton from '../PickTypesButton';

interface EachListType extends Props {
	isHiddenOptions: () => boolean;
	isBlockLayout: () => boolean;
}

export default function EachListView(props: EachListType) {
	return (
		<>
			{props.isHiddenOptions() ? null : (
				<li>
					<S.PickQuestion>{props.question.name_ko}</S.PickQuestion>
					<S.ButtonLayout>
						{props.answerList[props.questionIndex]?.map((answer, answerIndex) => {
							return (
								<>
									{props.isBlockLayout() ? (
										<S.ButtonLayout>
											<PickTypesButton
												answer={answer}
												onClickDelete={props.onClickDelete}
												onClickScroll={props.onClickScroll}
												questionIndex={props.questionIndex}
											/>
										</S.ButtonLayout>
									) : (
										<PickTypesButton
											answer={answer}
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
			)}
		</>
	);
}
