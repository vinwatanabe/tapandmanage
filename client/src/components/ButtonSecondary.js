import React from 'react';
import { Link } from 'react-router-dom';

const ButtonSecondary = ({ text, url, icon, styles }) => {
	return (
		<Link
			to={url}
			className={`bg-white hover:bg-lightGrey px-6 py-2 rounded-full border border-borderGrey flex items-center ${styles}`}>
			{icon ? (
				<span className='material-symbols-outlined mr-2'>{icon}</span>
			) : (
				''
			)}
			{text}
		</Link>
	);
};

export default ButtonSecondary;
