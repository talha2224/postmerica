import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

const Problems = () => {
  return (

    <div className='flex justify-center items-center mt-[5rem] flex-col'>

      <div>
        <div className='flex items-center gap-x-3 justify-center'>
          <FaStar className='text-[#7D52F4]'/>
          <h1 className='text-3xl'>4.6 <span className='text-sm text-[#E1E4EA]'>/5</span></h1>
        </div>
        <p className='text-[#E1E4EA] mt-1 text-center mb-3'>in 37 reviews</p>

        <div className='w-[198px] h-[36px] rounded-[8px] flex justify-between items-center text-white px-3 bg-[#21066F]'>
          <MdVerifiedUser/>
          <p>VERIFIED COMPANY</p>
        </div>
      </div>



      <div className='flex justify-center items-center mt-[2rem]'>
        <img src="./asessts/section.png" alt="" />
      </div>


    </div>
  )
}

export default Problems