import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout.jsx/MainLayout';
import Splash from './pages/Splash/Splash';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Splash />} />
		</Routes>
	);
}

export default App;
