import React, { useEffect, useRef, useState } from 'react';
import WriteModalView from './WriteModalView';
import { constants } from '../../constants/constants';
import saveReview from './RecommendWrite';

export default function WriteModal() {
	const [modal, setModal] = useState(true);

	function onClickModal() {
		setModal(!modal);
	}

	const modalRef = useRef<HTMLElement>(null);
	const handler = (e: any) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClickModal();
		}
	};
	const onClickNonAgree = () => {
		onClickModal();
	};

	const onClickAgreement = () => {
		// saveReview();
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
		/>
	);
}
