import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const NFC = () => {
	return (
		<>
			<Sidebar />

			<div className='container w-full flex flex-col float-right ml-72'>
				<Header />

				<div className='pl-10 pr-10'>
					<div className='pt-5 pb-5 flex flex-row items-center justify-between'>
						<div className='flex flex-row  gap-2 items-center'>
							<p className='text-title-lg font-bold'>Processing NFC</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NFC;
