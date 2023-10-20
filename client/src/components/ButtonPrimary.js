import React from 'react';
import { Link } from 'react-router-dom';

const ButtonPrimary = ({ text, url, icon, styles, click, context }) => {
	const executeClick = (event, action) => {
		event.preventDefault();
		action();
	};

	const linkUrlNoContext = (
		<Link
			to={url}
			className={`bg-lightBlue hover:bg-lightBlueHover px-6 py-2 rounded-full text-white flex items-center ${styles}`}>
			{icon ? (
				<span className='material-symbols-outlined mr-2'>{icon}</span>
			) : (
				''
			)}
			{text}
		</Link>
	);

	const linkUrlContext = (
		<Link
			onClick={context}
			to={url}
			className={`bg-lightBlue hover:bg-lightBlueHover px-6 py-2 rounded-full text-white flex items-center ${styles}`}>
			{icon ? (
				<span className='material-symbols-outlined mr-2'>{icon}</span>
			) : (
				''
			)}
			{text}
		</Link>
	);

	const linkUrl = <>{context ? linkUrlContext : linkUrlNoContext}</>;

	const actionButton = (
		<Link
			onClick={(e) => executeClick(e, click)}
			className={`bg-lightBlue hover:bg-lightBlueHover px-6 py-2 rounded-full text-white flex items-center ${styles}`}>
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

export default ButtonPrimary;
