import React, { useEffect, useState, useContext } from 'react';
import ProfilePicture from '../images/picture/profile-picture.jpg';
import ArrowIcon from '../images/assets/arrow-ico.svg';
import { Context } from '../context/AuthContext';

const Header = () => {
	const [user, setUser] = useState({});
	const { userDataLoaded } = useContext(Context);

	useEffect(() => {
		if (userDataLoaded || localStorage.getItem('firstName')) {
			const firstName = localStorage.getItem('firstName');
			const lastName = localStorage.getItem('lastName');
			const company = localStorage.getItem('company');

			const userData = {
				firstName: firstName,
				lastName: lastName,
				company: company,
			};
			setUser(userData);
		}
	}, [userDataLoaded]);

	console.log(userDataLoaded);

	return (
		<header className='flex flex-row bg-white h-20 w-full justify-end items-center'>
			<div className='grid bg-background rounded-full w-[38px] h-[38px] place-content-center mr-5 border border-borderGrey'>
				<span className='absolute justify-self-end float-right w-[8px] h-[8px] bg-darkRed rounded-full' />
				<span className='material-symbols-outlined'>notifications</span>
			</div>

			<div className='flex flex-row mr-10 items-center'>
				<div className='flex flex-col place-items-end mr-3'>
					<p className='text-text-sm text-darkBlue'>
						{user.firstName} {user.lastName}
					</p>
					<p className='text-text-xs text-detailGrey'>{user.company}</p>
				</div>
				<picture>
					<img
						className='w-[50px] h-auto rounded-full'
						src={ProfilePicture}
						alt='Profile'
					/>
				</picture>
				<picture className='ml-3'>
					<img
						className='w-[11px] h-auto rounded-full'
						src={ArrowIcon}
						alt=''
					/>
				</picture>
			</div>
		</header>
	);
};

export default Header;
