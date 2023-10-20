import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/brand/tap-manage-logo.svg';
import { Context } from '../context/AuthContext';

const Sidebar = () => {
	const { handleLogout } = useContext(Context);

	return (
		<>
			<aside className='flex flex-col bg-darkBlue w-72 h-screen fixed'>
				<div className='flex items-center h-20 ml-10'>
					<img className='w-44 h-fit' src={Logo} alt='Tap & Manage Logo' />
				</div>

				<div className='flex flex-col h-full justify-between'>
					<ul className='flex flex-col text-white mt-5'>
						<Link to={'/dashboard'}>
							<li className='flex flex-row items-center hover:bg-darkBlueSelect py-3'>
								<span className='material-symbols-outlined mr-2 ml-10'>
									grid_view
								</span>
								<p>Dashboard</p>
							</li>
						</Link>

						<Link to={'/inventory'}>
							<li className='flex flex-row items-center hover:bg-darkBlueSelect py-3'>
								<span className='material-symbols-outlined mr-2 ml-10'>
									inventory_2
								</span>
								<p>Inventory</p>
							</li>
						</Link>
					</ul>

					<ul className='flex flex-col text-white'>
						<Link
							className='pb-5'
							to={'/'}
							onClick={(e) => {
								handleLogout(e);
							}}>
							<li className='flex flex-row items-center hover:bg-darkBlueSelect py-3'>
								<span className='material-symbols-outlined mr-2 ml-10'>
									logout
								</span>
								<p>Logout</p>
							</li>
						</Link>
					</ul>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
