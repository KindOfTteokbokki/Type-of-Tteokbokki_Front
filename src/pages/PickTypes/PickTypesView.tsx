import React, { useEffect } from 'react';
import { useState } from 'react';
import * as S from './style';
import { Props } from './PickTypes';
import PickTypesList from './PickTypesList';
import deleteIcon from '../../assets/close_small_red.svg';
import BigRedButton from '../../components/Button/BigRedButton/BigRedButton';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { JSX } from 'react/jsx-runtime';
import { Response } from './PickTypes';
import useAxios from '../../api/useAxios';
import axios from 'axios';

export default function PickTypesView(props: Props) {
	const selector = useSelector((state: RootStateType) => {
		return state.userPick;
	});

	const renderButton = () => {
		const render: JSX.Element[] = [];
		const filteredArray = Object.values(selector).filter((value) => value.code[4] !== '0');
		console.log(filteredArray);

		filteredArray.map((value) => {
			render.push(
				<S.PickButton
					onClick={() => {
						props.onClickDelete(`${value.code[2]}`);
					}}
				>
					{value.name_ko}
					<S.AddIcon src={deleteIcon} alt="삭제 아이콘" />
				</S.PickButton>
			);
		});

		return render;
	};

	const onClickScroll = (index: number) => {
		document.getElementById('pickType')?.scrollTo(0, index);
	};

	const setConstants = (list: Response[], questionIndex: number) => {
		const filteredList = list.filter(
			(answer: Response) => Number(answer.code[2]) === Number(questionIndex + 1) && answer.code[4] !== '0'
		);

		return filteredList;
	};

	return (
		<S.Cont>
			<S.Layout id="pickType">
				<S.Header>
					<S.HeadText>{props.headerText}</S.HeadText>
				</S.Header>
				<S.Main>
					<S.MessageLayout>{props.alertText}</S.MessageLayout>
					<S.FlexLayout>
						{props.questionList?.map((question, questionIndex) => {
							const key = 'question' + questionIndex;

							const filteredList = setConstants(props.answerList, questionIndex);

							return (
								<>
									{(questionIndex === 1 && selector[key].name_ko !== '다른거') ||
									(questionIndex === 5 && selector[key].name_ko !== '매운거') ? null : (
										<PickTypesList
											key={questionIndex}
											question={question}
											questionIndex={questionIndex}
											answerList={filteredList}
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
		</S.Cont>
	);
}
