import React from 'react';
import HeaderHome from '../../components/HeaderHome';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import Footer from '../../components/Footer';

const Register = () => {
	return (
		<>
			<div className='w-full flex flex-col mx-auto'>
				<HeaderHome />

				<div className='w-full flex flex-col mx-auto my-20'>
					<div className='flex flex-col bg-white w-8/12 max-w-7xl mx-auto rounded-xl p-8'>
						<p className='font-bold mb-4'>Registration</p>
						<hr className='text-borderGrey' />

						<form className='flex flex-col gap-5 my-4'>
							<div className='flex flex-row gap-5 justify-between'>
								<div className='flex flex-col gap-2 w-full'>
									<label htmlFor='first-name'>First name:</label>
									<input
										type='text'
										id='first-name'
										name='first-name'
										placeholder='First name'
										className='border border-borderGrey px-6 py-2 rounded-full w-full'
									/>
								</div>

								<div className='flex flex-col gap-2 w-full'>
									<label htmlFor='last-name'>Last name:</label>
									<input
										type='text'
										id='last-name'
										name='last-name'
										placeholder='Last name'
										className='border border-borderGrey px-6 py-2 rounded-full w-full'
									/>
								</div>
							</div>

							<div className='flex flex-row gap-5 justify-between'>
								<div className='flex flex-col gap-2 w-full'>
									<label htmlFor='company'>Company:</label>
									<input
										type='text'
										id='company'
										name='company'
										placeholder='Company'
										className='border border-borderGrey px-6 py-2 rounded-full w-full'
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
									/>
								</div>
							</div>

							<div className='flex flex-row gap-5 justify-between'>
								<div className='flex flex-col gap-2 w-full'>
									<label htmlFor='email'>E-mail:</label>
									<input
										type='text'
										id='email'
										name='email'
										placeholder='E-mail'
										className='border border-borderGrey px-6 py-2 rounded-full w-full'
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
									/>
								</div>
							</div>
						</form>

						<div className='flex flex-row gap-5'>
							<ButtonPrimary text={'Save'} url={'/inventory'} />
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
