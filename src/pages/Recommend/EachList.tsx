import React from 'react';
import EachListView from './view/EachListView';
import { useNavigate } from 'react-router-dom';

interface EachListProps {
	data: any;
}

export default function EachList(props: EachListProps) {
	const navigate = useNavigate();
	const onClickMoveDetail = () => {
		navigate(`/recommend/${props.data.review_seq}`);
	};

	const isImageData = () => {
		if (props.data?.file_masking_name == null || props.data?.file_masking_name === 'null') {
			return false;
		}
		return true;
	};

	return <EachListView data={props.data} onClickMoveDetail={onClickMoveDetail} isImageData={isImageData} />;
}
