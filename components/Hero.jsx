import React from 'react'
import Dashboard from '../public/asessts/dashboard.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <div style={{ backgroundImage: `url('/asessts/Hero.png')` }} className='w-[100%] h-[100vh] relative rounded-[2rem] bg-no-repeat bg-cover'>

      {/* NAVBAR  */}
      <div className='flex justify-between items-center px-2  lg:px-10 py-7'>

        <div className='flex items-center gap-x-1 lg:gap-x-4'>
          <Image src={"/asessts/Logo.png"} width={50} height={50} className='' />
          <p className='text-sm lg:text-xl text-[#231645] font-medium'>Post Merica</p>
        </div>

        <div className='flex justify-between  items-center bg-[#FDFDFD] shadow-shadow1 px-6 w-[200px] sm:w-[315px] h-[52px] rounded-3xl'>
          <p className='cursor-pointer text-[#231645] sm:text-base text-xs'>Product</p>
          <p className='cursor-pointer text-[#231645] sm:text-base text-xs'>Docs</p>
          <p className='cursor-pointer text-[#231645] sm:text-base text-xs'>Support</p>
        </div>

        <div>
          <button className='bg-[#FDFDFD] border border-gray-200 shadow-shadow1 text-[#231645] w-[81px] h-[40px] rounded-[10px] font-medium'>Log in</button>
        </div>

      </div>

      {/* HERO  */}

      <div className='flex justify-center items-center ml-[1rem] sm:ml-[2rem] lg:ml-[6.5rem] mt-[2rem] flex-col'>

        <div className='bg-[#F5F7FA] w-[315px] h-[35px] rounded-[24px] shadow-shadow1 pl-5 pr-1 flex items-center gap-x-2 py-1'>
          <p className='text-[#231645] flex-1 text-sm'>Limited time offer</p>
          <button className='flex-1 h-[100%] rounded-3xl bg-gradient-to-b from-[#231645] to-[#4507CC] text-white text-sm'>-50% first month</button>
        </div>
        <h1 className='text-[2.5rem] font-semibold mt-7 text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC]'>Save time and money</h1>
        <h1 className='text-[2.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC] mt-[-10px]'>on shipping</h1>
        <p className='text-[#21066F] mt-2 text-center'>Enjoy fixed shipping rates up to 94% off from leading carriers. <br /> Save more money, print faster, and reduce shipping time <br /> with Postmerica.</p>
        <div className='flex items-center gap-x-5 mt-6'>
          <button className='w-[10rem] h-[3rem] rounded-lg bg-[#FDFDFD] border border-gray-200 shadow-shadow1 text-[#231645] '>Book a demo</button>
          <button className='w-[10rem] h-[3rem] rounded-lg bg-gradient-to-b from-[#231645] to-[#4507CC] text-white'>Start shipping</button>
        </div>
      </div>



      <div className='absolute bottom-[-1rem] sm:bottom-[-4rem] w-[100%] h-[2%] flex justify-center items-center'>
        <Image src={Dashboard} className='bg-no-repeat bg-contain w-[70%]' />

      </div>





    </div>
  )
}

export default Hero