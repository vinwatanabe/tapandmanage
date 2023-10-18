import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
	return (
		<>
			<Router>
				<div className='container flex w-full max-w-none mx-auto'>
					<AppRoutes />
				</div>
			</Router>
		</>
	);
}

export default App;
