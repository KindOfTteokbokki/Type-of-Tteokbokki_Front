import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import * as S from './style';
import lock from '../../assets/아이콘/자물쇠.svg';

interface NonLoginUserProps {
	store: string;
}

export default function NonLoginUserView(props: NonLoginUserProps) {
	const lockArray = new Array(3);
	return (
		<>
			{props.store ? (
				<>
					<S.MyTypeImg src={props.store} alt="떡볶이 사진" />
					<S.LockCont>
						<S.LockImg src={lock} alt="자물쇠 아이콘" />
					</S.LockCont>
					<S.LockCont>
						<S.LockImg src={lock} alt="자물쇠 아이콘" />
					</S.LockCont>
				</>
			) : (
				lockArray.map(() => {
					return (
						<S.LockCont>
							<S.LockImg src={lock} alt="자물쇠 아이콘" />
						</S.LockCont>
					);
				})
			)}
		</>
	);
}
