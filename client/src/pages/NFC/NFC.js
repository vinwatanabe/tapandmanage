import React, { useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Context } from '../../context/AuthContext';

const NFC = () => {
	const { handleLoadNFCPage } = useContext(Context);
	const location = useLocation();
	const urlParams = useParams().id;

	useEffect(() => {
		let nfcType = location.pathname.split('/')[2];
		handleLoadNFCPage(urlParams, nfcType);
	}, [handleLoadNFCPage, location, urlParams]);

	return (
		<>
			<Sidebar />

			<div className='container w-full flex flex-col sm:float-right sm:ml-72'>
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
