import React, { useState, useContext } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import { hideGroupModal } from '../js/displayModal';
import handleFormChange from '../js/handleFormChange';
import { Context } from '../context/AuthContext';

const AddGroupModal = () => {
	const [values, setValues] = useState('');
	const { handleAddGroup } = useContext(Context);

	return (
		<div
			id='addGroupModal'
			className='modal fixed w-full h-full bg-darkBlue bg-opacity-50 z-50 justify-center items-center hidden'>
			<div className='flex flex-col p-4 sm:p-8 bg-white basis-11/12 sm:basis-6/12 rounded-lg'>
				<p className='font-bold'>Add group</p>
				<hr className='text-borderGrey my-4' />

				<form className='mb-4'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='groupName'>Group name:</label>
						<input
							type='text'
							id='groupName'
							name='groupName'
							placeholder='Type the group name'
							className='border border-borderGrey px-6 py-2 rounded-full w-full'
							onChange={(e) => handleFormChange(e, values, setValues)}
						/>
					</div>
				</form>

				<div className='flex flex-row justify-normal sm:justify-end gap-3'>
					<ButtonPrimary
						text={'Save'}
						context={(e) => handleAddGroup(e, values)}
						url={'/inventory'}
					/>
					<ButtonSecondary text={'Cancel'} click={hideGroupModal} />
				</div>
			</div>
		</div>
	);
};

export default AddGroupModal;
