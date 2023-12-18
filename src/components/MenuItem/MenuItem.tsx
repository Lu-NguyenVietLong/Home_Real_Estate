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
    const [activeMenu, setActiveMenu] = useState('/')

    const handleActiveMenu = () => {
        setActiveMenu(items.url)
    }

  return (
    <li 
        className={`menu-list ${items.url === activeMenu ? 'menu_item--active' :''} ${ depthLevel===0 ? 'py-[28px] mr-[30px] ' : 'py-[4px] w-full .menu-dropdown-list' } text-[14px] leading-6 cursor-pointer relative`}
        onClick={handleActiveMenu}
    >
            {
                items.subMenu ? (
                    <>
                        <NavLink 
                            to={items.url}
                            className={`menu-title ${ depthLevel>0 ? 'menu-title-sub font-semibold ' : 'menu-title-header font-bold'} relative h-full w-full flex items-center justify-between`}
                        >
                            {items.title}
                        </NavLink>
                        <Dropdown subMenus={items.subMenu} depthLevel={depthLevel} />
                    </>
                ): (
                    <NavLink to={items.url} className={`menu-title ${depthLevel > 0 ? 'font-semibold' : 'font-bold'}`}>{items.title}</NavLink>
                )
            }
    </li>
  )
}

export default MenuItem