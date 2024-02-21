import React from 'react';
import * as S from './style';
import homeIcon from '../../assets/아이콘/하단내비_홈.svg';
import recommIcon from '../../assets/아이콘/하단내비_후기.svg';
import titleIcon from '../../assets/아이콘/하단내비_칭호.svg';
import myPageIcon from '../../assets/아이콘/하단내비_내정보.svg';

interface NavigationProps {
	onClickMove: (url: string) => any;
	navText: string[];
}

export default function NavigationView(props: NavigationProps) {
	return (
		<S.NavBar>
			<S.Figure
				onClick={() => {
					props.onClickMove('/home');
				}}
			>
				<S.NavIcon src={homeIcon} alt="홈 아이콘" size="40px" margin="6px 0 2px" />
				<S.NavText>{props.navText[0]}</S.NavText>
			</S.Figure>
			<S.Figure
				onClick={() => {
					props.onClickMove('/recommend');
				}}
			>
				<S.NavIcon src={recommIcon} alt="추천 후기 아이콘" size="36px" margin="8px 0 4px" />
				<S.ReviewText>{props.navText[1]}</S.ReviewText>
			</S.Figure>
			<S.Figure>
				<S.NavIcon src={titleIcon} alt="칭호 아이콘" size="36px" margin="6px 0 4px" />
				<S.NavText
					onClick={() => {
						props.onClickMove('/title');
					}}
				>
					{props.navText[2]}
				</S.NavText>
			</S.Figure>
			<S.Figure>
				<S.NavIcon src={myPageIcon} alt="내 정보 아이콘" size="40px" margin="6px 0 2px" />
				<S.NavText
					onClick={() => {
						props.onClickMove('/mypage');
					}}
				>
					{props.navText[3]}
				</S.NavText>
			</S.Figure>
		</S.NavBar>
	);
}
