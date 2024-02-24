import React from 'react';
import LockedTitleView from '../LockedTitleView';
import { screen, render } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

const onClickMoveBack = jest.fn();

describe('LockedTitle test', () => {
	it('헤더 텍스트 렌더링 테스트', () => {
		render(<LockedTitleView onClickMoveBack={onClickMoveBack} />);

		const elementFirst = screen.getByText('아직 못 받은');
		const elementSecond = screen.getByText('칭호를 받아봐!');

		expect(elementFirst).toBeInTheDocument();
		expect(elementSecond).toBeInTheDocument();
	});

	it('받으러 가기 버튼 렌더링 테스트', () => {
		render(<LockedTitleView onClickMoveBack={onClickMoveBack} />);

		const element = screen.getByText('받으러 가기');

		expect(element).toBeInTheDocument();
	});
});
