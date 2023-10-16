import React from 'react';

const Pagination = () => {
	return (
		<div className='flex flex-row justify-center mt-8 items-center gap-1'>
			<p className='text-white bg-lightBlue hover:bg-lightBlueHover px-3 py-1 rounded-lg'>
				1
			</p>
			<p className='text-detailGrey bg-white hover:bg-lightGrey px-3 py-1 rounded-lg'>
				2
			</p>
			<p className='text-detailGrey bg-white hover:bg-lightGrey px-3 py-1 rounded-lg'>
				3
			</p>
			<p className='text-detailGrey bg-white hover:bg-lightGrey px-3 py-1 rounded-lg'>
				4
			</p>
		</div>
	);
};

export default Pagination;
