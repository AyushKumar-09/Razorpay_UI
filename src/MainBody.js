import React from 'react'
import { LuRefreshCcw } from "react-icons/lu";
import { Bank_Img, PAYX_LOGO, ZOHO_LOGO } from './constants';
import { FaDotCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoArrowDownOutline } from "react-icons/io5";
const MainBody = () => {
  return (
    <>
    <div className='flex justify-center'>
        {/* balance */}
    <div className='w-4/6'>
        <div className='flex text-gray-700'><span className='font-bold'>RazorpayX Lite</span>
         <span className='text-xs p-1 '> as of a few seconds ago </span><LuRefreshCcw className='cursor-pointer' size={20} />

        </div>
        <div className='flex w-1/2 pt-6 '>
        <div className='w-1/2 text-black'>
        <p className='text-gray-600 font-bold'>$ <span className='text-white text-3xl font-bold'>100</span>.09</p>
        </div>
        <div className='w-1/2  text-blue-400 pt-2 px-4 border-l-2 border-gray-700 cursor-pointer'>
            +Add Balance    
        </div>
        </div>
    </div>
    </div>
     {/* Update section */}
    <div className='flex  justify-center pt-8 '>
    <div className='w-4/6 border-2 border-dotted p-3 rounded-md border-gray-800'>
        <div>
            <p className=' text-gray-700'>🎉 You're all caught up . There are no more Items Pending on you .</p>
        </div>
    </div>
    </div>
    {/* Onboarding section */}

    <div className='flex justify-center'>
        <div className='w-4/6 pt-6 pb-2'>
        <p>Onboarding updates <span className='text-gray-600'>1</span></p>
        </div>
    </div>

    <div className='flex justify-center'>
        <div className='w-4/6 rounded-md flex bg-gray-900'>
        <div>
            <img src={Bank_Img}alt="img"
            className='w-40 p-2' />
        </div>
        <div className='pt-2 pl-3'>
            <p className='text-xl pt-1'>Open your RazorpayX account.</p>
            <p className='text-sm text-gray-600 pt-1'>Don't let bankache come in the way your growth. Apply for your RazorpayX account with a few basic details</p>
            <div className='pt-2 '> <button className='bg-blue-500 py-1  px-7 text-sm rounded-md ' > Start application - </button></div>
        </div>
        </div>
    </div>

    {/* Amazon section */}
    <div className='flex justify-center pt-5'>
        <div className='w-4/6  flex border-t-2 border-green-700 bg-gray-900'>
        <div className='w-1/4 p-4'>
            <p className='font-bold text-xl'>Amazon Instant Settlements</p>
        </div>
        <div className='w-3/4 '>
        <div className='flex '>
            <FaDotCircle className='pt-3' size={30} color='skyblue' /><p className='pt-2 text-sm'> Let's get you started</p>
        </div>
        <div>
            <p className='pl-7 text-sm'>Complete your application and get instant access to your Amazon payouts</p>
        </div>
        <div className='pl-8 p-4 '>
            <button className='bg-blue-500 py-1 px-5 rounded-md'>APPLY NOW</button>
        </div>
        </div>
        </div> 
    </div>

    <div className='flex justify-center'>
        <div className='w-4/6 flex border-t-2 border-green-700 bg-gray-900'>
        <div className='w-1/4 p-4'>
            <p className='font-bold text-xl'> Creating payouts in Live mode </p>
        </div>
        <div className='w-3/4 '>
            <div className='flex text-gray-600'>
            <FaCheckCircle  className='pt-3' size={30} color='skyblue'/><p  className='pt-2 text-sm'><span className='font-bold'>Add balance </span><span>to create payouts in Live mode </span> <hr className='text-gray-700'/></p>
            </div>
            <div className='flex'>
            <FaDotCircle className='pt-3' size={30} color='skyblue' /> <p className='font-bold pt-2'>Create payout</p>
            </div>
            <p className='pl-7 text-sm text-gray-500'>There are multiple ways in which the first payout:</p>
            <div className='flex pl-7'>
                <div className='m-2'>
                    <button className='bg-blue-500 py-1 px-5 rounded-md' >MAKE A PAYOUT</button>
                </div>
                <div className='m-2'>
                    <button className='bg-gray-700 py-1 px-5 rounded-md'>SHOW APPS FOR ME </button>
                </div>
                <div className='m-2'>
                    <button className='bg-gray-700 py-1 px-5 rounded-md'>API PAYOUTS</button>
                </div>
            </div>
        </div>
        </div>
    </div>

    <div className='flex justify-center pt-4'>
        <div className='w-4/6 flex border-2 border-blue-800  bg-gray-900 justify-between'>
            <div className=''>
                <img src={ZOHO_LOGO} alt="img"
                className='w-24 p-1 m-4' />
            </div>
            <div className='ml-5 p-4 '>
                <div className='mt-3 ml-6'>
                <p className='font-bold text-sm'>Automate Bookeeping for Payouts </p>
            <div >
                    <p className='text-sm text-gray-600'> Close your books 60% faster and with better accuracy by automating bookeeping for your Payouts.</p>
            </div>
                </div>
                
            </div>
            <div className='m-4 mt-7'>
                    <button className='text-xs border-2 border-blue-700 px-6 p-2 '>Connect Zoho Books </button>
            </div>
        </div>
    </div>
    <div className='flex justify-center pt-5'>
        <div className='flex w-4/6 justify-between'>
            <div className=' '>
                Insights
            </div>
            <div className='text-blue-600 flex cursor-pointer'>
                Detailed insights<IoIosArrowRoundForward className='p-2' size={30} />
            </div>
        </div>   
    </div>

    <div className='flex justify-center' >
        <div className='w-4/6 bg-gray-900 '>
        <div className='m-3'>
            <p className='text-sm text-gray-600'>Payout vaolume - last 30 days</p>
            <div className='p-1 mb-4'>
                <p className='text-sm text-gray-600'>₹ <span className='text-xl text-white'>236,695</span>.00</p>
            </div>
        </div>

        </div>

    </div>
    
    <div className='flex justify-center pt-5 mb-5'>
        <div className=' w-4/6  bg-gray-900'>
                <div className='flex justify-between m-6'>
                   <div className=''>
                    <div className='flex '>
                        <p className='mr-1'>Activity Feed </p><IoAlertCircleOutline size={20} color='gray'/><span className='text-sm text-gray-700 ml-1'>updated a few seconds ago</span>
                    </div>
                   </div>
                   <div className=' text-blue-600 flex cursor-pointer'>
                    Show filters <MdKeyboardArrowDown  size={25}/>
                   </div>
                </div>
                {/* activity div 1 */}
                <div className='flex justify-center my-6   mx-5'>
                    <div className='w-3/4  bg-gradient-to-r from-gray-800'>
                    <div className='flex w-5/6 justify-between m-9 '>
                        <div className='w-1/4 border-r-2'>
                            <p className='text-lg'>23 JUL</p>
                            <p className='text-sm text-gray-600'>Tuesday</p>
                        </div>
                        <div className='w-3/4 m-2 flex  pl-4'>
                            <p className='p-1'><CiUser  size={20}/></p>
                            <p>1 <span className='text-gray-600'>contact created</span></p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* activity div 2 */}
                <div className=' flex justify-center my-6 mx-5'>
                <div className='w-3/4 bg-gradient-to-r from-gray-800'>
                    <div className='flex w-5/6  justify-between m-9 '>
                        <div className='w-1/4 border-r-2'>
                            <p className='text-lg'>9 JUL</p>
                            <p className='text-sm text-gray-600'>Tuesday</p>
                        </div>
                        <div className='w-3/4 m-2 flex  pl-4'>
                            <p className='p-1'><img src={PAYX_LOGO} alt="img " className='w-5' /></p>
                            <p> <span className='text-sm text-gray-600'>₹</span> 300<span className='text-gray-600'> credited into the account</span></p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* activity div 3 */}
                <div className=' flex justify-center my-6 mx-5'>
                <div className='w-3/4 bg-gradient-to-r from-gray-800'>
                    <div className='flex w-5/6  justify-between m-9 '>
                        <div className='w-1/4 border-r-2'>
                            <p className='text-lg'>1 JUN</p>
                            <p className='text-sm text-gray-600'>Monday</p>
                        </div>
                        <div className='w-3/4 m-2 flex  pl-4'>
                            <p className='p-1'><img src={PAYX_LOGO} alt="img " className='w-5' /></p>
                            <p className='text-white'>1 <span className='text-gray-600 text-sm'>payout worth <span className='text-sm'>₹</span> <span className='text-white text-lg'>2,36,695</span> created  </span></p>
                        </div>
                    </div>
                </div>
                </div>
                {/* activity div 4 */}
                <div className=' flex justify-center my-6 mx-5'>
                <div className='w-3/4 bg-gradient-to-r from-gray-800'>
                    <div className='flex w-5/6  justify-between m-9 '>
                        <div className='w-1/4 border-r-2'>
                            <p className='text-lg'>24 JUL</p>
                            <p className='text-sm text-gray-600'>Monday</p>
                        </div>
                        <div className='w-3/4 m-2 flex  pl-4'>
                            <p className='p-1'><img src={PAYX_LOGO} alt="img " className='w-5' /></p>
                            
                        </div>
                    </div>
                    </div>
                </div>
            <div className='flex justify-center pt-5'>
                <div className=''>
                    <button className='bg-slate-700 m-3 py-2 px-4 flex'> LOOK FOR OLDER ACTIVITES <span className='p-1'><IoArrowDownOutline size={15} /></span></button>
                </div>

            </div>

        </div>
        
         </div>
   
    </>
  )
}

export default MainBody
