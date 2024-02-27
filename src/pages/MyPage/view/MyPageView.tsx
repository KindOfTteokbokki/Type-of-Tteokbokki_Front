import React from 'react';
import * as S from '../style';
import Navigation from '../../../components/Navigation/Navigation';
import IconView from './IconView';
import NonDataView from './NonDataView';
import ReviewList from '../ReviewList';

export interface MyPageProps {
	text: {
		header: string;
		EDIT_BUTTON: string;
		ICON: string[];
		REVIEW: string;
		NON_DATA: string;
		RECOMMEND_BUTTON: string;
	};
	onClickMoveRecommend: () => void;
	data: string[];
}

export default function MyPageView(props: MyPageProps) {
	return (
		<>
			<S.Section>
				<S.Header role="header">
					<S.Button />
					{props.text.header}
				</S.Header>
				<S.Main>
					<S.MyInfoAndReviewCont>
						<S.MyNameAndButtonCont>
							<S.Name>개구리</S.Name>
							<S.editButton>{props.text.EDIT_BUTTON}</S.editButton>
						</S.MyNameAndButtonCont>
						<IconView text={props.text} />
					</S.MyInfoAndReviewCont>
					<S.MyInfoAndReviewCont padding={props.data.length ? '16px 0' : undefined}>
						<S.MyReviewTitle>{props.text.REVIEW}</S.MyReviewTitle>
						{props.data.length ? (
							<ReviewList data={props.data} />
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
