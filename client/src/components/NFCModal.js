import React from 'react';
import ButtonSecondary from './ButtonSecondary';
import FrequencyImage from '../images/assets/frequency.svg';
import { hideReadNFCModal, hideRegisteringNFCModal } from '../js/displayModal';

const NFCModal = ({ NFCType }) => {
	return (
		<div
			id='NFCModal'
			className='modal fixed w-full h-full bg-darkBlue bg-opacity-50 z-50 justify-center items-center hidden'>
			<div className='flex flex-col p-8 bg-white basis-6/12 rounded-lg'>
				<div className='flex justify-center mb-8'>
					<div className='flex flex-col items-center'>
						<picture className='mb-5'>
							<img src={FrequencyImage} alt='' />
						</picture>
						{NFCType === 'read' ? (
							<p className='font-bold'>Reading NFC</p>
						) : (
							<p className='font-bold'>Registering NFC</p>
						)}
						<p className='text-sm text-mediumGrey'>Loading...</p>
					</div>
				</div>

				<div className='flex flex-row justify-center'>
					{NFCType === 'read' ? (
						<ButtonSecondary text={'Cancel'} click={hideReadNFCModal} />
					) : (
						<ButtonSecondary text={'Cancel'} click={hideRegisteringNFCModal} />
					)}
				</div>
			</div>
		</div>
	);
};

export default NFCModal;
