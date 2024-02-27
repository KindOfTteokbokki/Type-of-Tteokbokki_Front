import React from 'react';
import * as S from '../style';
import { theme } from '../../../styles/theme';
import Icon from '../../../assets/내후기관리.svg';
import RecommendWrite from '../../Recommend/RecommendWrite';

interface EachListProps {
	isLastIndex: () => boolean;
	editAndRemoveButton: boolean;
	onClickButton: () => void;
	onClickEdit: () => void;
	listRef: React.RefObject<HTMLDivElement>;
	keyboard: boolean;
}

export default function EachListView(props: EachListProps) {
	return (
		<>
			<S.MyReviewList border={props.isLastIndex() ? undefined : theme.color.gray}>
				<S.ReviewImg />
				<S.ReviewText>린ㅁ리ㅏㅁ리ㅏ거느ㅏㅣ라니니갸재기ㅡ핕</S.ReviewText>
				<S.ReviewIcon onClick={props.onClickButton} />
				{props.editAndRemoveButton ? (
					<S.EditAndRemoveBtnCont ref={props.listRef}>
						<S.RemoveButton>삭제</S.RemoveButton>
						<S.EditButton>수정</S.EditButton>
					</S.EditAndRemoveBtnCont>
				) : null}
				{props.keyboard ? <RecommendWrite /> : null}
			</S.MyReviewList>
		</>
	);
}
