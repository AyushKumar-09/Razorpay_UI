import React from 'react'
import { LOGO_URL } from './constants';
import { CiHome } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { RxPerson } from "react-icons/rx";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiStampLight } from "react-icons/pi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { RiBookMarkedLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className='bg-gray-800 h-screen p-5 text-white w-72 fixed'>
        <img 
        className='w-44'
        src={LOGO_URL} alt="logo" />
        <div className='pt-2 '>
            <div className='flex p-4 cursor-pointer hover:bg-slate-500 rounded-lg '>
                <div className='p-1'><CiHome /></div>
                 Home 
            </div>

            <div className='flex p-4 cursor-pointer hover:bg-slate-500 rounded-lg'>
               <div className='p-1'><FiArrowUpRight /></div> Payouts
            </div>

            <div className='flex p-4 cursor-pointer hover:bg-slate-500 rounded-lg'>
                <div className='p-1'><GrDocumentText /></div>
                Account Statement 
            </div>
            <div className='flex p-4 cursor-pointer hover:bg-slate-500 rounded-lg mb-4'>
                <div className='p-1'><RxPerson /></div>
                Contacts
            </div>
        </div>
        <hr/>
        <div className='pt-3'>
            <div className='flex p-4 cursor-pointer hover:bg-slate-500 rounded-lg'>
                <div className='p-1'><MdOutlineCurrencyRupee /> </div>
                Loans  
                {/* <span className='text-sm p-1 '> <p className='bg-green-500 rounded-lg p-1'>new</p> </span> */}

            </div>
            <div className='flex p-4 cursor-pointer hover:bg-slate-500 rounded-lg'>
                <div className='p-1'><IoDocumentTextOutline /> </div>
                Vendor Payements
            </div>
            <div className='flex p-4 cursor-pointer hover:bg-slate-500 rounded-lg'>
                <div className='p-1'><PiStampLight /> </div>
                Tax Payments
            </div>
            <div className='flex p-4 cursor-pointer hover:bg-slate-500 rounded-lg'>
                <div className='p-1'><IoPaperPlaneOutline /> </div>
                Payout Links
            </div>
            <div className='flex p-4 cursor-pointer hover:bg-slate-500 rounded-lg'>
                <div className='p-1'><IoMailOpenOutline /></div>
                Payroll
            </div>
            <div className='flex p-4 cursor-pointer hover:bg-slate-500 rounded-lg'>
                <div className='p-1'><RiBookMarkedLine /></div>
                Reports
            </div>
        </div>
 
    </div>
  )
}

export default Navbar;
