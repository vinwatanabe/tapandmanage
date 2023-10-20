const handleFormChange = (event, values, setValues) => {
	const auxValues = { ...values };
	auxValues[event.target.id] = event.target.value;
	setValues(auxValues);
};

export default handleFormChange;
