import React from 'react'

const WidgetPrice = () => {
  return (
    <div className='widget-price w-[100%] text-[14px] mr-[10px]'>
        <div className='widget-caption w-full flex justify-between '>
            <div className=''>
                <span className='font-semibold mr-[10px]'>Form</span>
                <span>$100</span>
            </div>
            <span>-</span>
            <span>$1,000,000</span>
        </div>
        <div className='widget-slider-range w-full h-[7px] rounded-[2px]'>
            <div className='noUi-base w-full h-full relative'>
                <div className='noUi bg-primary absolute  w-full h-full r-0 t-0 l-0 b-0'>
                    <div className='noUi-lower w-[17px] h-[17px] left-0 relative bg-[#f6f6f6] rounded-[5px] border-[1px] top-[-6.5px] border-[#ccc]'></div>
                </div>
                <div className='noUi bg-[#D6D7D9] absolute  w-full h-full r-0 t-0 l-0 b-0'>
                    <div className='noUi-upper w-[17px] left h-[17px] relative bg-[#f6f6f6] rounded-[5px] border-[1px] top-[-6.5px] border-[#ccc]'></div>
                </div>
            </div>
        </div>
        <div className='widget-slider-label'></div>
    </div>
  )
}

export default WidgetPrice