import React from 'react';
import { Link } from 'react-router-dom';

const ButtonSecondary = ({ text, url, icon, styles, click }) => {
	const executeClick = (event, action) => {
		event.preventDefault();
		action();
	};

	const linkUrl = (
		<Link
			to={url}
			className={`bg-darkBlue hover:bg-darkBlueSelect px-6 py-2 rounded-full flex items-center ${styles}`}>
			{icon ? (
				<span className='material-symbols-outlined mr-2'>{icon}</span>
			) : (
				''
			)}
			{text}
		</Link>
	);

	const actionButton = (
		<Link
			onClick={(e) => executeClick(e, click)}
			className={`bg-darkBlue hover:bg-darkBlueSelect px-6 py-2 rounded-full flex items-center ${styles}`}>
			{icon ? (
				<span className='material-symbols-outlined mr-2'>{icon}</span>
			) : (
				''
			)}
			{text}
		</Link>
	);

	return <>{url ? linkUrl : actionButton}</>;
};

export default ButtonSecondary;
