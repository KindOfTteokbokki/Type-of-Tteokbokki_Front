import React, { useEffect, useState } from 'react';
import ReviewListView, { ReviewData } from './view/ReviewListView';

interface ReviewDataProps {
	reviewData: ReviewData[];
}

export default function ReviewList(props: ReviewDataProps) {
	return <ReviewListView reviewData={props.reviewData} />;
}
