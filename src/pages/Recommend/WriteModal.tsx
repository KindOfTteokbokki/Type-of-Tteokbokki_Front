import React, { useEffect, useRef, useState } from 'react';
import WriteModalView from './WriteModalView';
import { constants } from '../../constants/constants';
import saveReview from './RecommendWrite';

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

	const onClickDisagree = () => {
		onClickModal();
	};

	const onClickAgreement = () => {
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
			onClickAgreement={onClickAgreement}
			onClickDisagree={onClickDisagree}
		/>
	);
}
