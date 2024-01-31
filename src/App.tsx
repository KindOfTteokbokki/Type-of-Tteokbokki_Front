import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout.jsx/MainLayout';
import Splash from './pages/Splash/Splash';
import PickTypes from './pages/PickTypes/PickTypes';
import Loading from './pages/Loading/Loading';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Splash />} />
			<Route path="/pickTypes" element={<PickTypes />} />
			{/* <Route element={<MainLayout />}> */}
			<Route path="/loading" element={<Loading />} />
			{/* </Route> */}
		</Routes>
	);
}

export default App;
