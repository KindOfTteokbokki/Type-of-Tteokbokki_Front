import React from 'react';
import Navigation from '../Home/Navigation';
import { NavLayout } from '../../components/Layout/MainLayout.jsx/style';
import * as S from './style';
import Back from '../../assets/아이콘_나도추천할래/뒤로가기.svg';
import { theme } from '../../styles/theme';
import lock from '../../assets/아이콘/자물쇠.svg';
import move from '../../assets/칭호추가획득유도.svg';

interface TitleProps {
	name: string;
	count: number;
	text: string[];
	bgcolor: string[];
	role: string[];
	moveText: string;
	onClickMoveBack?: () => void;
}

export default function TitleView(props: TitleProps) {
	return (
		<>
			<NavLayout>
				<S.Icon src={Back} role="back" />
				<S.Header>
					<S.H1>{`${props.name}가 모은`}</S.H1>
					<S.H1>{`칭호는 ${props.count}개야!`}</S.H1>
				</S.Header>

				<S.Ul>
					{props.text.map((title, index) => {
						return (
							<>
								<S.Li
									bgcolor={props.bgcolor[index % props.bgcolor.length]}
									role={props.role[index % props.role.length]}
									key={index}
								>
									<S.TitleIcon />
									{title}
								</S.Li>
							</>
						);
					})}
				</S.Ul>
			</NavLayout>
			<S.Button>
				<S.Icon src={lock} alt="자물쇠 아이콘" />
				<S.Span>{props.moveText}</S.Span>
				<S.Icon src={move} alt="이동 아이콘" role="move" />
			</S.Button>
			<Navigation />
		</>
	);
}
