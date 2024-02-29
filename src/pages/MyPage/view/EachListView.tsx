import React from 'react';
import * as S from '../style';
import { theme } from '../../../styles/theme';
import Icon from '../../../assets/내후기관리.svg';
import RecommendWrite from '../../Recommend/RecommendWrite';
import ModalView from '../../Loaded/Modal/view/ModalView';
import modalIcon from '../../../assets/후기삭제우는얼굴.svg';
import { usePost } from '../../../api/useFetch';
import { baseUrl } from '../../../api/useAxios';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../store';

interface EachListProps {
	isLastIndex: () => boolean;
	editAndRemoveButton: boolean;
	onClickButton: () => void;
	onClickEdit: () => void;
	onClickRemoveModal: () => void;
	listRef: React.RefObject<HTMLDivElement>;
	keyboard: boolean;
	item: string;
	modal: boolean;
	modalRef: React.RefObject<HTMLElement>;
	modalText: {
		header: string;
		ANSWER_1: string;
		ANSWER_2: string;
	};
}

export default function EachListView(props: EachListProps) {
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});
	const postFunc = usePost(`${baseUrl}/deleteRecommend`);
	const postData = {
		user_id: 1,
		review_seq: 26,
	};

	const deletePost = async () => {
		await postFunc(postData, { Authorization: `Bearer ${token}` }).then((res) => {
			console.log(res);
		});
	};

	return (
		<>
			<S.MyReviewList border={props.isLastIndex() ? undefined : theme.color.gray}>
				<S.ReviewImg />
				<S.ReviewText>린ㅁ리ㅏㅁ리ㅏ거느ㅏㅣ라니니갸재기ㅡ핕</S.ReviewText>
				<S.ReviewIcon onClick={props.onClickButton} role="moreIcon" />
				{props.editAndRemoveButton ? (
					<S.EditAndRemoveBtnCont ref={props.listRef}>
						<S.RemoveButton onClick={props.onClickRemoveModal}>삭제</S.RemoveButton>
						<S.EditButton onClick={props.onClickEdit}>수정</S.EditButton>
					</S.EditAndRemoveBtnCont>
				) : null}
				{props.keyboard ? (
					<RecommendWrite setKeyBoard={props.onClickEdit} originText={props.item} onClickButton={props.onClickButton} />
				) : null}
				{props.modal ? (
					<ModalView
						modalRef={props.modalRef}
						modalHeader={props.modalText.header}
						modalAnswerWhite={props.modalText.ANSWER_1}
						modalAnswerRed={props.modalText.ANSWER_2}
						onClickModal={props.onClickRemoveModal}
						onClickRedBtn={props.onClickRemoveModal}
						onClickWhiteBtn={deletePost}
						modalIcon={modalIcon}
					/>
				) : null}
			</S.MyReviewList>
		</>
	);
}
