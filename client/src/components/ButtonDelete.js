import React from 'react';
import { Link } from 'react-router-dom';

const ButtonDelete = ({ text, url, icon, styles, click }) => {
	const executeClick = (event, action) => {
		event.preventDefault();
		action();
	};

	return (
		<Link
			to={url}
			onClick={(e) => executeClick(e, click)}
			className={`bg-darkRed hover:bg-darkRedHover px-6 py-2 rounded-full text-white flex items-center ${styles}`}>
			{icon ? (
				<span className='material-symbols-outlined mr-2'>{icon}</span>
			) : (
				''
			)}
			{text}
		</Link>
	);
};

export default ButtonDelete;
