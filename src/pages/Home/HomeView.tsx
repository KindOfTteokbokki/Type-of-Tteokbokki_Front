import React from 'react';
import * as S from './style';
import lock from '../../assets/lock.svg';
import food from '../../assets/tteokbokki.png';
import food1 from '../../assets/cheesy-tokbokki-korean-traditional-food-on-black-board-background-lunch-dish 1.png';
import icon from '../../assets/Hot face.svg';

interface Props {
	onClickMove(): void;
}

export default function HomeView(props: Props) {
	return (
		<S.Section>
			<S.Title>
				<S.Icon src={icon} alt="얼굴 이모지" />이 구역 맵찔이
			</S.Title>
			<S.MainCont>
				<S.MainText>어떤 떡볶이가 먹고싶어?</S.MainText>
				<S.MainImg />
				<S.PickButton onClick={props.onClickMove}>고르러 가기!</S.PickButton>
			</S.MainCont>
			<S.Cont>
				<S.Text>내 입맛</S.Text>
				<S.FlexCont>
					<S.MyTypeImg src={food1} alt="떡볶이 사진" />
					<S.LockCont>
						<S.LockImg src={lock} />
					</S.LockCont>
					<S.LockCont>
						<S.LockImg src={lock} />
					</S.LockCont>
				</S.FlexCont>
			</S.Cont>
			<S.Cont>
				<S.Text>나도 추천할래</S.Text>
				<S.FlexCont>
					<S.MyRecommedImg />
					<S.MyRecommedImg />
					<S.MyRecommedImg />
					<S.MyRecommedImg />
				</S.FlexCont>
			</S.Cont>
			<S.Cont>
				<S.Text>제이드가 추천하는 꿀조합</S.Text>
				<S.FlexCont>
					<S.CombiImg src={food} />
					<S.CombiImg src={food} />
					<S.CombiImg src={food} />
					<S.CombiImg src={food} />
				</S.FlexCont>
			</S.Cont>
		</S.Section>
	);
}
