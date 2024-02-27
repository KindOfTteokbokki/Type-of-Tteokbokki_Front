import React from 'react';
import ReviewListView from './view/ReviewListView';

export interface ReviewListProps {
	data: string[];
}

export default function ReviewList(props: ReviewListProps) {
	return <ReviewListView data={props.data} />;
}
