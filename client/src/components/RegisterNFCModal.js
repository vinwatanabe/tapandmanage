import React from 'react';
import ButtonSecondary from '../components/ButtonSecondary';
import NFCIcon from '../images/assets/nfc-ico.svg';
import { hideRegisterNFCModal, saveRegisterNFCModal } from '../js/displayModal';
import ButtonPrimary from './ButtonPrimary';

const RegisterNFCModal = () => {
	return (
		<div
			id='registerNFCModal'
			className='modal fixed w-full h-full bg-darkBlue bg-opacity-50 z-50 justify-center items-center hidden'>
			<div className='flex flex-col p-8 bg-white basis-6/12 rounded-lg'>
				<div className='flex flex-col justify-center'>
					<div className='flex flex-col items-center'>
						<picture className='mb-3'>
							<img src={NFCIcon} alt='' />
						</picture>
					</div>

					<form className='mb-4 flex flex-col gap-5'>
						<div className='flex flex-col'>
							<div className='flex flex-col items-center'>
								<label htmlFor='nfc-action' className='font-bold'>
									Select NFC action:
								</label>
								<select
									id='nfc-action'
									name='nfc-action'
									className='border border-borderGrey px-6 py-2 rounded-full'>
									<option value='remove-product-quantity'>
										Remove product quantity
									</option>
									<option value='check-item-page'>Check item page</option>
								</select>
							</div>
						</div>
					</form>
				</div>

				<div className='flex flex-row justify-center gap-5'>
					<ButtonPrimary text={'Save'} click={saveRegisterNFCModal} />
					<ButtonSecondary text={'Cancel'} click={hideRegisterNFCModal} />
				</div>
			</div>
		</div>
	);
};

export default RegisterNFCModal;
