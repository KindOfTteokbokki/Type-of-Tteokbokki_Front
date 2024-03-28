import React, { useEffect } from 'react';
import RecommendView from './view/RecommendView';
import { useMoveLogin } from '../../hooks/useMoveLogin';

export default function Recommend() {
	let images: HTMLImageElement[] = [];

	function preload(image: string[]) {
		for (let i = 0; i < image.length; i++) {
			images[i] = new Image();
			images[i].src = image[0];
		}
	}

	useEffect(() => {
		preload(['/basic.webp']);
	}, []);

	useMoveLogin();
	return <RecommendView />;
}
