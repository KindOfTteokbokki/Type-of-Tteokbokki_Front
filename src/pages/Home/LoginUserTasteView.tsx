import React from 'react';
import * as S from './style';
import lock from '../../assets/아이콘/자물쇠.svg';

interface LoginUserTasteProps {
	myTaste: string[];
	lockTaste: string[];
}

export default function LoginUserTasteView(props: LoginUserTasteProps) {
	return (
		<>
			{props.myTaste?.map((item: any) => {
				return <S.MyTypeImg src={item?.file_path + item?.file_masking_name} alt="떡볶이 사진" />;
			})}
			{props.lockTaste?.map(() => {
				return (
					<S.LockCont>
						<S.LockImg src={lock} />
					</S.LockCont>
				);
			})}
		</>
	);
}
