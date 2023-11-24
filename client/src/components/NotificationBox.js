import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import formatDate from '../js/formatDate';
import { Context } from '../context/AuthContext';

const NotificationBox = () => {
	const [notifications, setNotifications] = useState([]);
	const { setNotificationsRead } = useContext(Context);

	const getNotifications = useCallback(async () => {
		const urlHandler = process.env.REACT_APP_URL_HANDLER;
		const url = `${urlHandler}/notification/all`;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': `${JSON.parse(token)}`,
			},
		};

		try {
			const resp = await axios.get(url, config);
			const allNotifications = resp.data;
			setNotifications(allNotifications);
			setNotificationsRead(allNotifications);
		} catch (error) {
			console.log(error);
		}
	}, [setNotificationsRead]);

	useEffect(() => {
		getNotifications();
	}, [getNotifications]);

	async function handleChangeReadStatus(id) {
		const urlHandler = process.env.REACT_APP_URL_HANDLER;
		const url = `${urlHandler}/notification/${id}`;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': `${JSON.parse(token)}`,
			},
		};

		await axios.put(url, {}, config).catch((error) => console.log(error));

		getNotifications();
	}

	return (
		<div className='notification absolute -translate-x-[16%] sm:translate-x-0 bg-white w-72 sm:w-96 h-[400px] z-[99] sm:right-0 top-[48px] rounded-md border border-borderGrey py-5 cursor-default hidden'>
			<p className='text-darkBlue font-bold mb-2 px-5 w-full'>Notification</p>

			<div className='flex flex-col h-[330px] overflow-auto'>
				{notifications.map((notification, index) => {
					return (
						<div className='hover:bg-lightGrey pb-2' key={index}>
							<hr className='text-borderGrey mb-2' />

							<div className='flex flex-row px-5 justify-between items-center'>
								<Link to={`/item-details/${notification.itemId}`}>
									<div className='flex flex-col'>
										<p>
											{`${notification.itemName} in ${notification.groupName} is `}
											<span className='font-bold'>{`${notification.itemStatus}`}</span>
										</p>
										<p className='text-detailGrey text-sm'>
											{formatDate(notification.createdAt)}
										</p>
									</div>
								</Link>

								{notification.isRead ? (
									<div onClick={() => handleChangeReadStatus(notification._id)}>
										<span className='checkBoxCheckedNotification material-symbols-outlined text-[16px] text-mediumGrey cursor-pointer'>
											task_alt
										</span>

										<span className='checkBoxUncheckedNotification material-symbols-outlined text-[16px] text-mediumGrey cursor-pointer hidden'>
											radio_button_unchecked
										</span>
									</div>
								) : (
									<div onClick={() => handleChangeReadStatus(notification._id)}>
										<span className='checkBoxCheckedNotification material-symbols-outlined text-[16px] text-mediumGrey cursor-pointer hidden'>
											task_alt
										</span>

										<span className='checkBoxUncheckedNotification material-symbols-outlined text-[16px] text-mediumGrey cursor-pointer'>
											radio_button_unchecked
										</span>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NotificationBox;
