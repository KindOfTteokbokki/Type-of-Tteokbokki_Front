import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash/Splash';
import PickTypes from './pages/PickTypes/PickTypes';
import Loading from './pages/Loading/Loading';
import Loaded from './pages/Loaded/Loaded';
import Home from './pages/Home/Home';
import Recommend from './pages/Recommend/Recommend';
import KakaoRedirectView from './pages/Splash/KakaoRedirectView';
import NaverRedirectView from './pages/Splash/NaverRedirectView';
import RecommendDetail from './pages/RecommendDetail.tsx/RecommendDetail';
import Combination from './pages/Combination/Combination';
import MyTaste from './pages/MyTaste/MyTaste';
import Title from './pages/Title/Title';
import LockedTitle from './pages/LockedTitle/LockedTitle';
import NavigationLayout from './components/Layout/NavigationLayout/NavigationLayout';
import MyPage from './pages/MyPage/MyPage';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Splash />} />
			<Route path="/pick-types" element={<PickTypes />} />
			<Route path="/loading" element={<Loading />} />
			<Route path="/loaded" element={<Loaded />} />
			<Route path="/home" element={<Home />} />
			<Route path="/recommend" element={<Recommend />} />
			{/* <Route path="http://dev.utteok.com/auth/kakao" element={<KakaoRedirectView />} />
			<Route path="/auth/naver" element={<NaverRedirectView />} /> */}
			<Route path="/recommend/:id" element={<RecommendDetail />} />
			<Route path="/combination" element={<Combination />} />
			<Route path="/mytaste" element={<MyTaste />} />
			<Route path="/title" element={<Title />} />
			<Route path="/locked-title" element={<LockedTitle />} />
			<Route path="/mypage" element={<MyPage />} />
			<Route path="/profile-edit" element={<ProfileEdit />} />
		</Routes>
	);
}

export default App;
