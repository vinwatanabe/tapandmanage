import React from 'react';
import Logo from '../images/brand/tap-manage-logo.svg';
import FacebookIco from '../images/assets/facebook-ico.svg';
import InstagramIco from '../images/assets/instagram-ico.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='flex flex-col w-full bg-darkBlue mx-auto text-white text-base'>
			<div className='flex flex-row w-full mx-auto max-w-7xl px-20 2xl:px-0 justify-between py-10'>
				<div>
					<picture>
						<img src={Logo} alt='' />
					</picture>
				</div>

				<div>
					<ul className='flex flex-col'>
						<li className='font-bold'>Product</li>
						<li>
							<Link to={'#!'}>Overview</Link>
						</li>
						<li>
							<Link to={'#!'}>Pricing</Link>
						</li>
						<li>
							<Link to={'#!'}>Customers</Link>
						</li>
					</ul>
				</div>

				<div>
					<ul className='flex flex-col'>
						<li className='font-bold'>Resources</li>
						<li>
							<Link to={'#!'}>Documentation</Link>
						</li>
						<li>
							<Link to={'#!'}>Tutorials</Link>
						</li>
						<li>
							<Link to={'#!'}>FAQ</Link>
						</li>
					</ul>
				</div>

				<div>
					<ul className='flex flex-col'>
						<li className='font-bold'>Company</li>
						<li>
							<Link to={'#!'}>About us</Link>
						</li>
						<li>
							<Link to={'#!'}>Careers</Link>
						</li>
					</ul>
				</div>

				<div>
					<ul className='flex flex-col gap-2'>
						<li className='font-bold'>Follow us</li>
						<ul className='flex flex-row gap-5 justify-center'>
							<li>
								<Link to={'#!'}>
									<img src={FacebookIco} alt='' />
								</Link>
							</li>
							<li>
								<Link to={'#!'}>
									<img src={InstagramIco} alt='' />
								</Link>
							</li>
						</ul>
					</ul>
				</div>
			</div>

			<hr className='flex flex-row w-full mx-auto max-w-7xl px-20 2xl:px-0' />

			<div className='flex flex-row w-full mx-auto max-w-7xl px-20 2xl:px-0 justify-between py-10'>
				<div>
					<p>Tap & Manage 2023</p>
				</div>

				<div>
					<ul className='flex flex-row gap-6'>
						<li>
							<Link to={'#!'}>Terms and Privacy</Link>
						</li>
						<li>
							<Link to={'#!'}>Security</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
