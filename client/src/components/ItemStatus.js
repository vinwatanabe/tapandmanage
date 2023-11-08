import React from 'react';

const ItemStatus = ({ status }) => {
	const getItemStatus = (itemStatus) => {
		switch (itemStatus) {
			case 'In Stock':
				return (
					<p className='text-sm my-1 basis-1/12 bg-lightGreen text-darkGreen py-1 px-1 text-center rounded-full'>
						{itemStatus}
					</p>
				);

			case 'Out of Stock':
				return (
					<p className='text-sm my-1 basis-1/12 bg-lightRed text-darkRed py-1 px-1 text-center rounded-full'>
						{itemStatus}
					</p>
				);

			case 'Low Stock':
				return (
					<p className='text-sm my-1 basis-1/12 bg-lightYellow text-darkYellow py-1 px-1 text-center rounded-full'>
						{itemStatus}
					</p>
				);

			case 'Expired':
				return (
					<p className='text-sm my-1 basis-1/12 bg-darkRed text-lightRed py-1 px-1 text-center rounded-full'>
						{itemStatus}
					</p>
				);

			default:
				return (
					<p className='text-sm my-1 basis-1/12 bg-lightGreen text-darkGreen py-1 rounded-full'>
						{itemStatus}
					</p>
				);
		}
	};

	return <>{getItemStatus(status)}</>;
};

export default ItemStatus;
