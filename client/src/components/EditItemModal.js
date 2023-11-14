import React, { useState, useContext, useEffect } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import { hideEditItemModal } from '../js/displayModal';
import ButtonDelete from './ButtonDelete';
import axios from 'axios';
import handleFormChange from '../js/handleFormChange';
import { Context } from '../context/AuthContext';
import formatDateDash from '../js/formatDateDash';

const EditItemModal = ({ groupName, itemInfo }) => {
	const [values, setValues] = useState('');
	const [groups, setGroups] = useState([]);
	const { handleEditItem, handleDeleteItem } = useContext(Context);

	useEffect(() => {
		async function getGroups() {
			const urlHandler = process.env.REACT_APP_URL_HANDLER;
			const url = `${urlHandler}/group/all`;
			const token = localStorage.getItem('token');
			const config = {
				headers: {
					'Content-Type': 'application/json',
					'x-auth-token': `${JSON.parse(token)}`,
				},
			};

			await axios
				.get(url, config)
				.then((resp) => {
					setGroups(resp.data);
				})
				.catch((error) => console.log(error));
		}

		getGroups();

		const item = {
			groupName: groupName,
			itemType: itemInfo.itemType,
			SKU: itemInfo.SKU,
			barcode: itemInfo.barcode,
			itemName: itemInfo.itemName,
			brandName: itemInfo.brandName,
			stockDate: formatDateDash(itemInfo.stockDate),
			stockRelease: formatDateDash(itemInfo.stockRelease),
			expirationDate: formatDateDash(itemInfo.expirationDate),
			cost: itemInfo.cost,
			sellingPrice: itemInfo.sellingPrice,
			status: itemInfo.status,
			units: itemInfo.units,
			measure: itemInfo.measure,
			minimumAmount: itemInfo.minimumAmount,
			itemDetails: itemInfo.itemDetails,
		};

		setValues(item);
	}, [groupName, itemInfo]);

	return (
		<div
			id='editItemModal'
			className='modal fixed w-full h-full bg-darkBlue bg-opacity-50 z-50 justify-center items-center hidden'>
			<div className='flex flex-col p-4 sm:p-8 bg-white basis-11/12 sm:basis-8/12 rounded-lg overflow-y-scroll max-h-[80%]'>
				<p className='font-bold'>Edit item</p>
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
								<option value={values.groupName || ''}>
									{values.groupName}
								</option>
								{groups.map((g, index) => {
									return (
										<option key={index} value={g.groupName}>
											{g.groupName}
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
								<option value={values.itemType}>{values.itemType}</option>
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
								value={values.SKU || ''}
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
								value={values.barcode || ''}
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
								value={values.itemName || ''}
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
								value={values.brandName || ''}
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
								value={values.stockDate || ''}
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
								value={values.stockRelease || ''}
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
								value={values.expirationDate || ''}
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
								value={values.cost || ''}
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
								value={values.sellingPrice || ''}
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
								<option value={values.status || ''}>{values.status}</option>
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
								value={values.units || ''}
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
								<option value={values.measure || ''}>{values.measure}</option>
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
								value={values.minimumAmount || ''}
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
								value={values.itemDetails || ''}
								onChange={(e) => handleFormChange(e, values, setValues)}
							/>
						</div>
					</div>
				</form>

				<div className='flex flex-row justify-between'>
					<div className='flex flex-row gap-3'>
						<ButtonPrimary
							text={'Save'}
							context={(e) => handleEditItem(e, values, itemInfo._id)}
							url={'/inventory'}
						/>
						<ButtonSecondary text={'Cancel'} click={hideEditItemModal} />
					</div>

					<div className='flex flex-row gap-3'>
						<ButtonDelete
							text={'Delete'}
							context={(e) => handleDeleteItem(e, itemInfo._id)}
							url={'/inventory'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditItemModal;
