import React, { useEffect } from 'react';
import RecommendView from './view/RecommendView';
import { useMoveLogin } from '../../hooks/useMoveLogin';
import { constants } from '../../constants/constants';

export default function Recommend() {
	let images: HTMLImageElement[] = [];

	function preload(image: string[]) {
		for (let i = 0; i < image.length; i++) {
			images[i] = new Image();
			images[i].src = image[0];
		}
	}

	useEffect(() => {
		preload(['/basic.svg']);
	}, []);

	useMoveLogin();

	return <RecommendView header={constants.RECOMMEND.header} header2={constants.RECOMMEND.header_2} />;
}
