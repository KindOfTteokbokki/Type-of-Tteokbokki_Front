import { screen, render } from '@testing-library/react';
import MyPage from '../MyPage';

describe('MyPage Test', () => {
	it('Header text is rendered', () => {
		render(<MyPage />);

		const element = screen.getByText('내 정보');

		expect(element).toBeInTheDocument();
	});
});
