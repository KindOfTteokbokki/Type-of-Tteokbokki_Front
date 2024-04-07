import React from 'react';
import { render } from '../../../utils/customJestRender';
import { screen } from '@testing-library/react';
import ProfileEdit from '../ProfileEdit';
import { constants } from '../../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

describe('ProfileEdit test', () => {
	it('Header text is rendered', () => {
		render(
			<Provider store={store}>
				<ProfileEdit />
			</Provider>
		);
		const element = screen.getByText(constants.PROFILE_EDIT.header);

		expect(element).toBeInTheDocument();
	});
});
