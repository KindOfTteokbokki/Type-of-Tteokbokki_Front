import PickTypes from '../PickTypes';
import { render, screen } from '@testing-library/react';

describe('<PickTypes />', () => {
	it('renders Headers', () => {
		render(<PickTypes />);
		expect(screen.getByText('')).toBeInTheDocument();
	});
});
