import React from 'react';
import * as S from '../style';
import { theme } from '../../../styles/theme';
import { MyPageProps } from './MyPageView';
import TitleIcon from '../../../assets/내정보_칭호.svg';
import LikeIcon from '../../../assets/내정보_좋아요_비활.svg';
import RecommendIcon from '../../../assets/내정보_매장제안_비활.svg';

interface IconViewProps {
	text: { ICON: string[] };
	count: number;
}

export default function IconView(props: IconViewProps) {
	return (
		<S.IconCont>
			<S.Li>
				<S.Img src={TitleIcon} alt="뱃지 모양 아이콘" />
				<S.Span>{props.text.ICON[0]}</S.Span>
				<br />
				<S.Span>{props.count}</S.Span>
			</S.Li>
			<S.Border margin="0 30px 0 32px" />
			<S.Li>
				<S.Img src={LikeIcon} alt="하트 아이콘" />
				<S.Span color={theme.color.gray}>{props.text.ICON[1]}</S.Span>
			</S.Li>
			<S.Border margin="0 32px 0 30px" />
			<S.Li>
				<S.Img src={RecommendIcon} alt="매장 모양 아이콘" />
				<S.Span color={theme.color.gray}>{props.text.ICON[2]}</S.Span>
			</S.Li>
		</S.IconCont>
	);
}
