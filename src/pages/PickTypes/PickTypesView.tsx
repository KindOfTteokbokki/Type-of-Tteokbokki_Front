import React, { useState } from 'react';
import * as S from './style';
import { Props } from './PickTypes';
import PickTypesButton from './PickTypesButton';

export default function PickTypesView(props: Props) {
	return (
		<S.Layout>
			<S.Header>
				<S.HeadText>{props.headerText}</S.HeadText>
			</S.Header>
			<S.Main>
				<S.MessageLayout>{props.alertText}</S.MessageLayout>
				<S.FlexLayout>
					{props.questionList.map((question, questionIndex) => {
						return (
							<li>
								<S.PickQuestion>{question}</S.PickQuestion>
								<S.ButtonLayout>
									{props.answerList.map((answer, answerIndex) => {
										return (
											<PickTypesButton
												answer={answer}
												index={props.index}
												answerIndex={answerIndex}
												onClickSelect={props.onClickSelect}
											/>
										);
									})}
								</S.ButtonLayout>
							</li>
						);
					})}
				</S.FlexLayout>
			</S.Main>
		</S.Layout>
	);
}
