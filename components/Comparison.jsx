import React from 'react'

const Comparison = () => {
  return (
    <div className='bg-[#231645] mt-[5rem] rounded-[24px] flex justify-center items-center py-[5rem] text-white flex-col'>
      <div className='flex justify-center items-center'>
        <img src="/asessts/rate1.png" alt="" />
      </div>

      <div className='flex justify-center items-center gap-x-7'>
        <p>97 <span className='text-[#8C71F6]'>%</span></p>
        <p>200 <span className='text-[#8C71F6]'>%</span></p>
        <p>97 <span className='text-[#8C71F6]'>%</span></p>
      </div>

      <h1 className='text-[2.5rem] text-center font-semibold mt-7 '>Users save $924 per month on</h1>
      <h1 className='text-[2.5rem] text-center font-semibold mt-[-10px]'>average by switching to Postmerica</h1>
      <p className='mt-2 text-[#CAC0FF] text-center'>Explore how postmerica save your time and money</p>


      <div className='flex justify-center items-center mt-[2rem]'>
        <img src="/asessts/rate2.png" alt="" />
      </div>

      <div className='flex justify-center items-center gap-x-7'>
        <p>97 <span className='text-[#8C71F6]'>%</span></p>
        <p>200 <span className='text-[#8C71F6]'>%</span></p>
        <p>97 <span className='text-[#8C71F6]'>%</span></p>
      </div>

      <h1 className='text-[2.5rem] text-center font-semibold mt-7 '>Sellers have a 250% boost on</h1>
      <h1 className='text-[2.5rem] text-center font-semibold mt-[-10px]'>shipments on average</h1>
      <p className='mt-2 text-[#CAC0FF] text-center'>Explore how postmerica save your time and money</p>

    </div>
  )
}

export default Comparison