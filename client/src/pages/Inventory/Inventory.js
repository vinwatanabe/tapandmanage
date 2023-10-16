import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import GroupBox from '../../components/GroupBox';
import AddGroupModal from '../../components/AddGroupModal';
import AddItemModal from '../../components/AddItemModal';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import { showGroupModal } from '../../js/displayModal';

const Inventory = () => {
	return (
		<>
			<AddGroupModal />
			<AddItemModal />

			<Sidebar />
			<div className='container w-full flex flex-col float-right ml-72'>
				<Header />

				<div className='pl-10 pr-10'>
					<div className='pt-5 pb-5 flex flex-row items-center justify-between'>
						<p className='text-title-lg font-bold'>Inventory Management</p>

						<div className='flex flex-row'>
							<ButtonSecondary
								text={'Read NFC'}
								url={'#!'}
								icon={'nfc'}
								styles={'mr-3'}
							/>

							<ButtonPrimary text={'Add group'} click={showGroupModal} />
						</div>
					</div>

					<GroupBox groupName={'Freezer'} styles={'mb-8'} />
					<GroupBox groupName={'Storage'} />
				</div>
			</div>
		</>
	);
};

export default Inventory;
