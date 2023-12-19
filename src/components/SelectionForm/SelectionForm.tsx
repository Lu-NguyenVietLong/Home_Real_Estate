import React from 'react'
import SelectionButton from '../SelectionButton/SelectionButton'
import WidgetPrice from '../WidgetPrice/WidgetPrice'

const SelectionForm = () => {
  return (
    <div className='w-full bg-[#fff] shadow-shadowDefault rounded-[10px] px-[22px] pt-[24px] pb-[10px] ml-[-22px]'>
        <div className='box-1 flex'>
            <div className='mr-[10px]'><SelectionButton>Baths: Any</SelectionButton></div>
            <div className='mr-[10px]'><SelectionButton>Beds: Any</SelectionButton></div>
            <div className='mr-[10px]'><WidgetPrice /></div>
            <div className='mr-[10px]'><WidgetPrice /></div>
        </div>
    </div>
  )
}

export default SelectionForm