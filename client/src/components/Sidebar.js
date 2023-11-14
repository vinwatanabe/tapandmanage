import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/brand/tap-manage-logo.svg';
import { Context } from '../context/AuthContext';
import { toggleSideBar } from '../js/sidebarAnimation';

const Sidebar = () => {
	const { handleLogout } = useContext(Context);

	return (
		<>
			<aside className='sidebar flex flex-col bg-darkBlue w-11/12 sm:w-72 h-screen fixed z-[999] overflow-x-hidden'>
				<div className='flex items-center h-20 mx-10 justify-between'>
					<img
						className='w-40 sm:w-44 h-fit'
						src={Logo}
						alt='Tap & Manage Logo'
					/>

					<span
						className='material-symbols-outlined text-white visible sm:invisible cursor-pointer'
						onClick={toggleSideBar}>
						close
					</span>
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
