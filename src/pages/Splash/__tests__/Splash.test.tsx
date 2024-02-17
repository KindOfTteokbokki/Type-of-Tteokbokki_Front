import * as React from 'react';
import { render, screen } from '@testing-library/react';
import SplashView from '../view/SplashView';
import { constants } from '../../../constants/constants';

const onClickMove = () => {
	console.log('클릭됨');
};

describe('test', () => {
	it('renders the SplashView component', async () => {
		render(
			<SplashView
				onClickMove={onClickMove}
				kakaoText={constants.SPLASH.KAKAO}
				naverText={constants.SPLASH.NAVER}
				guestText={constants.SPLASH.GUEST}
			/>
		);

		const element: any = await screen.findByText('말만해,');

		expect(element).toBeInTheDocument();
	});
});
