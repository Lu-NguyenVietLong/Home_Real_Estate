import React from 'react';

type Menu = {
    title: string;
    item: string[];
}[]

type NavbarProps = {
    menuList: Menu;
}


const Navbar: React.FC<NavbarProps> = ({menuList}) => {
    return (
        <div className='navbar flex items-center'>
            <ul className='flex items-center '>
                {menuList.map((menuItem, index) => (
                    //Check title have item and title haven't item
                    <li key={index} className=''>
                        {menuItem.item.length ? (<a 
                        href='/' 
                        className='block mr-[47px] leading-6 py-[28px] font-bold hover:text-[#FFA920] transition-all relative 
                         after:inline-block after:absolute after:w-[7px] after:h-[7px] after:border-r-slate-950 after:border-r-2 
                         after:border-t-2 after:hover:border-[#FFA920] after:border-t-slate-950 after:origin-center after:rotate-[135deg] 
                         after:ml-[0.5em] after:mr-[1em] after:top-0 after:bottom-0 after:my-auto after:mx-0'
                        >
                            {menuItem.title}
                        </a>) :
                        (<a 
                        href='/' 
                        className='block mr-[47px] leading-6 py-[28px] font-bold hover:text-[#FFA920] transition-all relative'
                        >
                            {menuItem.title}
                        </a>)}

                        <ul className='hidden'>
                            {menuItem.item && menuItem.item.map((item, indexItem)=> (
                                <li>{item}</li>    
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
