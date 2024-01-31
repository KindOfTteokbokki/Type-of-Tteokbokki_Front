import React from 'react';
import { useState } from 'react';
import * as S from './style';
import { Props } from './PickTypes';
import PickTypesList from './PickTypesList';
import deleteIcon from '../../assets/close_small_red.svg';
import BigRedButton from '../../components/Button/BigRedButton/BigRedButton';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { JSX } from 'react/jsx-runtime';

export default function PickTypesView(props: Props) {
	const selector = useSelector((state: RootStateType) => {
		return state.userPick;
	});

	const renderButton = () => {
		const render: JSX.Element[] = [];
		Object.values(selector).forEach((value) => {
			const key = Object.keys(selector).find((key) => selector[key] === value);

			render.push(
				<S.PickButton
					onClick={() => {
						props.onClickDelete([key ? key : 'question0']);
					}}
				>
					{value}
					<S.AddIcon src={deleteIcon} alt="삭제 아이콘" />
				</S.PickButton>
			);
		});
		return render;
	};

	const onClickScroll = (index: number) => {
		document.getElementById('pickType')?.scrollTo(0, index);
	};

	return (
		<S.Layout id="pickType">
			<S.Header>
				<S.HeadText>{props.headerText}</S.HeadText>
			</S.Header>
			<S.Main>
				<S.MessageLayout>{props.alertText}</S.MessageLayout>
				<S.FlexLayout>
					{props.questionList.map((question, questionIndex) => {
						const key = 'question' + questionIndex;
						return (
							<>
								{questionIndex === 1 && selector[key] !== '다른거' ? null : questionIndex === 5 &&
								  selector[key] !== '매운거' ? null : (
									<PickTypesList
										question={question}
										questionIndex={questionIndex}
										answerList={props.answerList}
										onClickAdd={props.onClickAdd}
										onClickDelete={props.onClickDelete}
										onClickScroll={onClickScroll}
									/>
								)}
							</>
						);
					})}
				</S.FlexLayout>
			</S.Main>
			<S.ResultLayout>
				{renderButton()}
				<S.ResultButtonLayout>
					<BigRedButton text={props.selectText} onclick={props.onClickMove} />
				</S.ResultButtonLayout>
			</S.ResultLayout>
		</S.Layout>
	);
}
