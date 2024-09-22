import Image from 'next/image'
import React from 'react'

const Rates = () => {
  return (
    <div style={{ backgroundImage: `url('/asessts/ratesBg.svg')` }} className='flex justify-center items-center flex-col mt-[2rem] bg-no-repeat bg-cover py-10'>

      <div>
        <div className='flex justify-center items-center'>
          <Image src={"/asessts/graph.png"} width={50} height={50} />
        </div>
        <h1 className='text-[2.5rem] text-center font-semibold mt-7 text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC]'>Low fixed shipping rates</h1>
        <p className='text-[#21066f] mt-5 text-center'>Accurately forecast and allocate your budget without worrying <br /> about unexpected expenses.</p>
        <div className='flex justify-center items-center mt-[1.5rem]'>
          <img src={"/asessts/chart1.png"} />
        </div>


        <div className='flex justify-center items-center'>
          <Image src={"/asessts/secure.png"} width={50} height={50} />
        </div>
        <h1 className='text-[2.5rem] text-center font-semibold mt-7 text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC]'>Around the clock support</h1>
        <p className='text-[#21066f] mt-5 text-center'>Whether it's addressing technical issues or clarifying shipping- <br />related queries, our expert staff is always ready to assist you.</p>
        <div className='flex justify-center items-center mt-[1.5rem]'>
          <img src={"/asessts/clock.png"} className='mr-[-7rem] z-50 h-[10rem] md:h-[15rem]' />
          <img src={"/asessts/chats.png"} className='h-[15rem] md:h-[20rem]' />
        </div>


        <div className='flex justify-center items-center'>
          <Image src={"/asessts/zero.png"} width={50} height={50} />
        </div>
        <h1 className='text-[2.5rem] text-center font-semibold mt-7 text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC]'>Zero monthly fees</h1>
        <p className='text-[#21066f] mt-5 text-center'>Organize, process, and fulfill your orders with highly <br /> discounted pricing using top shipping carriers.</p>
        <div className='flex justify-center items-center mt-[1.5rem]'>
          <img src={"/asessts/plans.png"} />
        </div>

      </div>
    </div>
  )
}

export default Rates