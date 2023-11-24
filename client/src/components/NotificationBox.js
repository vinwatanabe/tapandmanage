import React from 'react';
import { toggleCheckBox } from '../js/notificationAnimation';

const NotificationBox = () => {
	return (
		<div className='notification absolute -translate-x-[16%] sm:translate-x-0 bg-white w-72 sm:w-96 h-[400px] z-[99] sm:right-0 top-[48px] rounded-md border border-borderGrey py-5 cursor-default hidden'>
			<p className='text-darkBlue font-bold mb-2 px-5 w-full'>Notification</p>

			<div className='flex flex-col h-[330px] overflow-auto'>
				<div className='hover:bg-lightGrey pb-2'>
					<hr className='text-borderGrey mb-2' />

					<div className='flex flex-row px-5 justify-between items-center'>
						<div className='flex flex-col'>
							<p>Cheese is low stock</p>
							<p className='text-detailGrey text-sm'>May 18, 2023</p>
						</div>

						<div onClick={toggleCheckBox}>
							<span className='checkBoxCheckedNotification material-symbols-outlined text-[16px] text-mediumGrey cursor-pointer hidden'>
								task_alt
							</span>

							<span className='checkBoxUncheckedNotification material-symbols-outlined text-[16px] text-mediumGrey cursor-pointer'>
								radio_button_unchecked
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotificationBox;
