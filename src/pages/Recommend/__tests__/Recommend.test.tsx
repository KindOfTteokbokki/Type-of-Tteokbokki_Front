import { render } from '../../../utils/customJestRender';
import { screen, fireEvent } from '@testing-library/react';
import Recommend from '../Recommend';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

describe('Recommend page test', () => {
	it('When a review is clicked, open the detail view.', () => {
		render(<Recommend />);
		const element = screen.getByRole('review');

		fireEvent.click(element);
		expect(mockNavigate).toBeCalledWith('/recommend/:id');
	});
});
