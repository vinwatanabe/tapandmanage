import React, { useState, useContext } from 'react';
import HeaderHome from '../../components/HeaderHome';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import Footer from '../../components/Footer';
import handleFormChange from '../../js/handleFormChange';
import { Context } from '../../context/AuthContext';

const Login = () => {
	const { handleLogin } = useContext(Context);

	const [values, setValues] = useState('');

	return (
		<>
			<div className='w-full flex flex-col mx-auto'>
				<HeaderHome />

				<div className='w-full flex flex-col mx-auto my-20'>
					<div className='flex flex-col bg-white w-4/12 max-w-7xl mx-auto rounded-xl p-8'>
						<p className='font-bold mb-4'>Login</p>
						<hr className='text-borderGrey' />

						<form className='flex flex-col gap-5 my-4'>
							<div className='flex flex-col gap-2 w-full'>
								<label htmlFor='email'>E-mail:</label>
								<input
									type='text'
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
						</form>

						<div className='flex flex-row gap-5'>
							<ButtonPrimary
								text={'Save'}
								url={'/inventory'}
								context={(e) => handleLogin(e, values)}
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

export default Login;
