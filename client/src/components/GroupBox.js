import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../components/ButtonPrimary';
import Pagination from './Pagination';
import { showAddItemModal, showEditGroupModal } from '../js/displayModal';

const GroupBox = ({ groupName, items, styles, groupKey }) => {
	const formatDate = (d) => {
		const date = new Date(d.split('T')[0].replace('-', '/'));
		const finalDate = `${
			date.getMonth() + 1
		}/${date.getDate()}/${date.getFullYear()}`;

		return finalDate;
	};

	const getItemStatus = (itemStatus) => {
		switch (itemStatus) {
			case 'In Stock':
				return (
					<p className='my-1 basis-1/12 bg-lightGreen text-darkGreen py-1 rounded-full'>
						{itemStatus}
					</p>
				);

			case 'Out of Stock':
				return (
					<p className='my-1 basis-1/12 bg-lightRed text-darkRed py-1 rounded-full'>
						{itemStatus}
					</p>
				);

			case 'Low Stock':
				return (
					<p className='my-1 basis-1/12 bg-lightYellow text-darkYellow py-1 rounded-full'>
						{itemStatus}
					</p>
				);

			case 'Expired':
				return (
					<p className='my-1 basis-1/12 bg-darkRed text-lightRed py-1 rounded-full'>
						{itemStatus}
					</p>
				);

			default:
				return (
					<p className='my-1 basis-1/12 bg-lightGreen text-darkGreen py-1 rounded-full'>
						{itemStatus}
					</p>
				);
		}
	};

	return (
		<div className={`bg-white p-8 rounded-lg mb-8 ${styles}`} key={groupKey}>
			<div className='flex flex-row items-center justify-between mb-5'>
				<div className='flex flex-row gap-x-2'>
					<p className='font-bold'>{groupName}</p>
					<Link onClick={(e) => showEditGroupModal(e)}>
						<span className='material-symbols-outlined text-detailGrey hover:text-mediumGrey'>
							edit_square
						</span>
					</Link>
				</div>

				<ButtonPrimary text={'Add item'} click={showAddItemModal} />
			</div>

			<div>
				<hr className='text-borderGrey' />
				<div className='flex flex-row justify-between text-center'>
					<p className='font-bold text-mediumGrey my-1 basis-1/12 text-left'>
						SKU
					</p>
					<p className='font-bold text-mediumGrey my-1 basis-1/3 text-left'>
						Product
					</p>
					<p className='font-bold text-mediumGrey my-1 basis-1/12'>Units</p>
					<p className='font-bold text-mediumGrey my-1 basis-1/12'>Cost</p>
					<p className='font-bold text-mediumGrey my-1 basis-1/12'>Sell</p>
					<p className='font-bold text-mediumGrey my-1 basis-1/12'>Margin</p>
					<p className='font-bold text-mediumGrey my-1 basis-1/12'>Status</p>
					<p className='font-bold text-mediumGrey my-1 basis-1/12'>Expires</p>
				</div>
				<hr className='text-borderGrey' />
			</div>

			{items.map((item, index) => {
				return (
					<div key={index}>
						<Link to={'/item-details'}>
							<div className='flex flex-row justify-between text-center my-2 text-text-sm items-center hover:text-lightBlue'>
								<p className='my-1 basis-1/12 text-left'>{item.SKU}</p>
								<p className='my-1 basis-1/3 text-left'>{item.itemName}</p>
								<p className='my-1 basis-1/12'>
									{item.units + ' ' + item.measure}
								</p>
								<p className='my-1 basis-1/12'>${item.cost}</p>
								<p className='my-1 basis-1/12'>${item.sellingPrice}</p>
								<p className='my-1 basis-1/12 font-bold'>
									{(
										((item.sellingPrice - item.cost) * 100) /
										item.sellingPrice
									).toFixed(1)}
									%
								</p>

								{getItemStatus(item.status)}

								<p className='my-1 basis-1/12'>
									{formatDate(item.expirationDate)}
								</p>
							</div>
						</Link>

						<hr className='text-borderGrey' />
					</div>
				);
			})}

			<Pagination />
		</div>
	);
};

export default GroupBox;
