import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../images/picture/profile-picture.jpg';
import ArrowIcon from '../images/assets/arrow-ico.svg';
import { Context } from '../context/AuthContext';
import { toggleSideBar } from '../js/sidebarAnimation';
import NotificationBox from './NotificationBox';
import { toggleNotification } from '../js/notificationAnimation';

const Header = () => {
	const [user, setUser] = useState({});
	const { userDataLoaded, notificationsRead } = useContext(Context);

	const checkNotificationsRead = useCallback(() => {
		const allRead = notificationsRead.every(
			(notification) => notification.isRead
		);

		if (allRead) {
			document.querySelector('.activeNotification').classList.add('hidden');
		} else {
			document.querySelector('.activeNotification').classList.remove('hidden');
		}
	}, [notificationsRead]);

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

			checkNotificationsRead();
		}
	}, [userDataLoaded, checkNotificationsRead]);

	return (
		<header className='flex flex-row bg-white h-20 w-full justify-between sm:justify-end items-center'>
			<div className='visible sm:invisible ml-5'>
				<span
					className='material-symbols-outlined cursor-pointer'
					onClick={toggleSideBar}>
					menu
				</span>
			</div>

			<div className='flex flex-row items-center'>
				<div className='relative grid bg-background rounded-full w-[38px] h-[38px]  mr-5 border border-borderGrey cursor-pointer'>
					<div
						onClick={toggleNotification}
						className='grid place-content-center'>
						<span className='activeNotification absolute justify-self-end float-right w-[8px] h-[8px] bg-darkRed rounded-full' />
						<span className='material-symbols-outlined'>notifications</span>
					</div>

					<NotificationBox />
				</div>

				<Link to={`/management/${localStorage.getItem('id')}`}>
					<div className='flex flex-row mr-5 sm:mr-10 items-center'>
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
				</Link>
			</div>
		</header>
	);
};

export default Header;
