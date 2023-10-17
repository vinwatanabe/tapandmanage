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
	hideModal('NFCModal');
};

const showReadNFCModal = () => {
	showModal('NFCModal');
};

// REGISTERING NFC
const hideRegisteringNFCModal = () => {
	hideModal('NFCModal');
};

const showRegisteringNFCModal = () => {
	showModal('NFCModal');
};

// REGISTER NFC
const hideRegisterNFCModal = () => {
	hideModal('registerNFCModal');
};

const showRegisterNFCModal = () => {
	showModal('registerNFCModal');
};

const saveRegisterNFCModal = () => {
	hideModal('registerNFCModal');
	showModal('NFCModal');
};

export {
	hideGroupModal,
	showGroupModal,
	hideAddItemModal,
	showAddItemModal,
	hideReadNFCModal,
	showReadNFCModal,
	hideRegisteringNFCModal,
	showRegisteringNFCModal,
	hideRegisterNFCModal,
	showRegisterNFCModal,
	saveRegisterNFCModal,
};
