import React from 'react';
import * as S from './style';
import Navigation from '../../components/Navigation/Navigation';
import TitleIcon from '../../assets/내정보_칭호.svg';
import LikeIcon from '../../assets/내정보_좋아요_비활.svg';
import RecommendIcon from '../../assets/내정보_매장제안_비활.svg';
import { theme } from '../../styles/theme';

interface MyPageProps {
	header: string;
	iconText: string[];
	button: string;
	review: string;
}

export default function MyPageView(props: MyPageProps) {
	return (
		<>
			<S.Section>
				<S.Header role="header">
					<S.Button />
					{props.header}
				</S.Header>
				<S.Main>
					<S.MyInfoAndReviewCont>
						<S.MyNameAndButtonCont>
							<S.Name>개구리</S.Name>
							<S.editButton>{props.button}</S.editButton>
						</S.MyNameAndButtonCont>
						<S.IconCont>
							<S.Li>
								<S.Img src={TitleIcon} alt="뱃지 모양 아이콘" />
								<S.Span>{props.iconText[0]}</S.Span>
								<br />
								<S.Span>3</S.Span>
							</S.Li>
							<S.Border margin="0 30px 0 32px" />
							<S.Li>
								<S.Img src={LikeIcon} alt="하트 아이콘" />
								<S.Span color={theme.color.gray}>{props.iconText[1]}</S.Span>
							</S.Li>
							<S.Border margin="0 32px 0 30px" />
							<S.Li>
								<S.Img src={RecommendIcon} alt="매장 모양 아이콘" />
								<S.Span color={theme.color.gray}>{props.iconText[2]}</S.Span>
							</S.Li>
						</S.IconCont>
					</S.MyInfoAndReviewCont>
					<S.MyInfoAndReviewCont>
						<S.MyReviewTitle>{props.review}</S.MyReviewTitle>
					</S.MyInfoAndReviewCont>
				</S.Main>
			</S.Section>
			<Navigation />
		</>
	);
}
