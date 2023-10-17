import React from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import { hideEditGroupModal } from '../js/displayModal';
import ButtonDelete from './ButtonDelete';

const EditGroupModal = () => {
	return (
		<div
			id='editGroupModal'
			className='modal fixed w-full h-full bg-darkBlue bg-opacity-50 z-50 justify-center items-center hidden'>
			<div className='flex flex-col p-8 bg-white basis-6/12 rounded-lg'>
				<p className='font-bold'>Edit group</p>
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

				<div className='flex flex-row justify-between'>
					<div className='flex flex-row gap-3'>
						<ButtonPrimary text={'Save'} click={hideEditGroupModal} />
						<ButtonSecondary text={'Cancel'} click={hideEditGroupModal} />
					</div>

					<div className='flex flex-row gap-3'>
						<ButtonDelete text={'Delete'} click={hideEditGroupModal} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditGroupModal;
