import React from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import { hideAddItemModal } from '../js/displayModal';

const AddItemModal = () => {
	return (
		<div
			id='addItemModal'
			className='modal fixed w-full h-full bg-darkBlue bg-opacity-50 z-50 justify-center items-center hidden'>
			<div className='flex flex-col p-8 bg-white basis-8/12 rounded-lg overflow-y-scroll max-h-[80%]'>
				<p className='font-bold'>Add item</p>
				<hr className='text-borderGrey my-4' />

				<form className='mb-4 flex flex-col gap-5'>
					<div className='flex flex-row gap-5 justify-between'>
						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='item-type'>Item type:</label>
							<select
								id='item-type'
								name='item-type'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'>
								<option value='final-product'>Final product</option>
								<option value='item'>Item</option>
							</select>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='sku'>SKU:</label>
							<input
								type='text'
								id='sku'
								name='sku'
								placeholder='Type product SKU'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
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
							/>
						</div>
					</div>

					<div className='flex flex-row gap-5 justify-between'>
						<div className='flex flex-col gap-2 w-full basis-2/3'>
							<label htmlFor='item-name'>Item name:</label>
							<input
								type='text'
								id='item-name'
								name='item-name'
								placeholder='Type item name'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
							/>
						</div>

						<div className='flex flex-col gap-2 w-full basis-1/3'>
							<label htmlFor='brand'>Brand:</label>
							<input
								type='text'
								id='brand'
								name='brand'
								placeholder='Type product brand'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
							/>
						</div>
					</div>

					<div className='flex flex-row gap-5 justify-between'>
						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='stock-date'>Stock date:</label>
							<input
								type='date'
								id='stock-date'
								name='stock-date'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
							/>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='stock-release'>Stock release:</label>
							<input
								type='date'
								id='stock-release'
								name='stock-release'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
							/>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='expiration-date'>Expiration date:</label>
							<input
								type='date'
								id='expiration-date'
								name='expiration-date'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
							/>
						</div>
					</div>

					<div className='flex flex-row gap-5 justify-between'>
						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='cost'>Cost:</label>
							<input
								type='text'
								id='cost'
								name='cost'
								placeholder='Item cost'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
							/>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='selling-price'>Selling price:</label>
							<input
								type='text'
								id='selling-price'
								name='selling-price'
								placeholder='Item selling price'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
							/>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='status'>Status:</label>
							<select
								id='status'
								name='status'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'>
								<option value='in-stock'>In Stock</option>
								<option value='low-stock'>Low Stock</option>
								<option value='out-of-stock'>Out of Stock</option>
								<option value='expired'>Expired</option>
							</select>
						</div>
					</div>

					<div className='flex flex-row gap-5 justify-between'>
						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='units'>Units:</label>
							<input
								type='number'
								id='units'
								name='units'
								placeholder='Item units'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
							/>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='measure'>Measure:</label>
							<select
								id='measure'
								name='measure'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'>
								<option value='units'>Units</option>
								<option value='kilograms'>Kilograms</option>
								<option value='ounces'>Ounces</option>
								<option value='pounds'>Pounds</option>
							</select>
						</div>

						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='minimum-amount'>Minimum amount:</label>
							<input
								type='number'
								id='minimum-amount'
								name='minimum-amount'
								placeholder='Item selling price'
								className='border border-borderGrey px-6 py-2 rounded-full w-full'
							/>
						</div>
					</div>

					<div className='flex flex-row gap-5 justify-between'>
						<div className='flex flex-col gap-2 w-full'>
							<label htmlFor='item-details'>Item details:</label>
							<textarea
								id='item-details'
								name='item-details'
								placeholder='Item units'
								className='border border-borderGrey px-6 py-2 rounded-lg w-full h-32'
							/>
						</div>
					</div>
				</form>

				<div className='flex flex-row justify-end gap-3'>
					<ButtonPrimary text={'Save'} click={hideAddItemModal} />
					<ButtonSecondary text={'Cancel'} click={hideAddItemModal} />
				</div>
			</div>
		</div>
	);
};

export default AddItemModal;
