import { screen, render } from '@testing-library/react';
import MyPageView from '../MyPageView';
import { constants } from '../../../constants/constants';
import { useNavigate } from 'react-router-dom';

const header = constants.MYPAGE.header;
const iconText = constants.MYPAGE.ICON;

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

describe('MyPage Test', () => {
	it('Header text is rendered', () => {
		render(<MyPageView header={header} iconText={iconText} />);

		const element = screen.getByRole('header');

		expect(element).toBeInTheDocument();
	});

	it('Icon text is rendered', () => {
		render(<MyPageView header={header} iconText={iconText} />);

		const iconFirst = screen.getByText(constants.MYPAGE.ICON[0]);
		const iconSecond = screen.getByText(constants.MYPAGE.ICON[1]);
		const iconThird = screen.getByText(constants.MYPAGE.ICON[2]);

		expect(iconFirst).toBeInTheDocument();
		expect(iconSecond).toBeInTheDocument();
		expect(iconThird).toBeInTheDocument();
	});
});
