// Check the status
async function checkStatus(units, minimumAmount, expirationDate) {
	let today = new Date().toLocaleString('en-US', {
		timeZone: 'America/Vancouver',
	});

	const date = today.split(',')[0];
	const day = date.split('/')[1];
	const month = date.split('/')[0];
	const year = date.split('/')[2];

	today = new Date(`${year}-${month}-${day}`);

	expirationDate = new Date(expirationDate);

	if (today >= expirationDate) {
		return 'Expired';
	} else if (units === '0' || units === 0) {
		return 'Out of Stock';
	} else if (units <= minimumAmount) {
		return 'Low Stock';
	} else {
		return 'In Stock';
	}
}

module.exports = checkStatus;
