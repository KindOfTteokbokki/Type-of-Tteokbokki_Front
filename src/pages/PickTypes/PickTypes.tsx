import React, { useEffect } from 'react';
import PickTypesView from './view/PickTypesView';
import { constants } from '../../constants/constants';
import { deletePickType, initialState, initializeType } from '../../slice/userPickSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootStateType } from '../../store';
import * as S from './style';
import deleteIcon from '../../assets/close_small_red.svg';

export interface Props {
	headerText: string;
	alertText: string;
	selectText: string;
	onClickMove(): void;
	onClickDelete(type: string): void;
	renderButton(): JSX.Element[];
}

export type Response = {
	code: string;
	name_ko: string;
};

export default function PickTypes() {
	const onClickDelete = (type: string) => {
		dispatch(deletePickType(type));
	};

	const selector = useSelector((state: RootStateType) => {
		return state.userPick;
	});

	const renderButton = () => {
		const render: JSX.Element[] = [];
		const filteredArray = Object.values(selector).filter((value) => value.code[4] !== '0');

		filteredArray.map((value) => {
			render.push(
				<S.PickButton
					onClick={() => {
						onClickDelete(`${value.code[2]}`);
					}}
				>
					{value.name_ko}
					<S.AddIcon src={deleteIcon} alt="삭제 아이콘" />
				</S.PickButton>
			);
		});

		return render;
	};

	const navigator = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeType(initialState));
	}, []);

	const onClickMove = () => {
		navigator('/loading');
	};

	return (
		<>
			<PickTypesView
				headerText={constants.PICK_TYPES.header}
				alertText={constants.PICK_TYPES.message}
				selectText={constants.PICK_TYPES.select}
				onClickMove={onClickMove}
				renderButton={renderButton}
				onClickDelete={onClickDelete}
			/>
		</>
	);
}
