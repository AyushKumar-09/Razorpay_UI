import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GrSatellite } from "react-icons/gr";
import { FiUserCheck } from "react-icons/fi";
const BodyNav = () => {
  return (
    <>
    <div className=' flex justify-end  p-4'>
            <div className='bg-blue-500 p-2 flex font-bold cursor-pointer'> + PAYOUT  | <IoIosArrowDown className='pl-2 pt-2' size={20}/></div>
            <div className='ml-2 cursor-pointer'>
            <IoSearch size={30} color='skyblue' className='pt-2'/>
            </div>
            <div className='ml-2 cursor-pointer'>
            <GrSatellite size={30} color='orange' className='pt-2'/>
            </div>
            <div className='ml-2 cursor-pointer'>
            <FiUserCheck  size={30}  color='skyblue' className='pt-2'/>
            </div>
    </div>

    </>
  )
}

export default BodyNav
