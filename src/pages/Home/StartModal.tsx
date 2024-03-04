import React from 'react';
import { DropBack } from '../../components/Modal/style';
import * as S from '../Loaded/Modal/style';
import { constants } from '../../constants/constants';
import { ButtonCont } from './style';

interface StartProps {
	nickName: string;
	onClickDeleteModal: () => void;
}

export default function StartModal(props: StartProps) {
	return (
		<DropBack>
			<S.ModalCont>
				<S.ModalText>{constants.HOME.START_MODAL.header + props.nickName + '!'}</S.ModalText>
				<ButtonCont>
					<S.ModalRedButton onClick={props.onClickDeleteModal}>{constants.HOME.START_MODAL.button}</S.ModalRedButton>
				</ButtonCont>
			</S.ModalCont>
		</DropBack>
	);
}
