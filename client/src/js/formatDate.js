const formatDate = (d) => {
	if (d) {
		const date = new Date(d.split('T')[0].replace('-', '/'));
		const finalDate = `${
			date.getMonth() + 1
		}/${date.getDate()}/${date.getFullYear()}`;

		return finalDate;
	} else {
		return 'N/A';
	}
};

export default formatDate;
