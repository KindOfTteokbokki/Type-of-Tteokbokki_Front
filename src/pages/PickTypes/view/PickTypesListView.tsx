import React, { useRef } from 'react';
import { Props } from '../PickTypesList';
import * as S from '../style';
import { Response } from '../PickTypes';
import EachList from '../EachList';

interface PickTypeListProps extends Props {
	questionList: Response[];
	answerList: Response[][];
}

export default function PickTypesListView(props: PickTypeListProps) {
	return (
		<>
			{props.questionList?.map((question, questionIndex) => {
				return (
					<EachList
						question={question}
						questionIndex={questionIndex}
						answerList={props.answerList}
						onClickDelete={props.onClickDelete}
					/>
				);
			})}
		</>
	);
}
