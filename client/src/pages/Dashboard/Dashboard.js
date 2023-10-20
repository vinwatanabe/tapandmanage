import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const Dashboard = () => {
	return (
		<>
			<Sidebar />

			<div className='container w-full flex flex-col float-right ml-72 mx-auto'>
				<Header />
			</div>
		</>
	);
};

export default Dashboard;
