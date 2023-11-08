import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../components/ButtonPrimary';
import Pagination from './Pagination';
import ItemStatus from './ItemStatus';
import { showAddItemModal, showEditGroupModal } from '../js/displayModal';
import formatDate from '../js/formatDate';

const GroupBox = ({ groupName, items, styles, groupKey }) => {
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
						<Link to={`/item-details/${item._id}`}>
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

								<ItemStatus status={item.status} />

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
