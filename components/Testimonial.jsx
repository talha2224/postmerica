import React from 'react'

const Testimonial = () => {
  return (

    <div className='flex justify-center items-center flex-col mt-[4.5rem]'>
      <button className='bg-[#FDFDFD] shadow-shadow1 text-[#231645] w-[200px] h-[32px] rounded-[24px] font-medium'>Testimonials</button>
      <h1 className='text-[2.5rem] text-center font-semibold mt-7 text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC]'>You’re in great company</h1>

      <div className='flex justify-center items-center gap-x-8 mt-10'>
        <p>Book a demo</p>
        <button className='bg-[#FDFDFD] shadow-shadow1 text-[#231645] w-[193px] h-[40px] rounded-[10px] font-medium'>See Documentation</button>
      </div>

      <div className='flex justify-center items-center mt-[-9rem] z-50'>
        <img src="/asessts/testimonial.png" alt="" />
      </div>


      <div style={{ backgroundImage: `url(/asessts/gradient.png)` }} className='mt-[-20rem] bg-no-repeat bg-center flex justify-center items-center flex-col w-[100%] pb-[2rem] pt-[20rem]'>
        <img src="/asessts/logo.png" alt="" />
        <h1 className='text-[2.5rem] text-center font-semibold mt-7 text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC]'>Start today and unlock</h1>
        <h1 className='text-[2.5rem] text-center font-semibold mt-[-10px] text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC]'>the power of our shipping platform</h1>
        <p className='text-[#21066f] mt-9 text-center'>Join us now - no subscription or hidden fees. <br /> Just the best shipping rates.</p>
        <button className='w-[10rem] h-[3rem] rounded-lg bg-gradient-to-b from-[#231645] to-[#4507CC] text-white mt-5'>Start shipping</button>


      </div>
    </div>
  )
}

export default Testimonial