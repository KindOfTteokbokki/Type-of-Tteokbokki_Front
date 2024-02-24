import React from 'react';
import TitleView from './TitleView';
import { useGet } from '../../api/useFetch';
import { theme } from '../../styles/theme';

export default function Title() {
	const name = '개구리';
	const count = 6;
	const bgcolor = [theme.color.TITLE.PINK, theme.color.TITLE.SKY, theme.color.TITLE.YELLOW];
	const text = ['역시 근본', '주는대로 먹을게', '파인애플 극혐', '맛도리', '돌고 돌아 순정', '역시 근본'];
	const role = ['firstList', 'secondList', 'thirdList'];

	return <TitleView name={name} count={count} text={text} bgcolor={bgcolor} role={role} />;
}
