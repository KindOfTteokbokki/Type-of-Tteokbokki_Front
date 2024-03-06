import React from 'react';
import * as S from '../style';
import Navigation from '../../../components/Navigation/Navigation';
import IconView from './IconView';
import NonDataView from './NonDataView';
import ReviewList from '../ReviewList';
import { ReviewData } from './ReviewListView';

export interface MyPageProps {
	text: {
		header: string;
		EDIT_BUTTON: string;
		ICON: string[];
		REVIEW: string;
		NON_DATA: string;
		RECOMMEND_BUTTON: string;
	};
	onClickBack: () => void;
	onClickMoveProfileEdit: () => void;
	onClickMoveRecommend: () => void;
	count: number;
	nickName: string;
	reviewData: ReviewData[];
}

export default function MyPageView(props: MyPageProps) {
	console.log(props.reviewData);
	return (
		<>
			<S.Section>
				<S.Header role="header">
					<S.Button onClick={props.onClickBack} />
					{props.text.header}
				</S.Header>
				<S.Main>
					<S.MyInfoAndReviewCont>
						<S.MyNameAndButtonCont>
							<S.Name>{props.nickName}</S.Name>
							<S.editButton onClick={props.onClickMoveProfileEdit}>{props.text.EDIT_BUTTON}</S.editButton>
						</S.MyNameAndButtonCont>
						<IconView text={props.text} count={props.count} />
					</S.MyInfoAndReviewCont>
					<S.MyInfoAndReviewCont
						minHeight={props.reviewData.length ? '310px' : undefined}
						padding={props.reviewData.length ? '16px 0' : undefined}
					>
						<S.MyReviewTitle>{props.text.REVIEW}</S.MyReviewTitle>
						{props.reviewData[0] ? (
							<ReviewList reviewData={props.reviewData} />
						) : (
							<NonDataView text={props.text} onClickMoveRecommend={props.onClickMoveRecommend} />
						)}
					</S.MyInfoAndReviewCont>
				</S.Main>
			</S.Section>
			<Navigation />
		</>
	);
}
