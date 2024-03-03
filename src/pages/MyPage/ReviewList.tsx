import React, { useEffect, useState } from 'react';
import ReviewListView, { ReviewData } from './view/ReviewListView';
import { usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

interface ReviewDataProps {
	reviewData: ReviewData[];
}

export default function ReviewList(props: ReviewDataProps) {
	return <ReviewListView reviewData={props.reviewData} />;
}
