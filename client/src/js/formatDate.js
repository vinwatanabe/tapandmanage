const formatDate = (d) => {
	if (d) {
		// const date = new Date(d.split('T')[0].replace('-', '/'));
		const day = d.split('T')[0].split('-')[2];
		const month = d.split('T')[0].split('-')[1];
		const year = d.split('T')[0].split('-')[0];

		const date = new Date(`${year}, ${month}, ${day}`);

		const finalDate = `${
			date.getMonth() + 1
		}/${date.getDate()}/${date.getFullYear()}`;

		return finalDate;
	} else {
		return 'N/A';
	}
};

export default formatDate;
