import React from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import { hideGroupModal } from '../js/displayModal';

const AddGroupModal = () => {
	return (
		<div
			id='addGroupModal'
			className='modal fixed w-full h-full bg-darkBlue bg-opacity-50 z-50 justify-center items-center hidden'>
			<div className='flex flex-col p-8 bg-white basis-6/12 rounded-lg'>
				<p className='font-bold'>Add group</p>
				<hr className='text-borderGrey my-4' />

				<form className='mb-4'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='group-name'>Group name:</label>
						<input
							type='text'
							id='group-name'
							name='group-name'
							placeholder='Type the group name'
							className='border border-borderGrey px-6 py-2 rounded-full w-full'
						/>
					</div>
				</form>

				<div className='flex flex-row justify-end gap-3'>
					<ButtonPrimary text={'Save'} click={hideGroupModal} />
					<ButtonSecondary text={'Cancel'} click={hideGroupModal} />
				</div>
			</div>
		</div>
	);
};

export default AddGroupModal;
