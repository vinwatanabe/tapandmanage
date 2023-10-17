import React from 'react';
import ButtonSecondary from '../components/ButtonSecondary';
import FrequencyImage from '../images/assets/frequency.svg';
import { hideReadNFCModal } from '../js/displayModal';

const ReadNFCModal = () => {
	return (
		<div
			id='readNFCModal'
			className='modal fixed w-full h-full bg-darkBlue bg-opacity-50 z-50 justify-center items-center hidden'>
			<div className='flex flex-col p-8 bg-white basis-6/12 rounded-lg'>
				<div className='flex justify-center mb-8'>
					<div className='flex flex-col items-center'>
						<picture className='mb-5'>
							<img src={FrequencyImage} alt='' />
						</picture>
						<p className='font-bold'>Reading NFC</p>
						<p className='text-sm text-mediumGrey'>Loading...</p>
					</div>
				</div>

				<div className='flex flex-row justify-center'>
					<ButtonSecondary text={'Cancel'} click={hideReadNFCModal} />
				</div>
			</div>
		</div>
	);
};

export default ReadNFCModal;
