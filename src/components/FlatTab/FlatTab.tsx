import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import SelectionButton from '../SelectionButton/SelectionButton'
import {LOCATION_TYPE_DATA, PROPERTY_TYPE_DATA} from '../../FakeData/OPTION_DATA'

import Filter from '../Filter/Filter'
import SelectionForm from '../SelectionForm/SelectionForm'

const FlatTab = () => {
  return (
    <div className='flat-tab'>
        <div className='box-tab'>
            <ul className='flex'>
                <li className=' w-[115px] h-[40px] flex justify-center items-center rounded-tl-[20px] cursor-pointer transition-all hover:bg-primary bg-primary'>Rent</li>
                <li className='bg-[#ece3d0] w-[115px] h-[40px] flex justify-center items-center rounded-tr-[20px] cursor-pointer transition-all hover:bg-primary'>Buy</li>
            </ul>
        </div>
        <div className='content-tab'>
            <div className='content-tab-wrapper relative table-cell bg-[#fff] rounded-xl p-[22px] relative mb-[30px] shadow-shadowDefault'>
                <form>
                    <div className='form-group '>
                        <div className='option-group flex items-center'>
                            <div className='option-group-item ml-[12px] bg-[#fff]'>
                                <input placeholder="Type keyword..." className='text-[#120A21] border-[1px] border-[#E5E5EA] rounded-[10px] leading-[24px] py-[14px] pr-[49px] pl-[17px] outline-none ' />
                            </div>
                            <div className='option-group-item ml-[12px] '>
                                <SelectionButton dataOption={PROPERTY_TYPE_DATA}>Property type</SelectionButton>
                            </div>
                            <div className='option-group-item ml-[12px]'>
                                <SelectionButton dataOption={LOCATION_TYPE_DATA}>Location</SelectionButton>
                            </div>
                            <div className='option-group-item ml-[12px]'>
                                <div className='icon-filter bg-primary w-[54px] h-[54px] flex justify-center items-center rounded-[10px] cursor-pointer text-[#fff]'>
                                    <FontAwesomeIcon icon={faSliders} />
                                </div>
                            </div>
                        </div>
                        <div className='Selection-form-group absolute top-[110%] w-full'>
                            <SelectionForm />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FlatTab