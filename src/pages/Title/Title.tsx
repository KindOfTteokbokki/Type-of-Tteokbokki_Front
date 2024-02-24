import React from 'react';
import TitleView from './TitleView';
import { useGet } from '../../api/useFetch';

export default function Title() {
	const name = '개구리';
	const count = 5;

	return <TitleView name={name} count={count} />;
}
