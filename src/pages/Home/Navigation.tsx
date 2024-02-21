import React from 'react';
import NavigationView from './NavigationView';
import { useNavigate } from 'react-router-dom';
import { constants } from '../../constants/constants';

export default function Navigation() {
	const navigator = useNavigate();

	const onClickMove = (url: string) => {
		navigator(url);
	};

	const navText = constants.HOME.NAVIGATION;

	return <NavigationView onClickMove={onClickMove} navText={navText} />;
}
