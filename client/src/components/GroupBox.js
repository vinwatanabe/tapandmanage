import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../components/ButtonPrimary';
import Pagination from './Pagination';
import ItemStatus from './ItemStatus';
import { showAddItemModal, showEditGroupModal } from '../js/displayModal';
import formatDate from '../js/formatDate';
import { Context } from '../context/AuthContext';

const GroupBox = ({ groupId, groupName, items, styles, groupKey }) => {
	const { setEditGroupInfo } = useContext(Context);

	function getGroupId(event, id, name) {
		event.preventDefault();

		const groupEdit = {
			id: id,
			groupName: name,
		};

		setEditGroupInfo(groupEdit);
	}

	return (
		<div
			className={`bg-white p-5 sm:p-8 rounded-lg mb-8 ${styles}`}
			key={groupKey}>
			<div className='flex flex-row items-center justify-between mb-5'>
				<div className='flex flex-row gap-x-2'>
					<p className='font-bold'>{groupName}</p>
					<Link
						onClick={(e) => {
							showEditGroupModal(e);
							getGroupId(e, groupId, groupName);
						}}>
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
					<p className='font-bold text-mediumGrey my-1 basis-4/12 sm:basis-1/12 text-left hidden sm:inline'>
						SKU
					</p>
					<p className='font-bold text-mediumGrey my-1 basis-1/3 text-left inline'>
						Product
					</p>
					<p className='font-bold text-mediumGrey my-1 basis-4/12 sm:basis-1/12 inline'>
						Units
					</p>
					<p className='font-bold text-mediumGrey my-1 basis-4/12 sm:basis-1/12 hidden sm:inline'>
						Cost
					</p>
					<p className='font-bold text-mediumGrey my-1 basis-4/12 sm:basis-1/12 hidden sm:inline'>
						Sell
					</p>
					<p className='font-bold text-mediumGrey my-1 basis-4/12 sm:basis-1/12 hidden sm:inline'>
						Margin
					</p>
					<p className='font-bold text-mediumGrey my-1 basis-4/12 sm:basis-1/12 inline'>
						Status
					</p>
					<p className='font-bold text-mediumGrey my-1 basis-4/12 sm:basis-1/12 hidden sm:inline'>
						Expires
					</p>
				</div>
				<hr className='text-borderGrey' />
			</div>

			{items.map((item, index) => {
				return (
					<div key={index}>
						<Link to={`/item-details/${item._id}`}>
							<div className='flex flex-row justify-between text-center my-2 text-text-sm items-center hover:text-lightBlue'>
								<p className='my-1 basis-1/12 text-left hidden sm:inline'>
									{item.SKU}
								</p>
								<p className='my-1 basis-1/3 text-left inline'>
									{item.itemName}
								</p>
								<p className='my-1 basis-1/12 inline'>
									{item.units + ' ' + item.measure}
								</p>
								<p className='my-1 basis-1/12 hidden sm:inline'>
									${item.cost.toFixed(2)}
								</p>
								<p className='my-1 basis-1/12 hidden sm:inline'>
									${item.sellingPrice.toFixed(2)}
								</p>
								<p className='my-1basis-1/12 font-bold hidden sm:inline'>
									{(
										((item.sellingPrice - item.cost) * 100) /
										item.sellingPrice
									).toFixed(1)}
									%
								</p>

								<ItemStatus status={item.status} />

								<p className='my-1 basis-1/12 hidden sm:inline'>
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
