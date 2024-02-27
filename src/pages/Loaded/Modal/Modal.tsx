import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { constants } from '../../../constants/constants';
import ModalView from './view/ModalView';

export interface ModalProps {
	onClickModal(): void;
	onClickRedBtn(): void;
}

export default function Modal(props: ModalProps) {
	const modalRef = useRef<HTMLElement>(null);
	const handler = (e: any) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			props.onClickModal();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	return (
		<ModalView
			modalRef={modalRef}
			modalHeader={constants.MODAL.QUESTION}
			modalAnswerWhite={constants.MODAL.ANSWER_1}
			modalAnswerRed={constants.MODAL.ANSWER_2}
			onClickModal={props.onClickModal}
			onClickRedBtn={props.onClickRedBtn}
		/>
	);
}
