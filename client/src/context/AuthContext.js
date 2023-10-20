import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Context = createContext();

function AuthContext({ children }) {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const [userDataLoaded, setUserDataLoaded] = useState(false);
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

		const url = 'http://localhost:5000/company/register';
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		let token;

		await axios
			.post(url, values, config)
			.then((resp) => {
				token = resp.data.token;

				localStorage.setItem('token', JSON.stringify(token));
				axios.defaults.headers.Authorization = `Bearer ${token}`;
				setAuthenticated(true);

				return navigate('/inventory');
			})
			.catch((error) => {
				setAuthenticated(false);
				localStorage.removeItem('token');
				axios.defaults.Authorization = undefined;
				removeUserData();

				return navigate('/');
			});

		await getUserData(token);
	}

	// Handle Login
	async function handleLogin(event, values) {
		event.preventDefault();

		const url = 'http://localhost:5000/auth/login';
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		let token;

		await axios
			.post(url, values, config)
			.then((resp) => {
				token = resp.data.token;

				localStorage.setItem('token', JSON.stringify(token));
				axios.defaults.headers.Authorization = `Bearer ${token}`;
				setAuthenticated(true);

				return navigate('/inventory');
			})
			.catch((error) => {
				setAuthenticated(false);
				localStorage.removeItem('token');
				axios.defaults.headers.Authorization = undefined;
				removeUserData();

				return navigate('/');
			});

		await getUserData(token);
	}

	// Get user data
	async function getUserData(token) {
		const url = 'http://localhost:5000/auth/company';

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

	return (
		<Context.Provider
			value={{
				authenticated,
				setAuthenticated,
				loading,
				setLoading,
				userDataLoaded,
				setUserDataLoaded,
				getUserData,
				handleRegister,
				handleLogin,
				handleLogout,
			}}>
			{children}
		</Context.Provider>
	);
}

export { Context, AuthContext };
