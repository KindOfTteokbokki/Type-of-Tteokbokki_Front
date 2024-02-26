import React from 'react';
import EachListView from './view/EachListView';

interface EachListProps {
	item: string;
	index: number;
	length: number;
}

export default function EachList(props: EachListProps) {
	const isLastIndex = () => {
		if (props.index === props.length - 1) {
			return true;
		}
		return false;
	};

	return <EachListView isLastIndex={isLastIndex} />;
}
