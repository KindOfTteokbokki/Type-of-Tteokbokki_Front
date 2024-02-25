import { screen, render } from '@testing-library/react';
import MyPageView from '../MyPageView';
import { constants } from '../../../constants/constants';
import { useNavigate } from 'react-router-dom';

const header = constants.MYPAGE.header;
const iconText = constants.MYPAGE.ICON;
const button = constants.MYPAGE.button;
const review = constants.MYPAGE.REVIEW;

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

describe('MyPage Test', () => {
	it('Header text is rendered', () => {
		render(<MyPageView header={header} iconText={iconText} button={button} review={review} />);

		const element = screen.getByRole('header');

		expect(element).toBeInTheDocument();
	});

	it('Icon text is rendered', () => {
		render(<MyPageView header={header} iconText={iconText} button={button} review={review} />);

		const iconFirst = screen.getByText(constants.MYPAGE.ICON[0]);
		const iconSecond = screen.getByText(constants.MYPAGE.ICON[1]);
		const iconThird = screen.getByText(constants.MYPAGE.ICON[2]);

		expect(iconFirst).toBeInTheDocument();
		expect(iconSecond).toBeInTheDocument();
		expect(iconThird).toBeInTheDocument();
	});

	it('My review header is rendered', () => {
		render(<MyPageView header={header} iconText={iconText} button={button} review={review} />);

		const element = screen.getByText(constants.MYPAGE.REVIEW);

		expect(element).toBeInTheDocument();
	});
});
