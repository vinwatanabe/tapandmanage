import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import { showRegisterNFCModal } from '../js/displayModal';

const ItemDetailsBox = ({ groupName, styles }) => {
	return (
		<div className={`bg-white p-8 rounded-lg mb-8 ${styles}`}>
			<div className='flex flex-row items-center justify-between mb-5'>
				<div className='flex flex-row gap-x-3 items-center'>
					<p className='text-sm bg-lightGreen text-darkGreen py-1 px-4 rounded-full'>
						In Stock
					</p>
					<p className='font-bold'>{groupName}</p>
				</div>
			</div>

			<div>
				<hr className='text-borderGrey mb-8' />
				<div className='flex flex-row justify-between'>
					<div className='flex flex-col gap-5 basis-1/3'>
						<div>
							<p className='text-mediumGrey text-sm mb-1'>SKU</p>
							<p>CF123456</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Stock date</p>
							<p>05/07/2023</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Cost</p>
							<p>$12.50</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Units</p>
							<p>32 units</p>
						</div>
					</div>

					<div className='flex flex-col gap-5 basis-1/3'>
						<div>
							<p className='text-mediumGrey text-sm mb-1'>Bar code</p>
							<p>4165103065160300001</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Stock release</p>
							<p>12/10/2023</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Selling price</p>
							<p>$30.00</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Minimum amount</p>
							<p>12 units</p>
						</div>
					</div>

					<div className='flex flex-col gap-5 basis-1/3'>
						<div>
							<p className='text-mediumGrey text-sm mb-1'>Item type</p>
							<p>Final product</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Expiration date</p>
							<p>20/10/2023</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Margin</p>
							<p>59.6% ($17.50)</p>
						</div>
					</div>
				</div>

				<hr className='text-borderGrey my-8' />

				<div>
					<p className='text-mediumGrey text-sm mb-1'>Item details</p>
					<p>
						Cheddar Cheese is a soft cheese with a smooth texture, known for its
						delicate flavor and perfect melting.
					</p>
					<p>
						Made from high quality milk, it is widely used in various culinary
						recipes, from pizzas and lasagna to sandwiches and salads.
					</p>
				</div>
			</div>

			<div className='flex flex-row justify-end mt-8'>
				<ButtonPrimary
					text={'Register NFC'}
					icon={'NFC'}
					click={showRegisterNFCModal}
				/>
			</div>
		</div>
	);
};

export default ItemDetailsBox;
