import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Dropdown from '../Dropdown/Dropdown'
import './MenuItem.scss'

type MenuType = {
    title: string;
    url: string;
    subMenu?: MenuType[];
}

const MenuItem: React.FC<{items: MenuType, index?: number, depthLevel: number}> = ({items, index, depthLevel}) => {
    const [activeMenu, setActiveMenu] = useState('home')
    const [openSubmenu, setOpenSubmenu] = useState(false)

    const handleActiveMenu = () => {
        setActiveMenu(items.title)
    }

    const handleOpenSubmenu = () => {
        setOpenSubmenu(prev => !prev)
    }

  return (
    <li 
        className={`menu-list ${items.title === activeMenu ? 'menu_item--active' :''} ${ depthLevel===0 ? 'lg:py-[28px] lg:mr-[30px] ' : 'py-[4px] w-full .menu-dropdown-list' } text-[14px] leading-6 cursor-pointer relative `}

    >
            {
                items.subMenu ? (
                    <>
                        <p 
                            className={`menu-title ${ depthLevel>0 ? 'menu-title-sub font-semibold ' : 'menu-title-header font-bold'} relative h-full w-full flex items-center justify-between sm:py-[4px] md:py-[5px]`}
                            onClick={() => {handleActiveMenu(); handleOpenSubmenu()}}
                        >
                            {items.title}
                        </p>
                        <div className={`${openSubmenu ? 'lg:hidden' : 'md:hidden sm:hidden hidden'}`}><Dropdown subMenus={items.subMenu} depthLevel={depthLevel} /></div>
                    </>
                ): (
                    <a href={items.url} className={`menu-title ${depthLevel > 0 ? 'font-semibold' : 'font-bold'}`}>{items.title}</a>
                )
            }
    </li>
  )
}

export default MenuItem