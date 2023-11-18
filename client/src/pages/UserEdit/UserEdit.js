import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import handleFormChange from '../../js/handleFormChange';
import { Context } from '../../context/AuthContext';

const UserEdit = () => {
	const [values, setValues] = useState('');
	const [userData, setUserData] = useState([]);
	const [userId, setUserId] = useState('');
	const { handleUserEdit } = useContext(Context);

	useEffect(() => {
		async function getUser() {
			const urlHandler = process.env.REACT_APP_URL_HANDLER;
			const url = `${urlHandler}/auth/company`;
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
					setUserData(resp.data);
				})
				.catch((error) => console.log(error));
		}

		getUser();
	}, []);

	useEffect(() => {
		const user = {
			firstName: userData.firstName,
			lastName: userData.lastName,
			company: userData.company,
			position: userData.position,
			email: userData.email,
			groups: userData.groups,
		};

		setValues(user);
		setUserId(userData._id);
	}, [userData]);

	return (
		<>
			<Sidebar />
			<div className='container w-full flex flex-col sm:float-right sm:ml-72 mx-auto'>
				<Header />

				<div className='flex flex-col bg-white w-11/12 max-w-7xl mx-auto rounded-xl p-4 sm:p-8 my-5 sm:my-10'>
					<p className='font-bold mb-4'>User information</p>
					<hr className='text-borderGrey' />

					<form className='flex flex-col gap-5 my-4'>
						<div className='flex flex-row gap-5 justify-between flex-wrap sm:flex-nowrap'>
							<div className='flex flex-col gap-2 w-full'>
								<label htmlFor='firstName'>First name:</label>
								<input
									type='text'
									id='firstName'
									name='firstName'
									placeholder='First name'
									className='border border-borderGrey px-6 py-2 rounded-full w-full'
									value={values.firstName || ''}
									onChange={(e) => handleFormChange(e, values, setValues)}
								/>
							</div>

							<div className='flex flex-col gap-2 w-full'>
								<label htmlFor='lastName'>Last name:</label>
								<input
									type='text'
									id='lastName'
									name='lastName'
									placeholder='Last name'
									className='border border-borderGrey px-6 py-2 rounded-full w-full'
									value={values.lastName || ''}
									onChange={(e) => handleFormChange(e, values, setValues)}
								/>
							</div>
						</div>

						<div className='flex flex-row gap-5 justify-between flex-wrap sm:flex-nowrap'>
							<div className='flex flex-col gap-2 w-full'>
								<label htmlFor='company'>Company:</label>
								<input
									type='text'
									id='company'
									name='company'
									placeholder='Company'
									className='border border-borderGrey px-6 py-2 rounded-full w-full'
									value={values.company || ''}
									onChange={(e) => handleFormChange(e, values, setValues)}
								/>
							</div>

							<div className='flex flex-col gap-2 w-full'>
								<label htmlFor='position'>Position:</label>
								<input
									type='text'
									id='position'
									name='position'
									placeholder='Position'
									className='border border-borderGrey px-6 py-2 rounded-full w-full'
									value={values.position || ''}
									onChange={(e) => handleFormChange(e, values, setValues)}
								/>
							</div>
						</div>

						<div className='flex flex-row gap-5 justify-between flex-wrap sm:flex-nowrap'>
							<div className='flex flex-col gap-2 w-full'>
								<label htmlFor='email'>E-mail:</label>
								<input
									type='email'
									id='email'
									name='email'
									placeholder='E-mail'
									className='border border-borderGrey px-6 py-2 rounded-full w-full'
									value={values.email || ''}
									onChange={(e) => handleFormChange(e, values, setValues)}
								/>
							</div>

							<div className='flex flex-col gap-2 w-full'>
								<label htmlFor='password'>Password:</label>
								<input
									type='password'
									id='password'
									name='password'
									placeholder='Password'
									className='border border-borderGrey px-6 py-2 rounded-full w-full'
									value={values.password || ''}
									onChange={(e) => handleFormChange(e, values, setValues)}
								/>
							</div>
						</div>
					</form>

					<div className='flex flex-row gap-5'>
						<ButtonPrimary
							text={'Save'}
							url={'/inventory'}
							context={(e) => handleUserEdit(e, values, userId)}
						/>
						<ButtonSecondary text={'Cancel'} url={'/dashboard'} />
					</div>
				</div>
			</div>
		</>
	);
};

export default UserEdit;
