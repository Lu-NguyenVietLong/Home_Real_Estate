import {faHouse, faKey} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../../components/Button/Button';
import Navbar from '../../../components/Navbar/Navbar';

function Header() {
    return (
        <header id="header" className="w-ful h-[78px] shadow-md">
            <div className="header-wrapper h-full">
                <div className="grid grid-rows-1 grid-cols-1 px-[15px]">
                    <div className="w-full h-[78px] flex justify-between">
                        <div className='header-logo flex items-center'>
                            <a href='/'>
                                <img 
                                    className='w-[197px] h-[48px]'
                                    src="https://themesflat.co/html/dreamhomehtml/assets/images/logo/logo@2x.png"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <Navbar/>
                        <div className="header-account h-full">
                            <div className='header-account-wrapper flex items-center h-full'>
                                <div className='header-account-auth mr-[21px] text-[14px]'>
                                    <span className='mr-1'><FontAwesomeIcon icon={faKey} /></span>
                                    <a href='/' className='mr-1 font-semibold hover:text-[#FFA920]'>Register</a>
                                    <span className='mr-1 font-semibold'>/</span>
                                    <a href='/' className='mr-1 font-semibold hover:text-[#FFA920]'>Login</a>
                                </div>
                                <Button leftIcon={<FontAwesomeIcon icon={faHouse}/>} separate>
                                    Sell Property
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
