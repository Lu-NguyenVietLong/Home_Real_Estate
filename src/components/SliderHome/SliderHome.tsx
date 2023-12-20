import React from 'react'
import FlatTab from '../FlatTab/FlatTab'
import CounterNumber from '../CounterNumber/CounterNumber'
import CurvedText from '../CurvedText/CurvedText'

const SliderHome = () => {
  return (
    <div className="slider-home  relative bg-center bg-cover w-full">
        <div className='slider-item relative '>
            <div className='slider-img '>
                <img className='absolute w-full h-full top-0 left-0 object-cover' src='https://themesflat.co/html/dreamhomehtml/assets/images/slider/bg-slider-1.png' alt='slider' />
            </div>
            <div className='container relative max-w-[1520px]'>
                <div className='grid grid-rows-1 grid-cols-1 px-[15px]'>
                    <div className='content pt-[160px] pb-[140px]'>
                        <div className='heading mb-[22px]'>
                            <h1 className='text-[60px] leading-[72px] font-bold'>We will find a perfect <br></br> home for you</h1>
                            <p className='text-[16px] leading-[24px] mt-[10px]'>Find a variety of properties that suit you very easily, forget all difficulties in finding a residence <br></br> for you</p>
                        </div>
                        <div className='absolute z-10'>
                            <FlatTab />
                        </div>
                        <div className='themes-count mt-[170px] flex'>
                            <div className='counter-box mr-[80px]'>
                                <div className='count-number flex text-[30px] font-bold mb-[20px]'>
                                    <CounterNumber min={0} max={1500} />
                                    <span className='text-[30px] font-bold'>+</span>
                                </div>
                                <div className='count-title text-[#8E8E93] font-semibold'>
                                    Property ready
                                </div>
                            </div>
                            <div className='counter-box '>
                                <div className='count-number flex text-[30px] font-bold mb-[20px]'>
                                    <CounterNumber min={0} max={700} />
                                    <span className='text-[30px] font-bold'>+</span>
                                </div>
                                <div className='count-title text-[#8E8E93] font-semibold'>
                                    Happy customer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='images-home z-1 absolute top-[83px] right-[15px]'>
                        <div>
                            <img className='w-[669px] h-[689px] md:h-[400px] md:w-[411px]' alt='' src='https://themesflat.co/html/dreamhomehtml/assets/images/slider/slider-1.png' />
                        </div>
                    </div>
                    <div className='curved-text absolute top-[78px] right-[45%]'>
                        <CurvedText />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SliderHome