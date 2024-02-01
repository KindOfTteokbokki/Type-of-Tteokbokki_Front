import React from 'react';
import HomeView from './HomeView';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigator = useNavigate();

	const onClickMove = () => {
		navigator('/pickTypes');
	};

	return <HomeView onClickMove={onClickMove} />;
}
