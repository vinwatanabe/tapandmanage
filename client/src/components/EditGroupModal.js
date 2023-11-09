import React, { useState, useContext, useEffect } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import { hideEditGroupModal } from '../js/displayModal';
import ButtonDelete from './ButtonDelete';
import handleFormChange from '../js/handleFormChange';
import { Context } from '../context/AuthContext';

const EditGroupModal = ({ groupInfo }) => {
	const [values, setValues] = useState('');
	const { handleEditGroup, handleDeleteGroup } = useContext(Context);

	useEffect(() => {
		setValues({ groupName: groupInfo.groupName });
	}, [groupInfo.groupName]);

	return (
		<div
			id='editGroupModal'
			className='modal fixed w-full h-full bg-darkBlue bg-opacity-50 z-50 justify-center items-center hidden'>
			<div className='flex flex-col p-8 bg-white basis-6/12 rounded-lg'>
				<p className='font-bold'>Edit group</p>
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
							value={values.groupName || ''}
							onChange={(e) => handleFormChange(e, values, setValues)}
						/>
					</div>
				</form>

				<div className='flex flex-row justify-between'>
					<div className='flex flex-row gap-3'>
						<ButtonPrimary
							text={'Save'}
							context={(e) => handleEditGroup(e, values, groupInfo.id)}
							url={'/inventory'}
						/>
						<ButtonSecondary text={'Cancel'} click={hideEditGroupModal} />
					</div>

					<div className='flex flex-row gap-3'>
						<ButtonDelete
							text={'Delete'}
							context={(e) => handleDeleteGroup(e, groupInfo.id)}
							url={'/inventory'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditGroupModal;
