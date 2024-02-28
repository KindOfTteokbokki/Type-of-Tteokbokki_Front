import React from 'react';
import { DropBack } from '../../../components/Modal/style';
import ModalView from '../../Loaded/Modal/view/ModalView';

interface WriteModalProps {
	modalRef: React.RefObject<HTMLElement>;
	modalHeader: string;
	modalAnswerWhite: string;
	modalAnswerRed: string;
	onClickModal(): void;
	onClickRedBtn(): void;
	onClickWhiteBtn(): void;
}

export default function WriteModalView(props: WriteModalProps) {
	return (
		<ModalView
			modalRef={props.modalRef}
			modalHeader={props.modalHeader}
			modalAnswerWhite={props.modalAnswerWhite}
			modalAnswerRed={props.modalAnswerRed}
			onClickModal={props.onClickModal}
			onClickRedBtn={props.onClickRedBtn}
			onClickWhiteBtn={props.onClickWhiteBtn}
		/>
	);
}
