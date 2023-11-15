import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import ItemStatus from './ItemStatus';
import { showRegisterNFCModal } from '../js/displayModal';
import formatDate from '../js/formatDate';

const ItemDetailsBox = ({ item, styles }) => {
	return (
		<div className={`bg-white p-4 sm:p-8 rounded-lg mb-8 ${styles}`}>
			<div className='flex flex-row items-center justify-between mb-5'>
				<div className='flex flex-row w-full gap-x-3 items-center justify-center sm:justify-normal'>
					<ItemStatus status={item.status} />
					<p className='font-bold'>
						{item.itemName} - {item.brandName}
					</p>
				</div>
			</div>

			<div>
				<hr className='text-borderGrey mb-8' />
				<div className='flex flex-row justify-between'>
					<div className='grid grid-cols-2 sm:grid-cols-3 w-full gap-4'>
						<div>
							<p className='text-mediumGrey text-sm mb-1'>SKU</p>
							<p>{item.SKU}</p>
						</div>

						<div className='col-span-2 sm:col-span-1'>
							<p className='text-mediumGrey text-sm mb-1'>Bar code</p>
							<p>{item.barcode}</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Item type</p>
							<p>{item.itemType}</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Stock date</p>
							<p>{formatDate(item.stockDate)}</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Stock release</p>
							<p>{formatDate(item.stockRelease)}</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Expiration date</p>
							<p>{formatDate(item.expirationDate)}</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Cost</p>
							<p>${item.cost}</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Selling price</p>
							<p>${item.sellingPrice}</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Margin</p>
							<p>
								{(
									((item.sellingPrice - item.cost) * 100) /
									item.sellingPrice
								).toFixed(1)}
								% (${(item.sellingPrice - item.cost).toFixed(2)})
							</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Units</p>
							<p>
								{item.units} {item.measure}
							</p>
						</div>

						<div>
							<p className='text-mediumGrey text-sm mb-1'>Minimum amount</p>
							<p>
								{item.minimumAmount} {item.measure}
							</p>
						</div>
					</div>
				</div>

				<hr className='text-borderGrey my-8' />

				<div>
					<p className='text-mediumGrey text-sm mb-1'>Item details</p>
					<p>{item.itemDetails}</p>
				</div>
			</div>

			<div className='flex flex-row justify-center sm:justify-end mt-8 sm:hidden'>
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
