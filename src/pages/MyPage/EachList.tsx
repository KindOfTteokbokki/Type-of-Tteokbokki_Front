import React, { useEffect, useRef, useState } from 'react';
import EachListView from './view/EachListView';
import { constants } from '../../constants/constants';
import { ReviewData } from './view/ReviewListView';
import { usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

interface EachListProps {
	item: ReviewData;
	index: number;
	length: number;
}

export default function EachList(props: EachListProps) {
	const [editAndRemoveButton, setEditAndRemoveButton] = useState(false);
	const [keyBoard, setKeyBoard] = useState(false);
	const [modal, setModal] = useState(false);
	const postFunc = usePost(`${baseUrl}/deleteRecommend`);
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	const isLastIndex = () => {
		if (props.index === props.length - 1) {
			return true;
		}
		return false;
	};

	const onClickButton = () => {
		setEditAndRemoveButton(!editAndRemoveButton);
	};

	const onClickEdit = () => {
		setKeyBoard(!keyBoard);
	};

	const onClickRemoveModal = () => {
		setModal(!modal);
	};

	const listRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLElement>(null);

	const handler = (e: any) => {
		if (listRef.current && !listRef.current.contains(e.target) && !keyBoard) {
			onClickButton();
		}
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClickRemoveModal();
		}
	};

	const deletePost = async () => {
		await postFunc(
			{ user_id: props.item.user_id, review_seq: props.item.review_seq },
			{ Authorization: `Bearer ${token}` }
		).then((res) => {
			console.log(res);
		});
	};

	useEffect(() => {
		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	return (
		<EachListView
			isLastIndex={isLastIndex}
			editAndRemoveButton={editAndRemoveButton}
			onClickButton={onClickButton}
			onClickEdit={onClickEdit}
			onClickRemoveModal={onClickRemoveModal}
			listRef={listRef}
			keyboard={keyBoard}
			item={props.item}
			modal={modal}
			modalRef={modalRef}
			modalText={constants.MYPAGE.REMOVE_MODAL}
			deletePost={deletePost}
		/>
	);
}
