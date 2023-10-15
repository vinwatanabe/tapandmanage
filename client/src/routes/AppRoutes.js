import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Route imports
import Homepage from '../pages/Homepage/Homepage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Inventory from '../pages/Inventory/Inventory';
import ItemDetails from '../pages/ItemDetails/ItemDetails';
import NotFound from '../pages/NotFound/NotFound';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/inventory' element={<Inventory />} />
			<Route path='/item-details' element={<ItemDetails />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
