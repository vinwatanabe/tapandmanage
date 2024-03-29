import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
	hideGroupModal,
	hideEditItemModal,
	hideAddItemModal,
	hideEditGroupModal,
	hideReadNFCModal,
	showReadNFCModal,
} from '../js/displayModal';
import {
	saveRegisterNFCModal,
	hideRegisteringNFCModal,
} from '../js/displayModal';

const Context = createContext();

function AuthContext({ children }) {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const [userDataLoaded, setUserDataLoaded] = useState(false);
	const [notificationsRead, setNotificationsRead] = useState([]);
	let navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			axios.defaults.headers.post['Content-Type'] = 'application/json';
			axios.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
			setAuthenticated(true);
		}

		setLoading(false);
	}, []);

	// Handle registration
	async function handleRegister(event, values) {
		event.preventDefault();

		const url = `${process.env.REACT_APP_URL_HANDLER}/company/register`;
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		let token;
		setLoading(true);

		await axios
			.post(url, values, config)
			.then((resp) => {
				token = resp.data.token;

				localStorage.setItem('token', JSON.stringify(token));
				axios.defaults.headers.Authorization = `Bearer ${token}`;
				setAuthenticated(true);
				setLoading(false);

				return navigate('/dashboard');
			})
			.catch((error) => {
				setAuthenticated(false);
				localStorage.removeItem('token');
				axios.defaults.Authorization = undefined;
				removeUserData();
				setLoading(false);

				return navigate('/');
			});

		await getUserData(token);
	}

	// Handle Login
	async function handleLogin(event, values) {
		event.preventDefault();

		const url = `${process.env.REACT_APP_URL_HANDLER}/auth/login`;
		let config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		let token;
		setLoading(true);

		// Work on login
		await axios
			.post(url, values, config)
			.then((resp) => {
				token = resp.data.token;

				localStorage.setItem('token', JSON.stringify(token));
				axios.defaults.headers.Authorization = `Bearer ${token}`;
				setAuthenticated(true);
				setLoading(false);
			})
			.catch((error) => {
				setAuthenticated(false);
				localStorage.removeItem('token');
				axios.defaults.headers.Authorization = undefined;
				removeUserData();
				setLoading(false);

				return navigate('/');
			});

		await getUserData(token);

		// Update all data in DB first to check if all items has the correct status
		config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': token,
			},
		};

		const updateUrl = `${process.env.REACT_APP_URL_HANDLER}/item/all`;
		await axios
			.get(updateUrl, config)
			.then((response) => {
				return navigate('/dashboard');
			})
			.catch((error) => {
				return navigate('/dashboard');
			});
	}

	// Get user data
	async function getUserData(token) {
		const url = `${process.env.REACT_APP_URL_HANDLER}/auth/company`;

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': token,
			},
		};

		await axios
			.get(url, config)
			.then((resp) => {
				const data = resp.data;

				localStorage.setItem('firstName', data.firstName);
				localStorage.setItem('lastName', data.lastName);
				localStorage.setItem('company', data.company);
				localStorage.setItem('id', data._id);

				setUserDataLoaded(true);
			})
			.catch((error) => {
				console.log('Error finding user by token');
			});
	}

	// Remove user data
	async function removeUserData() {
		localStorage.removeItem('firstName');
		localStorage.removeItem('lastName');
		localStorage.removeItem('company');
	}

	// Handle Logout
	async function handleLogout(event) {
		event.preventDefault();

		setAuthenticated(false);
		localStorage.removeItem('token');
		axios.defaults.headers.Authorization = undefined;
		removeUserData();

		return navigate('/');
	}

	// Handle AddGroup
	async function handleAddGroup(event, values) {
		event.preventDefault();

		const url = `${process.env.REACT_APP_URL_HANDLER}/group/new`;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': `${JSON.parse(token)}`,
			},
		};

		await axios
			.post(url, values, config)
			.then(() => {
				hideGroupModal();
				return navigate(0);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// Handle EditGroup
	const [editGroupInfo, setEditGroupInfo] = useState({});

	async function handleEditGroup(event, values, groupId) {
		event.preventDefault();

		const url = `${process.env.REACT_APP_URL_HANDLER}/group/edit/${groupId}`;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': `${JSON.parse(token)}`,
			},
		};

		await axios
			.put(url, values, config)
			.then(() => {
				hideEditGroupModal();
				return navigate(0);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// Handle DeleteGroup
	async function handleDeleteGroup(event, groupId) {
		event.preventDefault();

		const url = `${process.env.REACT_APP_URL_HANDLER}/group/delete/${groupId}`;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': `${JSON.parse(token)}`,
			},
		};

		await axios
			.delete(url, config)
			.then(() => {
				hideEditGroupModal();
				return navigate(0);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// Handle AddItem
	async function handleAddItem(event, values) {
		event.preventDefault();

		const url = `${process.env.REACT_APP_URL_HANDLER}/item/new`;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': `${JSON.parse(token)}`,
			},
		};

		await axios
			.post(url, values, config)
			.then(() => {
				hideAddItemModal();
				return navigate(0);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// Handle EditItem
	async function handleEditItem(event, values, itemId) {
		event.preventDefault();

		const url = `${process.env.REACT_APP_URL_HANDLER}/item/edit/${itemId}`;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': `${JSON.parse(token)}`,
			},
		};

		await axios
			.put(url, values, config)
			.then(() => {
				hideEditItemModal();
				return navigate(0);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// Handle DeleteItem
	async function handleDeleteItem(event, itemId) {
		event.preventDefault();

		const url = `${process.env.REACT_APP_URL_HANDLER}/item/delete/${itemId}`;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': `${JSON.parse(token)}`,
			},
		};

		await axios
			.delete(url, config)
			.then(() => {
				hideEditItemModal();
				return navigate('/inventory');
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// Handle UserEdit
	async function handleUserEdit(event, values, userId) {
		event.preventDefault();

		const url = `${process.env.REACT_APP_URL_HANDLER}/company/edit/${userId}`;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': `${JSON.parse(token)}`,
			},
		};

		await axios
			.put(url, values, config)
			.then((response) => {
				localStorage.removeItem('firstName');
				localStorage.removeItem('lastName');
				localStorage.removeItem('company');

				localStorage.setItem('firstName', response.data.firstName);
				localStorage.setItem('lastName', response.data.lastName);
				localStorage.setItem('company', response.data.company);
				return navigate(0);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// Handle Register NFC
	async function registerNFC(event, values, params) {
		event.preventDefault();

		let nfcActionType = '';

		if (values.nfcAction === 'nfc-remove-product') {
			nfcActionType = 'remove';
		} else if (values.nfcAction === 'nfc-add-product') {
			nfcActionType = 'add';
		} else if (values.nfcAction === 'nf-check-item') {
			nfcActionType = 'check';
		}

		const url = `${process.env.REACT_APP_FRONTEND_URL_HANDLER}/nfc/${nfcActionType}/${params}`;

		if (!('NDEFReader' in window)) {
			alert(
				'Web NFC is not available. Use Google Chrome on a supported mobile device.'
			);
		} else {
			try {
				saveRegisterNFCModal();

				const ndef = new window.NDEFReader();
				await ndef.write({
					records: [{ recordType: 'url', data: `${url}` }],
				});

				hideRegisteringNFCModal();

				alert('Item saved!');
			} catch (error) {
				alert('Error: ' + error);
			}
		}
	}

	// Handle loadNFCPage
	async function handleLoadNFCPage(pageId, NFCType) {
		let url = '';
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': `${JSON.parse(token)}`,
			},
		};

		if (NFCType === 'remove') {
			url = `${process.env.REACT_APP_URL_HANDLER}/nfc/remove/${pageId}`;

			await axios
				.put(url, {}, config)
				.then(() => {
					alert('Item removed from inventory');
					return navigate(`/item-details/${pageId}`);
				})
				.catch((error) => {
					console.log(error);
				});
		} else if (NFCType === 'add') {
			url = `${process.env.REACT_APP_URL_HANDLER}/nfc/add/${pageId}`;

			await axios
				.put(url, {}, config)
				.then(() => {
					alert('Item added to inventory');
					return navigate(`/item-details/${pageId}`);
				})
				.catch((error) => {
					console.log(error);
				});
		} else if (NFCType === 'check') {
			return navigate(`/item-details/${pageId}`);
		} else {
			return navigate(`/item-details/error`);
		}
	}

	// Handle ReadNFC
	async function handleReadNFC() {
		if (!('NDEFReader' in window)) {
			alert(
				'Web NFC is not available. Use Google Chrome on a supported mobile device.'
			);
		} else {
			try {
				showReadNFCModal();

				const ndef = new window.NDEFReader();

				await ndef
					.scan()
					.then(() => {
						ndef.onreadingerror = (event) => {
							hideReadNFCModal();
							console.log('Error reading NFC tag!');
						};

						ndef.onreading = (event) => {
							hideReadNFCModal();
							alert('NFC Read!');
						};
					})
					.catch((error) => {
						console.log(`Error: Scan failed to start: ${error}`);
					});
			} catch (error) {
				alert('Error: ' + error);
			}
		}
	}

	return (
		<Context.Provider
			value={{
				authenticated,
				setAuthenticated,
				loading,
				setLoading,
				userDataLoaded,
				setUserDataLoaded,
				notificationsRead,
				setNotificationsRead,
				getUserData,
				handleRegister,
				handleLogin,
				handleLogout,
				handleAddGroup,
				handleAddItem,
				editGroupInfo,
				setEditGroupInfo,
				handleEditGroup,
				handleDeleteGroup,
				handleEditItem,
				handleDeleteItem,
				handleUserEdit,
				registerNFC,
				handleLoadNFCPage,
				handleReadNFC,
			}}>
			{children}
		</Context.Provider>
	);
}

export { Context, AuthContext };
