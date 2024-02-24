import React from 'react';
// import { render } from '../../../utils/customJestRender';
import { render, screen } from '@testing-library/react';
import TitleView from '../TitleView';
import { theme } from '../../../styles/theme';
import { useNavigate } from 'react-router-dom';

// useNavigate 모킹
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'), // 실제 모듈을 가져와서 사용
	useNavigate: jest.fn(), // useNavigate를 jest mock 함수로 대체
}));

describe('Title Test', () => {
	it('헤더 텍스트가 잘 나오는지 테스트', () => {
		const mockNavigate = jest.fn();
		(useNavigate as jest.Mock).mockReturnValue(mockNavigate);
		render(<TitleView name="개구리" count={5} />);

		const elementFirst = screen.getByText('개구리가 모은');
		const elementSecond = screen.getByText('칭호는 5개야!');

		expect(elementFirst).toBeInTheDocument();
		expect(elementSecond).toBeInTheDocument();
	});

	it('칭호 리스트 background-color가 반복해서 맞게 나오는지 테스트', () => {
		render(<TitleView name="개구리" count={6} />);

		const element = screen.getByRole('firstList');
		expect(element).toHaveStyle({ backgroundColor: 'F7DACC' });
	});
});
