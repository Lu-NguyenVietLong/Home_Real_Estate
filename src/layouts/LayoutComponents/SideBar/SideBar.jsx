import { faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'

const SideBar = () => {


  return (
        <div className={`menu-box fixed top-0 left-0 w-[300px] h-full z-100 bg-[#fff] overflow-hidden animate-sidebarOpenEffect`}>
            <div className='nav-logo bg-[#fff] drop-shadow-md py-[12px] px-[20px] w-full'>
                <a href='/'>
                    <img 
                        className='w-[168px] h-[40px]'
                        src="https://themesflat.co/html/dreamhomehtml/assets/images/logo/logo@2x.png"
                        alt="logo"
                    />
                </a>
            </div>
            <div className='side-bottom px-[20px] py-[30px]'>
                <div className='side-login'>
                    <div className='side-account-auth mr-[21px] text-[14px] sm:mr-[10px] pb-[20px] border-b border-[#dbdbdb]'>
                        <span className='mr-1'><FontAwesomeIcon icon={faKey} /></span>
                        <a href='/' className='mr-1 font-semibold'>Login</a>
                    </div>
                </div>
                <div className='side-menu'>
                    <Navbar />
                </div>
            </div>
        </div>
  )
}

export default SideBar