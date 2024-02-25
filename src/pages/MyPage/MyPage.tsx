import React from 'react';
import MyPageView from './MyPageView';
import { constants } from '../../constants/constants';

export default function MyPage() {
	return (
		<MyPageView
			header={constants.MYPAGE.header}
			iconText={constants.MYPAGE.ICON}
			button={constants.MYPAGE.button}
			review={constants.MYPAGE.REVIEW}
		/>
	);
}
