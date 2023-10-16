import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ItemDetailsBox from '../../components/ItemDetailsBox';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';

const ItemDetails = () => {
	return (
		<>
			<Sidebar />
			<div className='container w-full flex flex-col float-right ml-72'>
				<Header />

				<div className='pl-10 pr-10'>
					<div className='pt-5 pb-5 flex flex-row items-center justify-between'>
						<div className='flex flex-row  gap-2 items-center'>
							<p className='text-title-lg font-bold'>Item details</p>

							<Link to={'#!'} className='flex items-center'>
								<span className='material-symbols-outlined text-detailGrey hover:text-mediumGrey'>
									edit_square
								</span>
							</Link>
						</div>

						<div className='flex flex-row'>
							<ButtonSecondary
								text={'Read NFC'}
								url={'#!'}
								icon={'nfc'}
								styles={'mr-3'}
							/>

							<ButtonPrimary text={'Add group'} url={'#!'} />
						</div>
					</div>

					<ItemDetailsBox groupName={'Cheddar Cheese - Cracker Barrel'} />
				</div>
			</div>
		</>
	);
};

export default ItemDetails;
