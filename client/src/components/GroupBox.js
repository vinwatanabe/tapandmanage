import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../components/ButtonPrimary';
import Pagination from './Pagination';

const GroupBox = ({ groupName, styles }) => {
	return (
		<div className={`bg-white p-8 rounded-lg ${styles}`}>
			<div className='flex flex-row items-center justify-between mb-5'>
				<div className='flex flex-row gap-x-2'>
					<p className='font-bold'>{groupName}</p>
					<Link to={'#!'}>
						<span className='material-symbols-outlined text-detailGrey hover:text-mediumGrey'>
							edit_square
						</span>
					</Link>
				</div>

				<ButtonPrimary text={'Add item'} url={'#!'} />
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

			<div>
				<div className='flex flex-row justify-between text-center my-2 text-text-sm items-center'>
					<p className='my-1 basis-1/12 text-left'>CF123456</p>
					<p className='my-1 basis-1/3 text-left'>Cheese Pizza</p>
					<p className='my-1 basis-1/12'>13 Unts</p>
					<p className='my-1 basis-1/12'>$12.50</p>
					<p className='my-1 basis-1/12'>$30.00</p>
					<p className='my-1 basis-1/12 font-bold'>59.6%</p>
					<p className='my-1 basis-1/12 bg-lightGreen text-darkGreen py-1 rounded-full'>
						In Stock
					</p>
					<p className='my-1 basis-1/12'>12/11/2023</p>
				</div>
				<hr className='text-borderGrey' />
			</div>

			<div>
				<div className='flex flex-row justify-between text-center my-2 text-text-sm items-center'>
					<p className='my-1 basis-1/12 text-left'>CF123456</p>
					<p className='my-1 basis-1/3 text-left'>Cheese Pizza</p>
					<p className='my-1 basis-1/12'>13 Unts</p>
					<p className='my-1 basis-1/12'>$12.50</p>
					<p className='my-1 basis-1/12'>$30.00</p>
					<p className='my-1 basis-1/12 font-bold'>59.6%</p>
					<p className='my-1 basis-1/12 bg-lightGreen text-darkGreen py-1 rounded-full'>
						In Stock
					</p>
					<p className='my-1 basis-1/12'>12/11/2023</p>
				</div>
				<hr className='text-borderGrey' />
			</div>

			<div>
				<div className='flex flex-row justify-between text-center my-2 text-text-sm items-center'>
					<p className='my-1 basis-1/12 text-left'>CF123456</p>
					<p className='my-1 basis-1/3 text-left'>Cheese Pizza</p>
					<p className='my-1 basis-1/12'>13 Unts</p>
					<p className='my-1 basis-1/12'>$12.50</p>
					<p className='my-1 basis-1/12'>$30.00</p>
					<p className='my-1 basis-1/12 font-bold'>59.6%</p>
					<p className='my-1 basis-1/12 bg-lightGreen text-darkGreen py-1 rounded-full'>
						In Stock
					</p>
					<p className='my-1 basis-1/12'>12/11/2023</p>
				</div>
				<hr className='text-borderGrey' />
			</div>

			<div>
				<div className='flex flex-row justify-between text-center my-2 text-text-sm items-center'>
					<p className='my-1 basis-1/12 text-left'>CF123456</p>
					<p className='my-1 basis-1/3 text-left'>Cheese Pizza</p>
					<p className='my-1 basis-1/12'>13 Unts</p>
					<p className='my-1 basis-1/12'>$12.50</p>
					<p className='my-1 basis-1/12'>$30.00</p>
					<p className='my-1 basis-1/12 font-bold'>59.6%</p>
					<p className='my-1 basis-1/12 bg-lightGreen text-darkGreen py-1 rounded-full'>
						In Stock
					</p>
					<p className='my-1 basis-1/12'>12/11/2023</p>
				</div>
				<hr className='text-borderGrey' />
			</div>

			<div>
				<div className='flex flex-row justify-between text-center my-2 text-text-sm items-center'>
					<p className='my-1 basis-1/12 text-left'>CF123456</p>
					<p className='my-1 basis-1/3 text-left'>Cheese Pizza</p>
					<p className='my-1 basis-1/12'>13 Unts</p>
					<p className='my-1 basis-1/12'>$12.50</p>
					<p className='my-1 basis-1/12'>$30.00</p>
					<p className='my-1 basis-1/12 font-bold'>59.6%</p>
					<p className='my-1 basis-1/12 bg-lightGreen text-darkGreen py-1 rounded-full'>
						In Stock
					</p>
					<p className='my-1 basis-1/12'>12/11/2023</p>
				</div>
				<hr className='text-borderGrey' />
			</div>

			<div>
				<div className='flex flex-row justify-between text-center my-2 text-text-sm items-center'>
					<p className='my-1 basis-1/12 text-left'>CF123456</p>
					<p className='my-1 basis-1/3 text-left'>Cheese Pizza</p>
					<p className='my-1 basis-1/12'>13 Unts</p>
					<p className='my-1 basis-1/12'>$12.50</p>
					<p className='my-1 basis-1/12'>$30.00</p>
					<p className='my-1 basis-1/12 font-bold'>59.6%</p>
					<p className='my-1 basis-1/12 bg-lightGreen text-darkGreen py-1 rounded-full'>
						In Stock
					</p>
					<p className='my-1 basis-1/12'>12/11/2023</p>
				</div>
				<hr className='text-borderGrey' />
			</div>

			<Pagination />
		</div>
	);
};

export default GroupBox;
