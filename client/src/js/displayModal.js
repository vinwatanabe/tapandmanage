import { registerNFC } from './nfcHandler';

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

// EDIT GROUP MODAL
const hideEditGroupModal = (event) => {
	event ? event.preventDefault() : hideModal('editGroupModal');
	hideModal('editGroupModal');
};

const showEditGroupModal = (event) => {
	event ? event.preventDefault() : showModal('editGroupModal');
	showModal('editGroupModal');
};

// ADD ITEM MODAL
const hideAddItemModal = () => {
	hideModal('addItemModal');
};

const showAddItemModal = () => {
	showModal('addItemModal');
};

// EDIT ITEM MODAL
const hideEditItemModal = (event) => {
	event ? event.preventDefault() : hideModal('editItemModal');
	hideModal('editItemModal');
};

const showEditItemModal = (event) => {
	event ? event.preventDefault() : showModal('editItemModal');
	showModal('editItemModal');
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

const saveRegisterNFCModal = (values, params) => {
	if (!('NDEFReader' in window)) {
		alert(
			'Web NFC is not available. Use Google Chrome on a supported mobile device.'
		);
	} else {
		registerNFC(values, params);
		hideModal('registerNFCModal');
		showModal('NFCModal');
	}
};

export {
	hideGroupModal,
	showGroupModal,
	hideEditGroupModal,
	showEditGroupModal,
	hideAddItemModal,
	showAddItemModal,
	hideEditItemModal,
	showEditItemModal,
	hideReadNFCModal,
	showReadNFCModal,
	hideRegisteringNFCModal,
	showRegisteringNFCModal,
	hideRegisterNFCModal,
	showRegisterNFCModal,
	saveRegisterNFCModal,
};
