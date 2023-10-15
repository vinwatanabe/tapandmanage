import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Inventory from './pages/Inventory/Inventory';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import NotFound from './pages/NotFound/NotFound';

function App() {
	return (
		<>
			<Router>
				<div className='container'>
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/inventory' element={<Inventory />} />
						<Route path='/item-details' element={<ItemDetails />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
