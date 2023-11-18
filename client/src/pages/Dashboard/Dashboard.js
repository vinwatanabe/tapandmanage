import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ItemStatus from '../../components/ItemStatus';
import Pagination from '../../components/Pagination';
import formatDate from '../../js/formatDate';
import axios from 'axios';

const Dashboard = () => {
	const [expiresSoon, setExpiresSoon] = useState([]);
	const [expired, setExpired] = useState([]);
	const [lowStock, setLowStock] = useState([]);
	const [outOfStock, setOutOfStock] = useState([]);

	useEffect(() => {
		async function getDashboard() {
			const urlHandler = process.env.REACT_APP_URL_HANDLER;
			const url = `${urlHandler}/item/dashboard/items`;
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
					const allItems = resp.data;
					setExpiresSoon(allItems.expiresSoon);
					setExpired(allItems.expired);
					setLowStock(allItems.lowStock);
					setOutOfStock(allItems.outOfStock);
				})
				.catch((error) => console.log(error));
		}

		getDashboard();
	}, []);

	return (
		<>
			<Sidebar />

			<div className='container w-full flex flex-col sm:float-right sm:ml-72 mx-auto'>
				<Header />

				<div className='grid grid-cols-2 px-5 sm:px-10 gap-5'>
					<div className='col-span-2 pt-5 sm:flex-row items-center justify-between text-center sm:text-left'>
						<p className='text-title-lg font-bold'>Dashboard</p>
					</div>

					<div className='bg-white p-5 sm:p-8 rounded-lg basis-1/2 col-span-2 sm:col-span-1'>
						<div className='flex flex-row items-center justify-between mb-5'>
							<div className='flex flex-row gap-x-2'>
								<p className='font-bold'>Expiring next 7 days</p>
							</div>
						</div>

						<div>
							<hr className='text-borderGrey' />
							<div className='grid grid-cols-6 text-center'>
								<p className='font-bold text-mediumGrey my-1 col-span-2 text-left inline'>
									Product
								</p>
								<p className='font-bold text-mediumGrey my-1 col-span-2 inline'>
									Quantity
								</p>
								<p className='font-bold text-mediumGrey my-1 col-span-2 inline'>
									Expires
								</p>
							</div>
							<hr className='text-borderGrey' />
						</div>

						{expiresSoon.map((item, index) => {
							return (
								<div key={index}>
									<Link to={`/item-details/${item._id}`}>
										<div className='grid grid-cols-6 text-center my-2 text-text-sm items-center hover:text-lightBlue'>
											<p className='my-1 col-span-2 text-left inline'>
												{item.itemName}
											</p>

											<p className='my-1 col-span-2 inline'>{`${item.units} ${item.measure}`}</p>

											<p className='my-1 col-span-2 inline'>
												{formatDate(item.expirationDate)}
											</p>
										</div>
									</Link>

									<hr className='text-borderGrey' />
								</div>
							);
						})}

						{expiresSoon.length > 5 ? <Pagination /> : ''}
					</div>

					<div className='bg-white p-5 sm:p-8 rounded-lg basis-1/2 col-span-2 sm:col-span-1'>
						<div className='flex flex-row items-center justify-between mb-5'>
							<div className='flex flex-row gap-x-2'>
								<p className='font-bold'>Expired products</p>
							</div>
						</div>

						<div>
							<hr className='text-borderGrey' />
							<div className='grid grid-cols-6 text-center'>
								<p className='font-bold text-mediumGrey my-1 col-span-2 text-left inline'>
									Product
								</p>
								<p className='font-bold text-mediumGrey my-1 col-span-2 inline'>
									Status
								</p>
								<p className='font-bold text-mediumGrey my-1 col-span-2 inline'>
									Expires
								</p>
							</div>
							<hr className='text-borderGrey' />
						</div>

						{expired.map((item, index) => {
							return (
								<div key={index}>
									<Link to={`/item-details/${item._id}`}>
										<div className='grid grid-cols-6 text-center my-2 text-text-sm items-center hover:text-lightBlue'>
											<p className='my-1 col-span-2 text-left inline'>
												{item.itemName}
											</p>

											<div className='my-1 col-span-2 inline'>
												<ItemStatus status={item.status} />
											</div>

											<p className='my-1 col-span-2 inline'>
												{formatDate(item.expirationDate)}
											</p>
										</div>
									</Link>

									<hr className='text-borderGrey' />
								</div>
							);
						})}

						{expired.length > 5 ? <Pagination /> : ''}
					</div>

					<div className='bg-white p-5 sm:p-8 rounded-lg basis-1/2 col-span-2 sm:col-span-1'>
						<div className='flex flex-row items-center justify-between mb-5'>
							<div className='flex flex-row gap-x-2'>
								<p className='font-bold'>Low Stock</p>
							</div>
						</div>

						<div>
							<hr className='text-borderGrey' />
							<div className='grid grid-cols-6 text-center'>
								<p className='font-bold text-mediumGrey my-1 col-span-2 text-left inline'>
									Product
								</p>
								<p className='font-bold text-mediumGrey my-1 col-span-2 inline'>
									Quantity
								</p>
								<p className='font-bold text-mediumGrey my-1 col-span-2 inline'>
									Status
								</p>
							</div>
							<hr className='text-borderGrey' />
						</div>

						{lowStock.map((item, index) => {
							return (
								<div key={index}>
									<Link to={`/item-details/#!`}>
										<div className='grid grid-cols-6 text-center my-2 text-text-sm items-center hover:text-lightBlue'>
											<p className='my-1 col-span-2 text-left inline'>
												{item.itemName}
											</p>

											<p className='my-1 col-span-2 inline'>{`${item.units} ${item.measure}`}</p>

											<div className='my-1 col-span-2 inline'>
												<ItemStatus status={item.status} />
											</div>
										</div>
									</Link>

									<hr className='text-borderGrey' />
								</div>
							);
						})}

						{lowStock.length > 5 ? <Pagination /> : ''}
					</div>

					<div className='bg-white p-5 sm:p-8 rounded-lg basis-1/2 col-span-2 sm:col-span-1'>
						<div className='flex flex-row items-center justify-between mb-5'>
							<div className='flex flex-row gap-x-2'>
								<p className='font-bold'>Out of Stock</p>
							</div>
						</div>

						<div>
							<hr className='text-borderGrey' />
							<div className='grid grid-cols-6 text-center'>
								<p className='font-bold text-mediumGrey my-1 col-span-2 text-left inline'>
									Product
								</p>
								<p className='font-bold text-mediumGrey my-1 col-span-2 inline'>
									Quantity
								</p>
								<p className='font-bold text-mediumGrey my-1 col-span-2 inline'>
									Status
								</p>
							</div>
							<hr className='text-borderGrey' />
						</div>

						{outOfStock.map((item, index) => {
							return (
								<div key={index}>
									<Link to={`/item-details/#!`}>
										<div className='grid grid-cols-6 text-center my-2 text-text-sm items-center hover:text-lightBlue'>
											<p className='my-1 col-span-2 text-left inline'>
												{item.itemName}
											</p>

											<p className='my-1 col-span-2 inline'>{`${item.units} ${item.measure}`}</p>

											<div className='my-1 col-span-2 inline'>
												<ItemStatus status={item.status} />
											</div>
										</div>
									</Link>

									<hr className='text-borderGrey' />
								</div>
							);
						})}

						{outOfStock.length > 5 ? <Pagination /> : ''}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
