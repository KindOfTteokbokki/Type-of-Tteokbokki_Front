import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout.jsx/MainLayout';
import Splash from './pages/Splash/Splash';
import PickTypes from './pages/PickTypes/PickTypes';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Splash />} />
			<Route path="/pickTypes" element={<PickTypes />} />
		</Routes>
	);
}

export default App;
