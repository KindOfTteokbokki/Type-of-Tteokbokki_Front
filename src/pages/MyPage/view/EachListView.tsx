import React from 'react';
import * as S from '../style';
import { theme } from '../../../styles/theme';
import Icon from '../../../assets/내후기관리.svg';
import RecommendWrite from '../../Recommend/RecommendWrite';
import ModalView from '../../Loaded/Modal/view/ModalView';
import modalIcon from '../../../assets/후기삭제우는얼굴.svg';
import { ReviewData } from './ReviewListView';
import basicReviewImg from '../../../assets/기본이미지.svg';

interface EachListProps {
	isLastIndex: () => boolean;
	editAndRemoveButton: boolean;
	onClickButton: () => void;
	onClickEdit: () => void;
	onClickRemoveModal: () => void;
	listRef: React.RefObject<HTMLDivElement>;
	keyboard: boolean;
	item: ReviewData;
	modal: boolean;
	modalRef: React.RefObject<HTMLElement>;
	modalText: {
		header: string;
		ANSWER_1: string;
		ANSWER_2: string;
	};
	deletePost: () => void;
	onClickMoveDetail: () => void;
}

export default function EachListView(props: EachListProps) {
	return (
		<S.MyReviewList border={props.isLastIndex() ? undefined : theme.color.gray}>
			<S.ReviewImg
				src={
					props.item.file_masking_name != null && props.item.file_masking_name !== 'null'
						? props.item.file_path + props.item.file_masking_name
						: basicReviewImg
				}
				alt={props.item.file_masking_name ? '떡볶이 사진' : '가래떡 캐릭터 아이콘 사진(기본 이미지)'}
				onClick={props.onClickMoveDetail}
			/>
			<S.ReviewText onClick={props.onClickMoveDetail}>{props.item.content}</S.ReviewText>
			<S.ReviewIcon onClick={props.onClickButton} role="moreIcon" />
			{props.editAndRemoveButton ? (
				<S.EditAndRemoveBtnCont ref={props.listRef}>
					<S.RemoveButton onClick={props.onClickRemoveModal}>삭제</S.RemoveButton>
					<S.EditButton onClick={props.onClickEdit}>수정</S.EditButton>
				</S.EditAndRemoveBtnCont>
			) : null}
			{props.keyboard ? (
				<RecommendWrite setKeyBoard={props.onClickEdit} originData={props.item} onClickButton={props.onClickButton} />
			) : null}
			{props.modal ? (
				<ModalView
					modalRef={props.modalRef}
					modalHeader={props.modalText.header}
					modalAnswerWhite={props.modalText.ANSWER_1}
					modalAnswerRed={props.modalText.ANSWER_2}
					onClickModal={props.onClickRemoveModal}
					onClickRedBtn={props.onClickRemoveModal}
					onClickWhiteBtn={props.deletePost}
					modalIcon={modalIcon}
				/>
			) : null}
		</S.MyReviewList>
	);
}
