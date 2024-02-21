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

function App() {
	return (
		<Routes>
			<Route path="/" element={<Splash />} />
			<Route path="/pickTypes" element={<PickTypes />} />
			<Route path="/loading" element={<Loading />} />
			<Route path="/loaded" element={<Loaded />} />
			<Route path="/home" element={<Home />} />
			<Route path="/recommend" element={<Recommend />} />
			<Route path="/auth/kakao" element={<KakaoRedirectView />} />
			<Route path="/auth/naver" element={<NaverRedirectView />} />
		</Routes>
	);
}

export default App;
