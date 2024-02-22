import * as React from 'react';
import { render, screen } from '@testing-library/react';
import SplashView from '../view/SplashView';
import { constants } from '../../../constants/constants';
import Basic from '../Basic';

describe('test', () => {
	it('renders the SplashView component', async () => {
		render(<Basic />);

		const element: any = await screen.findByText('말만해,');

		expect(element).toBeInTheDocument();
	});
});
