import React, { useState } from 'react'

type props = {
  children?: string,
  dataOption?: string[]
}

const SelectionButton = ({dataOption, children}: props) => {
  const [optionMound, setOptionMound] = useState(false)
  const [currentValue, setCurrentValue] = useState(children)
  return (
    <div className='selection-button relative w-[266px]  rounded-[10px] border-[1px] bg-[#fff] border-[#E5E5EA]'>
        <div
          className='py-[14px] px-[17px] cursor-pointer '
          onClick={() => setOptionMound(prev=>!prev)}
        ><span className={`select-none flex justify-between items-center after:w-[7px] after:h-[7px] after:inline-block after:border-r-[1px] after:border-t-[1px] after:border-[#000] ${optionMound ? 'after:rotate-[135deg] after:animate-rotateDownEffect' :'after:rotate-[-45deg] after:animate-rotateUpEffect'}`}>{currentValue}</span></div>
        <div className={`option-list w-full bg-[#fff] left-0 absolute z-10 top-[105%] rounded-[5px] border-[1px] border-[#E5E5EA] ${optionMound ? 'scale-1 opacity-1' : 'scale-0 opacity-0'} transition-all origin-top`}>
          <ul className='overflow-auto max-h-[155px] '>
            {dataOption && dataOption.map((option, index) => (
                <li className='min-h-[40px] pr-[29px] pl-[18px] flex items-center cursor-pointer transition-all hover:bg-[#f6f6f6]'
                    onClick={() => {setCurrentValue(option); setOptionMound(false)}}
                >
                    <span className='select-none'>{option}</span>
                </li>
            ))}
          </ul> 
        </div>
    </div>
  )
}

export default SelectionButton