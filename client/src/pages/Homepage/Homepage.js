import React from 'react';
import ComputerImg from '../../images/assets/computer.svg';
import ManageImg from '../../images/assets/manage-products.svg';
import SpreadsheetImg from '../../images/assets/spreadsheet.svg';
import HandPhoneImage from '../../images/assets/hand-phone.png';
import ButtonPrimary from '../../components/ButtonPrimary';
import HeaderHome from '../../components/HeaderHome';
import Footer from '../../components/Footer';

const Homepage = () => {
  return (
    <>
      <div className='w-full flex flex-col mx-auto'>
        <HeaderHome />

        <div className='w-full flex flex-row h-full sm:h-[560px] bg-gradient-to-t from-lightBlue to-darkBlue mx-auto flex-wrap sm:flex-nowrap'>
          <div className='flex w-full mx-auto max-w-7xl px-5 sm:px-20 2xl:px-0'>
            <div className='sm:flex absolute justify-end h-[560px] overflow-hidden hidden'>
              <picture className='flex translate-x-40 items-end'>
                <img src={HandPhoneImage} alt='' />
              </picture>
            </div>

            <div className='flex flex-col w-full text-white self-center -translate-y-10 mt-10 sm:mt-0 text-center sm:text-left'>
              <p className='text-[42px]/[52px] sm:text-[60px]/[80px] xl:text-[70px]/[80px] font-bold'>
                <span className='text-lightBlue'>Easily</span> manage
              </p>

              <p className='text-[42px]/[52px] sm:text-[60px]/[80px] xl:text-[70px]/[80px] font-bold'>
                your <span className='text-lightBlue'>inventory</span>
              </p>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col mx-auto my-20 sm:my-32'>
          <div className='flex flex-col w-full mx-auto max-w-7xl px-5 sm:px-20 2xl:px-0 gap-20 sm:gap-28'>
            <div className='flex flex-row w-full gap-5 sm:gap-20 items-center justify-center flex-wrap sm:flex-nowrap text-center sm:text-left'>
              <picture className='px-10 sm:px0'>
                <img src={SpreadsheetImg} alt='' />
              </picture>

              <div className='flex flex-col gap-5'>
                <p className='text-[30px]/[34px] sm:text-[42px]/[42px] text-lightBlue font-bold'>
                  Have a better view <br />
                  of your inventory
                </p>
                <p>
                  Manage your inventory more efficiently. <br />
                  Get notifications when a product has expired or when <br />
                  you are running low on some item.
                </p>
                <div className='flex justify-center sm:justify-normal'>
                  <ButtonPrimary text={'Get started'} url={'/register'} />
                </div>
              </div>
            </div>

            <div className='flex flex-row w-full gap-5 sm:gap-20 items-center justify-center flex-wrap sm:flex-nowrap text-center sm:text-left'>
              <div className='flex flex-col gap-5'>
                <p className='text-[30px]/[34px] sm:text-[42px]/[42px] text-lightBlue font-bold'>
                  Control your inventory <br />
                  from everywhere
                </p>
                <p>
                  Have access and control over all the items
                  <br /> in your company from your laptop or smartphone.
                </p>
                <div className='flex justify-center sm:justify-normal'>
                  <ButtonPrimary text={'Try it now'} url={'/register'} />
                </div>
              </div>

              <picture className='px-10 sm:px0 order-first sm:order-last'>
                <img src={ComputerImg} alt='' />
              </picture>
            </div>

            <div className='flex flex-row w-full gap-5 sm:gap-20 items-center justify-center flex-wrap sm:flex-nowrap text-center sm:text-left'>
              <picture className='px-10 sm:px0'>
                <img src={ManageImg} alt='' />
              </picture>

              <div className='flex flex-col gap-5'>
                <p className='text-[30px]/[34px] sm:text-[42px]/[42px] text-lightBlue font-bold'>
                  Manage your products
                  <br /> by tapping your phone
                </p>
                <p>
                  Use NFC tags to quickly add, remove and get information
                  <br /> about a product you have in your storage.
                </p>
                <div className='flex justify-center sm:justify-normal'>
                  <ButtonPrimary text={'Get started'} url={'/register'} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;
