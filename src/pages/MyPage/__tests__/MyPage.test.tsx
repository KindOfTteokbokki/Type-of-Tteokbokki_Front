import { screen, render } from '@testing-library/react';
import MyPageView from '../MyPageView';
import { constants } from '../../../constants/constants';
import { useNavigate } from 'react-router-dom';

const header = constants.MYPAGE.header;

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

describe('MyPage Test', () => {
	it('Header text is rendered', () => {
		render(<MyPageView header={header} />);

		const element = screen.getByRole('heading');

		expect(element).toBeInTheDocument();
	});
});
