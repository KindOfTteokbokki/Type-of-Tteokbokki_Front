import React, { useState } from 'react';
import LockedTitleView from '../LockedTitleView';
import { screen, render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { constants } from '../../../constants/constants';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

const lockedTitle = jest.fn();
const onClickMoveBack = jest.fn();
const onClickMoveReturn = jest.fn();
const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

describe('LockedTitle test', () => {
	it('헤더 텍스트 렌더링 테스트', () => {
		render(
			<LockedTitleView
				onClickMoveBack={onClickMoveBack}
				lockedTitle={lockedTitle}
				header={constants.LOCKED_TITLE.header}
				button={constants.LOCKED_TITLE.button}
				onClickMoveReturn={onClickMoveReturn}
			/>
		);

		const elementFirst = screen.getByText('아직 못 받은');
		const elementSecond = screen.getByText('칭호를 받아봐!');

		expect(elementFirst).toBeInTheDocument();
		expect(elementSecond).toBeInTheDocument();
	});

	it('받으러 가기 버튼 렌더링 테스트', () => {
		render(<LockedTitleView onClickMoveBack={onClickMoveBack} list={list} onClickMoveReturn={onClickMoveReturn} />);

		const element = screen.getByText('받으러 가기');

		expect(element).toBeInTheDocument();
	});

	it('버튼 클릭 시 pick-types 페이지로 이동', () => {
		const navigator = useNavigate();
		const onClickMoveReturn = () => {
			navigator('/pick-types');
		};

		render(<LockedTitleView onClickMoveBack={onClickMoveBack} list={list} onClickMoveReturn={onClickMoveReturn} />);

		const element = screen.getByRole('button');

		fireEvent.click(element);
		expect(mockNavigate).toBeCalledWith('/pick-types');
	});

	it('입력받은 칭호 수만큼 렌더링되는지 테스트', () => {
		render(<LockedTitleView onClickMoveBack={onClickMoveBack} list={list} onClickMoveReturn={onClickMoveReturn} />);

		const element = screen.getAllByRole('list');

		expect(element).toHaveLength(list.length + 1); //ul 태그 포함해서 +1
	});
});
