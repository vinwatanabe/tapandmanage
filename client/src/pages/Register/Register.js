import React, { useState, useContext } from 'react';
import HeaderHome from '../../components/HeaderHome';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import Footer from '../../components/Footer';
import handleFormChange from '../../js/handleFormChange';
import { Context } from '../../context/AuthContext';

const Register = () => {
	const { handleRegister } = useContext(Context);

	const [values, setValues] = useState('');

	return (
		<>
			<div className='w-full flex flex-col mx-auto'>
				<HeaderHome />

				<div className='w-full flex flex-col mx-auto my-20'>
					<div className='flex flex-col bg-white w-11/12 sm:w-8/12 max-w-7xl mx-auto rounded-xl p-4 sm:p-8'>
						<p className='font-bold mb-4'>Registration</p>
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
										onChange={(e) => handleFormChange(e, values, setValues)}
									/>
								</div>
							</div>
						</form>

						<div className='flex flex-row gap-5'>
							<ButtonPrimary
								text={'Save'}
								url={'/inventory'}
								context={(e) => handleRegister(e, values)}
							/>
							<ButtonSecondary text={'Cancel'} url={'/'} />
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Register;
