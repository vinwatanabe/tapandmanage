import React from 'react';
import Logo from '../images/brand/tap-manage-logo.svg';
import FacebookIco from '../images/assets/facebook-ico.svg';
import InstagramIco from '../images/assets/instagram-ico.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='flex flex-col w-full bg-darkBlue mx-auto text-white text-base'>
			<div className='flex flex-row w-full mx-auto max-w-7xl px-5 sm:px-20 2xl:px-0 justify-between py-10 flex-wrap sm:flex-nowrap'>
				<div className='basis-full sm:basis-auto mb-10 sm:mb-0'>
					<picture className='flex w-full justify-center sm:block'>
						<img src={Logo} alt='' />
					</picture>
				</div>

				<div className='basis-1/4 sm:basis-auto'>
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

				<div className='basis-1/4 sm:basis-auto'>
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

				<div className='basis-1/4 sm:basis-auto'>
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

				<div className='basis-full sm:basis-auto'>
					<ul className='flex flex-col gap-2 text-center sm:text-left mt-10 sm:mt-0'>
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

			<div className='flex flex-row w-full mx-auto max-w-7xl px-20 2xl:px-0 justify-center sm:justify-between py-10 flex-wrap sm:flex-nowrap text-center sm:text-left'>
				<div>
					<p>Tap & Manage 2023</p>
				</div>

				<div>
					<ul className='flex flex-col sm:flex-row gap-0 sm:gap-6 flex-wrap sm:flex-nowrap'>
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
