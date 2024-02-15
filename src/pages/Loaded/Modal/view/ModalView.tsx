import React from 'react';
import { DropBack } from '../../../../components/Modal/style';
import * as S from '../style';
import { ModalProps } from '../Modal';
import icon from '../../../../assets/modalIcon.svg';

interface ModalViewProps extends ModalProps {
	modalHeader: string;
	modalAnswerWhite: string;
	modalAnswerRed: string;
	modalRef: React.RefObject<HTMLElement>;
}

export default function ModalView(props: ModalViewProps) {
	return (
		<DropBack>
			<S.ModalCont ref={props.modalRef}>
				<S.ModalText>
					<S.ModalIcon src={icon} alt="접시,포크 아이콘" />
					{props.modalHeader}
				</S.ModalText>
				<S.ModalButtonLayout>
					<S.ModalWhiteButton onClick={props.onClickPopUp}>{props.modalAnswerWhite}</S.ModalWhiteButton>
					<S.ModalRedButton onClick={props.onClickPopUp}>{props.modalAnswerRed}</S.ModalRedButton>
				</S.ModalButtonLayout>
			</S.ModalCont>
		</DropBack>
	);
}
