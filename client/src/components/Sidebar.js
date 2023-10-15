import { Link } from 'react-router-dom';
import Logo from '../images/brand/tap-manage-logo.svg';

const Sidebar = () => {
	return (
		<>
			<aside className='flex-none bg-darkBlue w-72 h-screen'>
				<div className='flex items-center h-20 ml-10'>
					<img className='w-44 h-fit' src={Logo} alt='Tap & Manage Logo' />
				</div>

				<ul className='flex flex-col text-white mt-5'>
					<Link to={'#!'}>
						<li className='flex items-center hover:bg-darkBlueSelect pt-3 pb-3'>
							<span className='material-symbols-outlined mr-2 ml-10'>
								grid_view
							</span>
							<p>Dashboard</p>
						</li>
					</Link>
					<Link to={'#!'}>
						<li className='flex items-center hover:bg-darkBlueSelect pt-3 pb-3'>
							<span className='material-symbols-outlined mr-2 ml-10'>
								inventory_2
							</span>
							<p>Inventory</p>
						</li>
					</Link>
				</ul>
			</aside>
		</>
	);
};

export default Sidebar;
