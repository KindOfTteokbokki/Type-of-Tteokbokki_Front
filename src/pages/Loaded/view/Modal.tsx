import React from 'react';
import * as S from '../style';
import icon from '../../../assets/modalIcon.svg';

interface Props {
	modalHeader: string;
	modalAnswerWhite: string;
	modalAnswerRed: string;
}

export default function Modal(props: Props) {
	return (
		<S.ModalCont>
			<S.ModalText>
				<S.ModalIcon src={icon} alt="접시,포크 아이콘" />
				{props.modalHeader}
			</S.ModalText>
			<S.ModalButtonLayout>
				<S.ModalWhiteButton>{props.modalAnswerWhite}</S.ModalWhiteButton>
				<S.ModalRedButton>{props.modalAnswerRed}</S.ModalRedButton>
			</S.ModalButtonLayout>
		</S.ModalCont>
	);
}
