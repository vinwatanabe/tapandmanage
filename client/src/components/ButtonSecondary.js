import React from 'react';
import { Link } from 'react-router-dom';

const ButtonSecondary = ({ text, url, icon, styles, click, context }) => {
	const executeClick = (event, action) => {
		event.preventDefault();
		action();
	};

	const linkUrlNoContext = (
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

	const linkUrlContext = (
		<Link
			onClick={context}
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

	const linkUrl = <>{context ? linkUrlContext : linkUrlNoContext}</>;

	const actionButton = (
		<Link
			onClick={(e) => executeClick(e, click)}
			className={`bg-white hover:bg-lightGrey px-6 py-2 rounded-full border border-borderGrey flex items-center ${styles}`}>
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
