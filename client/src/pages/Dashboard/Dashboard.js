import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ItemStatus from '../../components/ItemStatus';
// import Pagination from '../../components/Pagination';
import formatDate from '../../js/formatDate';
import axios from 'axios';

const Dashboard = () => {
	const [expiresSoon, setExpiresSoon] = useState([]);
	const [expired, setExpired] = useState([]);
	const [lowStock, setLowStock] = useState([]);
	const [outOfStock, setOutOfStock] = useState([]);
	const [expiresSoonPagination, SetExpiresSoonPagination] = useState([]);
	const [expiredPagination, SetExpiredPagination] = useState([]);
	const [lowStockPagination, SetLowStockPagination] = useState([]);
	const [outOfStockPagination, SetOutOfStockPagination] = useState([]);
	const [page, setPage] = useState(0);
	const index = page;

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

	// Pagination
	useEffect(() => {
		const expiresSoonItems = createPagination(expiresSoon);
		const expiredItems = createPagination(expired);
		const lowStockItems = createPagination(lowStock);
		const outOfStockItems = createPagination(outOfStock);

		SetExpiresSoonPagination(expiresSoonItems);
		SetExpiredPagination(expiredItems);
		SetLowStockPagination(lowStockItems);
		SetOutOfStockPagination(outOfStockItems);
	}, [expired, lowStock, outOfStock, expiresSoon]);

	function createPagination(itemList) {
		let list = [];

		for (let j = 1; j <= itemList.length; j += 5) {
			let itemPage = [];
			itemPage.push(itemList[j - 1]);

			for (let i = j; i % 5 !== 0 && i < itemList.length; i++) {
				itemPage.push(itemList[i]);
			}

			list.push(itemPage);
		}

		return list;
	}

	let genNumber = (pageNumber) => {
		let pageNumbers = [];

		for (let i = 1; i <= pageNumber; i++) {
			const isActive = i === index + 1;

			pageNumbers.push(
				<p
					key={i}
					className={`${
						isActive
							? 'text-white bg-lightBlue hover:bg-lightBlueHover'
							: 'text-detailGrey bg-white hover:bg-lightGrey cursor-pointer'
					} px-3 py-1 rounded-lg pagination`}
					onClick={() => setPage(i - 1)}>
					{i}
				</p>
			);
		}

		return pageNumbers;
	};

	let paginationFunc = (pageNumber) => {
		return (
			<div className='flex flex-row justify-center mt-8 items-center gap-1'>
				{genNumber(pageNumber)}
			</div>
		);
	};

	return (
		<>
			<Sidebar />

			<div className='container mb-10 w-full flex flex-col sm:float-right sm:ml-72 mx-auto'>
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

						{expiresSoonPagination[page] &&
							expiresSoonPagination[page].map((item, index) => {
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

						{expiresSoon.length > 5
							? paginationFunc(expiresSoonPagination.length)
							: ''}
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

						{expiredPagination[page] &&
							expiredPagination[page].map((item, index) => {
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

						{expired.length > 5 ? paginationFunc(expiredPagination.length) : ''}
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

						{lowStockPagination[page] &&
							lowStockPagination[page].map((item, index) => {
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

						{lowStock.length > 5
							? paginationFunc(lowStockPagination.length)
							: ''}
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

						{outOfStockPagination[page] &&
							outOfStockPagination[page].map((item, index) => {
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

						{outOfStock.length > 5
							? paginationFunc(outOfStockPagination.length)
							: ''}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
