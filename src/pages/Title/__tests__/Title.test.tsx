import React from 'react';
// import { render } from '../../../utils/customJestRender';
import { render, screen } from '@testing-library/react';
import Title from '../Title';
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
		render(<Title />);

		const element = screen.getByText('Name가 모은 칭호는 N개야!');
		expect(element).toBeInTheDocument();
	});
});
