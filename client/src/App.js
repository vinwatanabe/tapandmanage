import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';

function App() {
	return (
		<>
			<Router>
				<div className='container'>
					<Routes>
						<Route path='/' element={<Homepage />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
