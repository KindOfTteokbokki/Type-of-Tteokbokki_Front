import React from 'react';
import { Main, Header, Icon, Text } from '../Loading/style';
import icon from '../../assets/Food-1.svg';
import { Props } from './Loaded';

export default function LoadedView(props: Props) {
	return (
		<Main>
			<Header>
				<Icon src={icon} />
				{props.loadedHeader}
			</Header>
			<Text>{props.loadedMessage}</Text>
		</Main>
	);
}
