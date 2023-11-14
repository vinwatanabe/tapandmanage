import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/brand/tap-manage-logo.svg';
import ArrowIcon from '../images/assets/arrow-ico.svg';
import ButtonBlue from '../components/ButtonBlue';
import ButtonPrimary from '../components/ButtonPrimary';
import { Context } from '../context/AuthContext';

const HeaderHome = () => {
	const { authenticated } = useContext(Context);

	const userNotLoggedButtons = (
		<div className='flex flex-row gap-5'>
			<ButtonBlue
				text={'Login'}
				url={'/login'}
				styles={'border-2 border-white'}
			/>
			<ButtonPrimary text={'Register'} url={'/register'} />
		</div>
	);

	const userLoggedButtons = (
		<div className='flex flex-row gap-5'>
			<ButtonPrimary text={'Console'} url={'/inventory'} />
		</div>
	);

	return (
		<header className='w-full flex flex-row mx-auto bg-darkBlue text-white'>
			<div className='w-full flex flex-row items-center py-9 sm:gap-0 gap-5 justify-center sm:justify-between mx-auto sm:px-20 2xl:px-0 max-w-7xl flex-wrap sm:flex-nowrap'>
				<picture className='flex basis-full sm:basis-auto justify-center'>
					<img src={Logo} alt='' />
				</picture>

				<div className='sm:flex sm:flex-row hidden'>
					<ul className='flex flex-row gap-8'>
						<Link to={'#!'}>
							<li className='flex flex-row gap-2'>
								Product
								<img className='w-[11px] h-auto' src={ArrowIcon} alt='' />
							</li>
						</Link>
						<Link to={'#!'}>
							<li className='flex flex-row gap-2'>
								Resources
								<img className='w-[11px] h-auto' src={ArrowIcon} alt='' />
							</li>
						</Link>
						<Link to={'#!'}>
							<li className='flex flex-row gap-2'>
								Company
								<img className='w-[11px] h-auto' src={ArrowIcon} alt='' />
							</li>
						</Link>
					</ul>
				</div>

				<div>{authenticated ? userLoggedButtons : userNotLoggedButtons}</div>
			</div>
		</header>
	);
};

export default HeaderHome;
