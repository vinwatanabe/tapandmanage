import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ItemDetailsBox from '../../components/ItemDetailsBox';
import RegisterNFCModal from '../../components/RegisterNFCModal';
import NFCModal from '../../components/NFCModal';
import EditItemModal from '../../components/EditItemModal';
import { showEditItemModal } from '../../js/displayModal';
import axios from 'axios';

const ItemDetails = () => {
	const params = useParams().id;
	const [item, setItem] = useState({});
	const [groupName, setGroupName] = useState('');

	useEffect(() => {
		async function getItem() {
			const urlHandler = process.env.REACT_APP_URL_HANDLER;
			const url = `${urlHandler}/item/${params}`;
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
					const itemResponse = resp.data;
					setItem(itemResponse[0]);
					setGroupName(itemResponse[0].group.groupName);
				})
				.catch((error) => console.log(error));
		}

		getItem();
	}, [params]);

	return (
		<>
			<EditItemModal groupName={groupName} itemInfo={item} />
			<RegisterNFCModal />
			<NFCModal NFCType={'register'} />

			<Sidebar />
			<div className='container w-full flex flex-col float-right ml-72'>
				<Header />

				<div className='pl-10 pr-10'>
					<div className='pt-5 pb-5 flex flex-row items-center justify-between'>
						<div className='flex flex-row  gap-2 items-center'>
							<p className='text-title-lg font-bold'>Item details</p>

							<Link
								onClick={(e) => showEditItemModal(e)}
								className='flex items-center'>
								<span className='material-symbols-outlined text-detailGrey hover:text-mediumGrey'>
									edit_square
								</span>
							</Link>
						</div>
					</div>

					<ItemDetailsBox item={item} />
				</div>
			</div>
		</>
	);
};

export default ItemDetails;
