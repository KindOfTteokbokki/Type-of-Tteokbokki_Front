import React, { useEffect, useRef, useState } from 'react';
import EachListView from './view/EachListView';

interface EachListProps {
	item: string;
	index: number;
	length: number;
}

export default function EachList(props: EachListProps) {
	const [editAndRemoveButton, setEditAndRemoveButton] = useState(false);
	const [keyBoard, setKeyBoard] = useState(false);

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

	const listRef = useRef<HTMLDivElement>(null);

	const handler = (e: any) => {
		if (listRef.current && !listRef.current.contains(e.target) && !keyBoard) {
			onClickButton();
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
			listRef={listRef}
			keyboard={keyBoard}
			item={props.item}
		/>
	);
}
