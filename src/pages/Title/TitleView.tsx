import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { NavLayout } from '../../components/Layout/MainLayout.jsx/style';
import * as S from './style';
import Back from '../../assets/아이콘_나도추천할래/뒤로가기.svg';
import { theme } from '../../styles/theme';
import lock from '../../assets/아이콘/자물쇠.svg';
import move from '../../assets/칭호추가획득유도.svg';

interface TitleProps {
	nickName: string;
	title: {
		countTitle: {
			count: number;
			title_name: string;
			user_id: number;
		};
		haveTitle: any[];
	};
	bgcolor: string[];
	role: string[];
	moveText: string;
	onClickMoveBack?: () => void;
	onClickMoveLock?: () => void;
	hasLastConsonantLetter: (name: string) => boolean;
}

export default function TitleView(props: TitleProps) {
	return (
		<>
			<NavLayout>
				<S.Icon src={Back} role="back" onClick={props.onClickMoveBack} />
				<S.Header>
					<S.H1>
						{props.hasLastConsonantLetter(props.nickName) ? `${props.nickName}이 모은` : `${props.nickName}가 모은`}
					</S.H1>
					<S.H1>{`칭호는 ${props.title?.countTitle.count}개야!`}</S.H1>
				</S.Header>

				<S.Ul>
					{props.title?.haveTitle.map((title, index) => {
						return (
							<>
								<S.Li
									bgcolor={props.bgcolor[index % props.bgcolor.length]}
									role={props.role[index % props.role.length]}
									key={index}
								>
									<S.TitleIcon src={title.icorn_file_path + title.icorn_file_masking_name} alt="칭호 아이콘" />
									<S.ListText>{title.title_name}</S.ListText>
								</S.Li>
							</>
						);
					})}
				</S.Ul>
			</NavLayout>
			<S.Button role="move" onClick={props.onClickMoveLock}>
				<S.Icon src={lock} alt="자물쇠 아이콘" />
				<S.Span>{props.moveText}</S.Span>
				<S.Icon src={move} alt="이동 아이콘" />
			</S.Button>
			<Navigation />
		</>
	);
}
