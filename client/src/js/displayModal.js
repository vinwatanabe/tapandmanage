// Modal manager functions
const hideModal = (id) => {
	document.getElementById(id).classList.add('hidden');
	document.getElementById(id).classList.remove('flex');
};

const showModal = (id) => {
	document.getElementById(id).classList.remove('hidden');
	document.getElementById(id).classList.add('flex');
};

// Specific components functions
// GROUP MODAL
const hideGroupModal = () => {
	hideModal('addGroupModal');
};

const showGroupModal = () => {
	showModal('addGroupModal');
};

// ADD ITEM MODAL
const hideAddItemModal = () => {
	hideModal('addItemModal');
};

const showAddItemModal = () => {
	showModal('addItemModal');
};

// READ NFC
const hideReadNFCModal = () => {
	hideModal('readNFCModal');
};

const showReadNFCModal = () => {
	showModal('readNFCModal');
};

export {
	hideGroupModal,
	showGroupModal,
	hideAddItemModal,
	showAddItemModal,
	hideReadNFCModal,
	showReadNFCModal,
};
