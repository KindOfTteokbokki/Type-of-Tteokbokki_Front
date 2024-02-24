import React from 'react';
import Navigation from '../Home/Navigation';
import { NavLayout } from '../../components/Layout/MainLayout.jsx/style';
import * as S from './style';
import Back from '../../assets/아이콘_나도추천할래/뒤로가기.svg';
import { theme } from '../../styles/theme';

interface TitleProps {
	name: string;
	count: number;
	text: string[];
	bgcolor: string[];
	role: string[];
}

export default function TitleView(props: TitleProps) {
	return (
		<>
			<NavLayout>
				<S.DeleteIcon src={Back} marginbottom="72px" />
				<S.Header>{`${props.name}가 모은`}</S.Header>
				<S.Header>{`칭호는 ${props.count}개야!`}</S.Header>

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

			<Navigation />
		</>
	);
}
