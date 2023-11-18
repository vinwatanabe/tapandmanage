const formatDateDash = (d) => {
	if (d) {
		const date = new Date(d.split('T')[0].replace('-', '/'));
		const day = () => {
			if (date.getDate().toString().length < 2) {
				return '0' + date.getDate().toString();
			} else {
				return date.getDate().toString();
			}
		};

		const month = () => {
			if ((date.getMonth() + 1).toString().length < 2) {
				return '0' + (date.getMonth() + 1).toString();
			} else {
				return (date.getMonth() + 1).toString();
			}
		};

		const finalDate = `${date.getFullYear()}-${month()}-${day()}`;

		return finalDate;
	} else {
		return '';
	}
};

export default formatDateDash;
