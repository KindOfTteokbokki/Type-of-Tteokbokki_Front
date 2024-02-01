import React, { ReactEventHandler, useEffect, useRef } from 'react';
import * as S from '../../style';
import icon from '../../../../assets/modalIcon.svg';
import { DropBack } from '../style';
import { useNavigate } from 'react-router-dom';

interface Props {
	modalHeader: string;
	modalAnswerWhite: string;
	modalAnswerRed: string;
	onClickModal(): void;
}

export default function Modal(props: Props) {
	const navigator = useNavigate();
	const modalRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handler = (e: any) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				props.onClickModal();
			}
		};
		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	return (
		<DropBack>
			<S.ModalCont ref={modalRef}>
				<S.ModalText>
					<S.ModalIcon src={icon} alt="접시,포크 아이콘" />
					{props.modalHeader}
				</S.ModalText>
				<S.ModalButtonLayout>
					<S.ModalWhiteButton
						onClick={() => {
							navigator('/recommend');
						}}
					>
						{props.modalAnswerWhite}
					</S.ModalWhiteButton>
					<S.ModalRedButton
						onClick={() => {
							navigator('/recommend');
						}}
					>
						{props.modalAnswerRed}
					</S.ModalRedButton>
				</S.ModalButtonLayout>
			</S.ModalCont>
		</DropBack>
	);
}
