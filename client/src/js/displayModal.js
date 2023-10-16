const hideModal = (id) => {
	document.getElementById(id).classList.add('hidden');
	document.getElementById(id).classList.remove('flex');
};

const showModal = (id) => {
	document.getElementById(id).classList.remove('hidden');
	document.getElementById(id).classList.add('flex');
};

const hideGroupModal = () => {
	hideModal('addGroupModal');
};

const showGroupModal = () => {
	showModal('addGroupModal');
};

export { hideGroupModal, showGroupModal };
