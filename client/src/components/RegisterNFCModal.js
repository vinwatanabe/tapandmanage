import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ButtonSecondary from '../components/ButtonSecondary';
import NFCIcon from '../images/assets/nfc-ico.svg';
import { hideRegisterNFCModal, saveRegisterNFCModal } from '../js/displayModal';
import handleFormChange from '../js/handleFormChange';
import ButtonPrimary from './ButtonPrimary';

const RegisterNFCModal = () => {
	const [values, setValues] = useState('');
	const itemParams = useParams().id;

	useEffect(() => {
		function setInitialData() {
			const dataSet = {
				nfcAction: 'nfc-remove-product',
			};

			setValues(dataSet);
		}

		setInitialData();
	}, []);

	const handleSaveNFC = () => {
		saveRegisterNFCModal(values, itemParams);
	};

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
								<label htmlFor='nfcAction' className='font-bold'>
									Select NFC action:
								</label>
								<select
									id='nfcAction'
									name='nfcAction'
									className='border border-borderGrey px-6 py-2 rounded-full'
									onChange={(e) => handleFormChange(e, values, setValues)}>
									<option value='nfc-remove-product'>
										Remove product quantity
									</option>
									<option value='nfc-add-product'>Add product quantity</option>
									<option value='nf-check-item'>Check item page</option>
								</select>
							</div>
						</div>
					</form>
				</div>

				<div className='flex flex-row justify-center gap-5'>
					<ButtonPrimary text={'Save'} click={handleSaveNFC} />
					<ButtonSecondary text={'Cancel'} click={hideRegisterNFCModal} />
				</div>
			</div>
		</div>
	);
};

export default RegisterNFCModal;
