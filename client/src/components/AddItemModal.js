import React, { useState, useContext } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import { hideAddItemModal } from '../js/displayModal';
import handleFormChange from '../js/handleFormChange';
import { Context } from '../context/AuthContext';

const AddItemModal = ({ groups }) => {
	const [values, setValues] = useState('');
	const { handleAddItem } = useContext(Context);

	return (
		<div
			id='addItemModal'
			className='modal fixed w-full h-full bg-darkBlue bg-opacity-50 z-[9999] justify-center items-center hidden'>
			<div className='flex flex-col p-4 sm:p-8 bg-white basis-11/12 sm:basis-8/12 rounded-lg overflow-y-scroll max-h-[80%]'>
				<p className='font-bold'>Add item</p>
				<hr className='text-borderGrey my-4' />

				<form className='mb-4 flex flex-col gap-5'>
					<div className='flex flex-row gap-5 justify-between flex-wrap sm:flex-nowrap'>
						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='groupName'>Group name:</label>
							<select
								id='groupName'
								name='groupName'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}>
								<option value='blank'></option>
								{groups.map((group, index) => {
									return (
										<option key={index} value={group.groupName}>
											{group.groupName}
										</option>
									);
								})}
							</select>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='itemType'>Item type:</label>
							<select
								id='itemType'
								name='itemType'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}>
								<option value='blank'></option>
								<option value='Item'>Item</option>
								<option value='Final product'>Final product</option>
							</select>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='SKU'>SKU:</label>
							<input
								type='text'
								id='SKU'
								name='SKU'
								placeholder='Type product SKU'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='barcode'>Bar code:</label>
							<input
								type='text'
								id='barcode'
								name='barcode'
								placeholder='Type item bar code'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>
					</div>

					<div className='flex flex-row gap-5 justify-between flex-wrap sm:flex-nowrap'>
						<div className='flex flex-col gap-2 w-full sm:basis-2/3'>
							<label htmlFor='itemName'>Item name:</label>
							<input
								type='text'
								id='itemName'
								name='itemName'
								placeholder='Type item name'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>

						<div className='flex flex-col gap-2 w-full sm:basis-1/3'>
							<label htmlFor='brandName'>Brand:</label>
							<input
								type='text'
								id='brandName'
								name='brandName'
								placeholder='Type product brand'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>
					</div>

					<div className='flex flex-row gap-5 justify-between flex-wrap sm:flex-nowrap'>
						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='stockDate'>Stock date:</label>
							<input
								type='date'
								id='stockDate'
								name='stockDate'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='stockRelease'>Stock release:</label>
							<input
								type='date'
								id='stockRelease'
								name='stockRelease'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='expirationDate'>Expiration date:</label>
							<input
								type='date'
								id='expirationDate'
								name='expirationDate'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>
					</div>

					<div className='flex flex-row gap-5 justify-between flex-wrap sm:flex-nowrap'>
						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='cost'>Cost:</label>
							<input
								type='text'
								id='cost'
								name='cost'
								placeholder='Item cost'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='sellingPrice'>Selling price:</label>
							<input
								type='text'
								id='sellingPrice'
								name='sellingPrice'
								placeholder='Item selling price'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='status'>Status:</label>
							<select
								id='status'
								name='status'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}>
								<option value='blank'></option>
								<option value='In Stock'>In Stock</option>
								<option value='Low Stock'>Low Stock</option>
								<option value='Out of Stock'>Out of Stock</option>
								<option value='Expired'>Expired</option>
							</select>
						</div>
					</div>

					<div className='flex flex-row gap-5 justify-between flex-wrap sm:flex-nowrap'>
						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='units'>Units:</label>
							<input
								type='number'
								id='units'
								name='units'
								placeholder='Item units'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='measure'>Measure:</label>
							<select
								id='measure'
								name='measure'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}>
								<option value='blank'></option>
								<option value='Units'>Units</option>
								<option value='Kilograms'>Kilograms</option>
								<option value='Ounces'>Ounces</option>
								<option value='Pounds'>Pounds</option>
							</select>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='minimumAmount'>Minimum amount:</label>
							<input
								type='number'
								id='minimumAmount'
								name='minimumAmount'
								placeholder='Item selling price'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>
					</div>

					<div className='flex flex-row gap-5 justify-between'>
						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='itemDetails'>Item details:</label>
							<textarea
								id='itemDetails'
								name='itemDetails'
								placeholder='Item details'
								className='border border-borderGrey px-6 py-2 rounded-lg w-full h-32'
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>
					</div>
				</form>

				<div className='flex flex-row justify-normal sm:justify-end gap-3'>
					<ButtonPrimary
						text={'Save'}
						context={(e) => handleAddItem(e, values)}
						url={'/inventory'}
					/>
					<ButtonSecondary text={'Cancel'} click={hideAddItemModal} />
				</div>
			</div>
		</div>
	);
};

export default AddItemModal;
