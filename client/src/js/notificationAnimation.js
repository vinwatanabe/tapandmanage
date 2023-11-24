const toggleNotification = () => {
	document.querySelector('.notification').classList.toggle('hidden');
};

const toggleCheckBox = () => {
	document
		.querySelector('.checkBoxCheckedNotification')
		.classList.toggle('hidden');
	document
		.querySelector('.checkBoxUncheckedNotification')
		.classList.toggle('hidden');
};

export { toggleNotification, toggleCheckBox };
