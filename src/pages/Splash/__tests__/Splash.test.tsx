import * as React from 'react';
import { render, screen } from '@testing-library/react';
import SplashView from '../view/SplashView';
import { constants } from '../../../constants/constants';
import Test from '../Test';

describe('test', () => {
	it('renders the SplashView component', () => {
		render(<Test />);

		const element: any = screen.getByRole('div');

		expect(element).toHaveTextContent('Test');
	});
});
