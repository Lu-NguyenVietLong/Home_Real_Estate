import Navbar from '../../../components/Navbar/Navbar';

type Menu = {
    title: string;
    item: string[];
}[]


const MENU_LIST: Menu = [
    {
        title: 'Home',
        item: ['Home 1','Home 2','Home 3','Home 4',]
    },
    {
        title: 'Property',
        item: ['Property List','Property Grid','Property Detail','Property Map',]
    },
    {
        title: 'Page',
        item: ['About','Faq\'s','Pricing','Error']
    },
    {
        title: 'Blog',
        item: ['Blog List','Blog Grid','Blog Detail']
    },
    {
        title: 'Contact',
        item: []
    }
]

function Header() {
    return (
        <header id="header" className="w-ful h-[78px] shadow-md">
            <div className="h-full">
                <div className="grid grid-rows-1 grid-cols-1 px-[15px]">
                    <div className="w-full h-[78px] flex justify-between">
                        <div className='flex items-center'>
                            <a href='/'>
                                <img 
                                    className='w-[197px] h-[48px]'
                                    src="https://themesflat.co/html/dreamhomehtml/assets/images/logo/logo@2x.png"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <Navbar menuList={MENU_LIST} />
                        <div className="h-full">
                            <div className='flex items-center h-full'>
                                <div className='mr-[21px] text-[14px]'>
                                    <a href='/' className='mr-1 font-semibold hover:text-[#FFA920]'>Register</a>
                                    <span className='mr-1 font-semibold'>/</span>
                                    <a href='/' className='mr-1 font-semibold hover:text-[#FFA920]'>Login</a>
                                </div>
                                <div>
                                    <div className='cursor-pointer w-[180px] h-[56px] bg-[#FFA920] text-center leading-[56px] font-semibold text-white rounded-[10px]'>Sell Property</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
