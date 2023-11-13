// Register NFC
async function registerNFC(values, params) {
	if (values.nfcAction === 'nfc-remove-product') {
		try {
			const ndef = new window.NDEFReader();
			await ndef.write({
				records: [{ recordType: 'url', data: 'https://www.amazon.ca/' }],
			});

			alert('Tag saved!');
		} catch (error) {
			alert('Error: ' + error);
		}
	}
}

export { registerNFC };
