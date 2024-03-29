import React from 'react';

const ItemStatus = ({ status }) => {
	const getItemStatus = (itemStatus) => {
		switch (itemStatus) {
			case 'In Stock':
				return (
					<p className='text-xs my-1 bg-lightGreen text-darkGreen py-1 px-2 text-center rounded-full'>
						{itemStatus}
					</p>
				);

			case 'Out of Stock':
				return (
					<p className='text-xs my-1 bg-lightRed text-darkRed py-1 px-2 text-center rounded-full'>
						{itemStatus}
					</p>
				);

			case 'Low Stock':
				return (
					<p className='text-xs my-1 bg-lightYellow text-darkYellow py-1 px-2 text-center rounded-full'>
						{itemStatus}
					</p>
				);

			case 'Expired':
				return (
					<p className='text-xs my-1 bg-darkRed text-lightRed py-1 px-2 text-center rounded-full'>
						{itemStatus}
					</p>
				);

			default:
				return (
					<p className='text-xs my-1 bg-lightGreen text-darkGreen py-2 rounded-full'>
						{itemStatus}
					</p>
				);
		}
	};

	return <>{getItemStatus(status)}</>;
};

export default ItemStatus;
