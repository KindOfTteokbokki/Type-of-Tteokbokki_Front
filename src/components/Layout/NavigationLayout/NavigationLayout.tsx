import { Outlet } from 'react-router-dom';
import { NavLayout } from '../MainLayout.jsx/style';
import React from 'react';
import Navigation from '../../Navigation/Navigation';

export default function NavigationLayout() {
	return (
		<>
			<NavLayout>
				<Outlet />
			</NavLayout>
			<Navigation />
		</>
	);
}
