import React, { useEffect, useRef } from 'react';
import WriteModalView from './view/WriteModalView';
import { constants } from '../../constants/constants';

interface WriteModalProps {
	modal: boolean;
	setModal: React.Dispatch<React.SetStateAction<boolean>>;
	saveReview(): void;
}

export default function WriteModal(props: WriteModalProps) {
	function onClickModal() {
		props.setModal(!props.modal);
	}

	const modalRef = useRef<HTMLElement>(null);

	const handler = (e: any) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClickModal();
		}
	};

	const onClickWhiteBtn = () => {
		onClickModal();
	};

	const onClickRedBtn = () => {
		props.saveReview();
	};

	useEffect(() => {
		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	return (
		<WriteModalView
			modalRef={modalRef}
			modalHeader={constants.REVIEW_MODAL.QUESTION}
			modalAnswerWhite={constants.REVIEW_MODAL.ANSWER_1}
			modalAnswerRed={constants.REVIEW_MODAL.ANSWER_2}
			onClickModal={onClickModal}
			onClickWhiteBtn={onClickWhiteBtn}
			onClickRedBtn={onClickRedBtn}
		/>
	);
}
