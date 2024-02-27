import { render } from '../../../utils/customJestRender';
import { screen } from '@testing-library/react';
import ProfileEdit from '../ProfileEdit';
import { constants } from '../../../constants/constants';

describe('ProfileEdit test', () => {
	it('Header text is rendered', () => {
		render(<ProfileEdit />);
		const element = screen.getByText(constants.PROFILE_EDIT.header);

		expect(element).toBeInTheDocument();
	});
});
