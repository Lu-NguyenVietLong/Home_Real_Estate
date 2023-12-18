import {faBars, faHouse, faKey, faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../../components/Button/Button';
import Navbar from '../../../components/Navbar/Navbar';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';

function Header() {
    const [openSideBar, setOpenSideBar] = useState<boolean>(false)

    const handleOpenSideBar = () => {
        setOpenSideBar(true)
    }

    const handleCloseSideBar = () => {
        setOpenSideBar(false)
    }

    return (
        <header id="header" className="w-ful h-[78px] shadow-md">
            <div className="header-wrapper h-full">
                <div className='header-lower'>
                    <div className="grid grid-rows-1 grid-cols-1 px-[15px]">
                        <div className="w-full h-[78px] flex justify-between">
                            <div className='header-logo flex items-center '>
                                <a href='/'>
                                    <img 
                                        className='w-[198px] h-[48px] sm:w-[168px] sm:h-[40px]'
                                        src="https://themesflat.co/html/dreamhomehtml/assets/images/logo/logo@2x.png"
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            <div className='md:hidden sm:hidden'>
                                <Navbar/>
                            </div>
                            <div className="header-account h-full">
                                <div className='header-account-wrapper flex items-center justify-between h-full'>
                                    <div className='header-account-auth mr-[21px] text-[14px] sm:mr-[10px]'>
                                        <span className='mr-1'><FontAwesomeIcon icon={faKey} /></span>
                                        <a href='/' className='mr-1 font-semibold hover:text-[#FFA920] sm:hidden'>Register</a>
                                        <span className='mr-1 font-semibold sm:hidden'>/</span>
                                        <a href='/' className='mr-1 font-semibold hover:text-[#FFA920]'>Login</a>
                                    </div>
                                    <div className='button-header sm:hidden'>
                                        <Button leftIcon={<FontAwesomeIcon icon={faHouse}/>} separate>
                                            Sell Property
                                        </Button>
                                    </div>
                                    <div className='bars-icon  h-[26px] w-[26px] text-primary text-[32px] mx-4 flex items-center lg:hidden sm:mx-0'
                                        onClick={handleOpenSideBar}
                                    >
                                        <FontAwesomeIcon icon={faBars} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`mobile-menu ${openSideBar ? '' : 'hidden'}`}>
                    <div className='menu-backdrop fixed top-0 right-0 bottom-0 left-0 bg-[#000] opacity-40' onClick={handleCloseSideBar}></div>
                    <div className="close-btn fixed right-[29px] top-[8px] text-[40px] text-[#fff] z-1000 lg:hidden"
                        onClick={handleCloseSideBar}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <SideBar />
                </div>
            </div>
        </header>
    );
}

export default Header;
