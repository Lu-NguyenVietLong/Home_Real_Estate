import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons'
import SelectionButton from '../SelectionButton/SelectionButton'
import {LOCATION_TYPE_DATA, PROPERTY_TYPE_DATA} from '../../FakeData/OPTION_DATA'

import SelectionForm from '../SelectionForm/SelectionForm'
import Button from '../Button/Button'

const FlatTab = () => {
    const [activeTab, setActiveTab] = useState('rent')
    const [activeSelectForm, setActiveSelectForm] = useState(false)
    const handleActiveSelectForm = () => {
        setActiveSelectForm(prev => !prev)
    }
  return (
    <div className='flat-tab'>
        <div className='box-tab'>
            <ul className='flex'>
                <li className={`w-[115px] h-[40px] flex justify-center items-center rounded-tl-[20px] cursor-pointer transition-all hover:bg-primary  ${activeTab=== 'rent' ? 'bg-primary' : 'bg-[#ece3d0]'}`}
                    onClick={()=> setActiveTab('rent')}
                >Rent</li>
                <li className={`w-[115px] h-[40px] flex justify-center items-center rounded-tr-[20px] cursor-pointer transition-all hover:bg-primary ${activeTab=== 'buy' ? 'bg-primary' : 'bg-[#ece3d0]'}`}
                    onClick={()=> setActiveTab('buy')}
                >Buy</li>
            </ul>
        </div>
        <div className='content-tab '>
            <div className='content-tab-wrapper shadow-shadowDefault2 table-cell bg-[#fff] rounded-xl p-[22px] relative mb-[30px]'>
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
                                <div className='icon-filter bg-primary w-[54px] h-[54px] flex justify-center items-center rounded-[10px] cursor-pointer text-[#fff]'
                                    onClick={handleActiveSelectForm}
                                >
                                    <FontAwesomeIcon icon={faSliders} />
                                </div>
                            </div>
                            <div className='option-group-item ml-[12px]'>
                                <Button rightIcon={<FontAwesomeIcon icon={faMagnifyingGlass}/>} widthSize={150}>Search Now</Button>
                            </div>
                        </div>
                        <div className={`Selection-form-group absolute top-[110%] w-full ${activeSelectForm ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} origin-top  transition-all`}>
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