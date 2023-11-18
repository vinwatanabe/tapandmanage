import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../components/ButtonPrimary';
import ItemStatus from './ItemStatus';
import { showAddItemModal, showEditGroupModal } from '../js/displayModal';
import formatDate from '../js/formatDate';
import { Context } from '../context/AuthContext';

const GroupBox = ({ groupId, groupName, items, styles, groupKey }) => {
	const { setEditGroupInfo } = useContext(Context);
	const [paginationList, setPaginationList] = useState([]);
	const [page, setPage] = useState(0);
	const index = page;

	function getGroupId(event, id, name) {
		event.preventDefault();

		const groupEdit = {
			id: id,
			groupName: name,
		};

		setEditGroupInfo(groupEdit);
	}

	function createPagination(itemList) {
		let list = [];

		for (let j = 1; j <= itemList.length; j += 5) {
			let itemPage = [];
			itemPage.push(itemList[j - 1]);

			for (let i = j; i % 5 !== 0 && i < itemList.length; i++) {
				itemPage.push(itemList[i]);
			}

			list.push(itemPage);
		}

		return list;
	}

	useEffect(() => {
		const itemArrays = createPagination(items);

		setPaginationList(itemArrays);
	}, [items]);

	let genNumber = (pageNumber) => {
		let pageNumbers = [];

		for (let i = 1; i <= pageNumber; i++) {
			const isActive = i === index + 1;

			pageNumbers.push(
				<p
					key={i}
					className={`${
						isActive
							? 'text-white bg-lightBlue hover:bg-lightBlueHover'
							: 'text-detailGrey bg-white hover:bg-lightGrey cursor-pointer'
					} px-3 py-1 rounded-lg pagination`}
					onClick={() => setPage(i - 1)}>
					{i}
				</p>
			);
		}

		return pageNumbers;
	};

	let paginationFunc = (pageNumber) => {
		return (
			<div className='flex flex-row justify-center mt-8 items-center gap-1'>
				{genNumber(pageNumber)}
			</div>
		);
	};

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
				<div className='grid grid-cols-6 sm:grid-cols-12 text-center'>
					<p className='font-bold text-mediumGrey my-1 col-span-2 text-left hidden sm:inline'>
						SKU
					</p>
					<p className='font-bold text-mediumGrey my-1 col-span-2 text-left inline'>
						Product
					</p>
					<p className='font-bold text-mediumGrey my-1 col-span-2 sm:col-span-1 inline'>
						Quantity
					</p>
					<p className='font-bold text-mediumGrey my-1 col-span-1 hidden sm:inline'>
						Cost
					</p>
					<p className='font-bold text-mediumGrey my-1 col-span-1 hidden sm:inline'>
						Sell
					</p>
					<p className='font-bold text-mediumGrey my-1 col-span-1 hidden sm:inline'>
						Markup
					</p>
					<p className='font-bold text-mediumGrey my-1 col-span-2 inline'>
						Status
					</p>
					<p className='font-bold text-mediumGrey my-1 col-span-2 hidden sm:inline'>
						Expires
					</p>
				</div>
				<hr className='text-borderGrey' />
			</div>

			{paginationList[page] &&
				paginationList[page].map((item, index) => {
					return (
						<div key={index}>
							<Link to={`/item-details/${item._id}`}>
								<div className='grid grid-cols-6 sm:grid-cols-12 gap-x-2 text-center my-2 text-text-sm hover:text-lightBlue'>
									<p className='my-1 col-span-2 text-left hidden sm:inline'>
										{item.SKU}
									</p>
									<p className='my-1 col-span-2 text-left inline'>
										{item.itemName}
									</p>
									<p className='my-1 col-span-2 sm:col-span-1 inline'>
										{item.units + ' ' + item.measure}
									</p>
									<p className='my-1 col-span-1 hidden sm:inline'>
										${item.cost.toFixed(2)}
									</p>
									<p className='my-1 col-span-1 hidden sm:inline'>
										${item.sellingPrice.toFixed(2)}
									</p>
									<p className='my-1 col-span-1 font-bold hidden sm:inline'>
										{(
											((item.sellingPrice - item.cost) / item.cost) *
											100
										).toFixed(1)}
										%
									</p>

									<div className='col-span-2'>
										<ItemStatus status={item.status} />
									</div>

									<p className='my-1 col-span-2 hidden sm:inline'>
										{formatDate(item.expirationDate)}
									</p>
								</div>
							</Link>

							<hr className='text-borderGrey' />
						</div>
					);
				})}

			{items.length > 5 ? paginationFunc(paginationList.length) : ''}
		</div>
	);
};

export default GroupBox;
