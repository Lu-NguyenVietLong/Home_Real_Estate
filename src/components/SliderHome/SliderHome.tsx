import React from 'react'
import FlatTab from '../FlatTab/FlatTab'
import CounterNumber from '../CounterNumber/CounterNumber'

const SliderHome = () => {
  return (
    <div className="slider-home relative bg-center bg-cover w-full">
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
                        <FlatTab />
                        <div className='themes-count flex'>
                            <div className='counter-box'>
                                <div className='count-number'>
                                    <CounterNumber />
                                </div>
                                <div className='count-title'>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SliderHome