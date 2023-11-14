import React, { useState, useEffect, useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import GroupBox from '../../components/GroupBox';
import AddGroupModal from '../../components/AddGroupModal';
import AddItemModal from '../../components/AddItemModal';
import EditGroupModal from '../../components/EditGroupModal';
import NFCModal from '../../components/NFCModal';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import { showGroupModal, showReadNFCModal } from '../../js/displayModal';
import axios from 'axios';
import { Context } from '../../context/AuthContext';

const Inventory = () => {
	const { editGroupInfo } = useContext(Context);
	const [groups, setGroups] = useState([]);

	useEffect(() => {
		async function getGroups() {
			const urlHandler = process.env.REACT_APP_URL_HANDLER;
			const url = `${urlHandler}/group/all`;
			const token = localStorage.getItem('token');
			const config = {
				headers: {
					'Content-Type': 'application/json',
					'x-auth-token': `${JSON.parse(token)}`,
				},
			};

			await axios
				.get(url, config)
				.then((resp) => {
					const allGroups = resp.data;
					setGroups(allGroups);
				})
				.catch((error) => console.log(error));
		}

		getGroups();
	}, []);

	return (
		<>
			<AddGroupModal />
			<AddItemModal groups={groups} />
			<EditGroupModal groupInfo={editGroupInfo} />
			<NFCModal NFCType={'read'} />

			<Sidebar />
			<div className='container w-full flex flex-col sm:float-right sm:ml-72 mx-auto'>
				<Header />

				<div className='px-5 sm:px-10'>
					<div className='pt-5 pb-5 flex flex-col sm:flex-row items-center justify-between'>
						<p className='text-title-lg font-bold mb-4 sm:mb-0'>
							Inventory Management
						</p>

						<div className='flex flex-row'>
							<ButtonSecondary
								text={'Read NFC'}
								icon={'nfc'}
								styles={'mr-3'}
								click={showReadNFCModal}
							/>

							<ButtonPrimary text={'Add group'} click={showGroupModal} />
						</div>
					</div>

					{groups.map((group, index) => {
						return (
							<GroupBox
								groupId={group._id}
								groupName={group.groupName}
								items={group.items}
								styles={'mb-8'}
								key={index}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Inventory;
