import React, { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Route imports
import Homepage from '../pages/Homepage/Homepage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/Dashboard/Dashboard';
import Inventory from '../pages/Inventory/Inventory';
import ItemDetails from '../pages/ItemDetails/ItemDetails';
import NFC from '../pages/NFC/NFC';
import UserEdit from '../pages/UserEdit/UserEdit';
import NotFound from '../pages/NotFound/NotFound';
import { Context } from '../context/AuthContext';

const AppRoutes = () => {
	function ProtectedRoute({ children }) {
		const { authenticated, loading } = useContext(Context);
		let navigate = useNavigate();

		if (loading) {
			return <h1>Loading...</h1>;
		}

		if (!authenticated) {
			return navigate('/');
		} else {
			return children;
		}
	}

	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route
				path='/dashboard'
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/inventory'
				element={
					<ProtectedRoute>
						<Inventory />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/item-details/:id'
				element={
					<ProtectedRoute>
						<ItemDetails />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/nfc/remove/:id'
				element={
					<ProtectedRoute>
						<NFC />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/nfc/add/:id'
				element={
					<ProtectedRoute>
						<NFC />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/nfc/check/:id'
				element={
					<ProtectedRoute>
						<NFC />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/management/:id'
				element={
					<ProtectedRoute>
						<UserEdit />
					</ProtectedRoute>
				}
			/>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
