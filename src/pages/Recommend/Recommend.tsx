import React from 'react';
import RecommendView from './view/RecommendView';
import { useMoveLogin } from '../../hooks/useMoveLogin';

export default function Recommend() {
	useMoveLogin();
	return <RecommendView />;
}
