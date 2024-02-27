import React, { useEffect, useRef, useState } from 'react';
import EachListView from './view/EachListView';
import { constants } from '../../constants/constants';

interface EachListProps {
	item: string;
	index: number;
	length: number;
}

export default function EachList(props: EachListProps) {
	const [editAndRemoveButton, setEditAndRemoveButton] = useState(false);
	const [keyBoard, setKeyBoard] = useState(false);
	const [modal, setModal] = useState(false);

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
		/>
	);
}
