import { render } from '../../../utils/customJestRender';
import { screen, fireEvent } from '@testing-library/react';
import MyPageView from '../view/MyPageView';
import { constants } from '../../../constants/constants';
import { useNavigate } from 'react-router-dom';
import NonDataView from '../view/NonDataView';

const text = constants.MYPAGE;
const onClickMoveRecommend = () => {};
const data = ['후기', '후기', '후기'];

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

describe('MyPage Test', () => {
	it('Header text is rendered', () => {
		render(<MyPageView text={text} onClickMoveRecommend={onClickMoveRecommend} data={data} />);

		const element = screen.getByRole('header');

		expect(element).toBeInTheDocument();
	});

	it('Icon text is rendered', () => {
		render(<MyPageView text={text} onClickMoveRecommend={onClickMoveRecommend} data={data} />);

		const iconFirst = screen.getByText(constants.MYPAGE.ICON[0]);
		const iconSecond = screen.getByText(constants.MYPAGE.ICON[1]);
		const iconThird = screen.getByText(constants.MYPAGE.ICON[2]);

		expect(iconFirst).toBeInTheDocument();
		expect(iconSecond).toBeInTheDocument();
		expect(iconThird).toBeInTheDocument();
	});

	it('My review header is rendered', () => {
		render(<MyPageView text={text} onClickMoveRecommend={onClickMoveRecommend} data={data} />);

		const element = screen.getByText(constants.MYPAGE.REVIEW);

		expect(element).toBeInTheDocument();
	});

	it('When is clicked red button, move to recommend page', () => {
		const navigate = useNavigate();
		const onClickMoveRecommend = () => {
			navigate('/recommend');
		};

		render(<NonDataView text={text} onClickMoveRecommend={onClickMoveRecommend} />);

		const button = screen.getByRole('button');

		fireEvent.click(button);
		expect(mockNavigate).toBeCalledWith('/recommend');
	});

	it('When review is none, empty text is rendered', () => {
		const data: any = [];
		render(<MyPageView text={text} onClickMoveRecommend={onClickMoveRecommend} data={data} />);

		const emptyText = screen.getByText(constants.MYPAGE.NON_DATA);
		const button = screen.getByText(constants.MYPAGE.RECOMMEND_BUTTON);

		expect(emptyText).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});
});
