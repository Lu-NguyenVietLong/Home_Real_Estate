import React from 'react';
import { MENU_LIST } from '../../FakeData/MENU_LIST';
import MenuItem from '../MenuItem/MenuItem';
import './Navbar.scss'

const Navbar = () => {
    const depthLevel = 0;

    return (
        <div className='navbar flex items-center sm:hidden md:hidden lg:block'>
            <ul className='navbar-menu flex items-center '>
                {MENU_LIST.map((menu, index) => (
                    <MenuItem items={menu} key={index} index={index} depthLevel={depthLevel} />
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
