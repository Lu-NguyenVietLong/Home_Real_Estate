import { faPhone, faKaaba, faMaximize, faSackXmark, faSwimmingPool, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SocialIcon from "../../../components/SocialIcon/SocialIcon"

const meetList = [
    {
        img: 'https://themesflat.co/html/dreamhomehtml/assets/images/img-box/meet-1.jpg',
        name: 'Wade Warren',
        position: 'Salesperson'
    },
    {
        img: 'https://themesflat.co/html/dreamhomehtml/assets/images/img-box/meet-2.jpg',
        name: 'Leslie Alexander',
        position: 'Commercial Broker'
    },
    {
        img: 'https://themesflat.co/html/dreamhomehtml/assets/images/img-box/meet-3.jpg',
        name: 'Darlene Robertson',
        position: 'Realtor'
    },
]

const MeetSection = () => {
  return (
    <div className='pb-[50px]'>
        <div className='grid grid-cols-1 mt-[71px] mb-[14px] '>
            <div className='text-center'>
                <h2 className='text-[45px] font-bold'>Meet the agents</h2>
                <p className='text-[#8E8E93]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
            </div>
        </div>
        <div className="px-[170px] mt-[60px] ">
            <div className='grid grid-cols-3 gap-7'>
                {meetList.map((item, index) => (
                    <div className='meet-box group '>
                        <div className='meet-box-img relative  rounded-[10px] overflow-hidden cursor-pointer'>
                            <img className='group-hover:scale-125  transition-all duration-300' alt='' src={item.img} />
                            <div className='meet-box-icon absolute text-[#fff] flex flex-col items-center justify-around bg-primary w-[50px] h-full top-0 right-[-30px] opacity-0 group-hover:right-0 group-hover:opacity-100 transition-all duration-300'>
                                <div><FontAwesomeIcon icon={faMaximize} /></div>
                                <div><FontAwesomeIcon icon={faKaaba} /></div>
                                <div><FontAwesomeIcon icon={faSwimmingPool} /></div>
                                <div><FontAwesomeIcon icon={faSackXmark} /></div>
                            </div>
                        </div>
                        <div className='pt-[21px] flex justify-between'>
                            <div className=''>
                                <h2 className='font-semibold text-[16px] hover:text-primary cursor-pointer'>{item.name}</h2>
                                <p>{item.position}</p>
                            </div>
                            <div className='flex'>
                                <div className='mr-[10px]'><SocialIcon icon={<FontAwesomeIcon icon={faPhone}/>} background={'#fff'}  /></div>
                                <div><SocialIcon icon={<FontAwesomeIcon icon={faEnvelope}/>} background={'#fff'}  /></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='w-full flex justify-center mt-[40px]'>
            <p className='text-[#8E8E93] font-[500]'>Become an agent and get the commission you deserve. <a href='#/' className='text-primary underline'>Contact us</a></p>
        </div>
    </div>
  )
}

export default MeetSection