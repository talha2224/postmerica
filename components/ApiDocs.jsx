import React from 'react'

const ApiDocs = () => {
  return (

    <div className='flex justify-center items-center flex-col mt-[4.5rem]'>
      <button className='bg-[#FDFDFD] shadow-shadow1 text-[#231645] w-[200px] h-[32px] rounded-[24px] font-medium'>Api Documentation</button>
      <h1 className='text-[2.5rem] text-center font-semibold mt-7 text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC]'>The documentation you need,</h1>
      <h1 className='text-[2.5rem] text-center font-semibold mt-[-10px] text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC]'>available for free</h1>

      <div className='flex justify-center items-center gap-x-8 mt-10'>
        <p>Book a demo</p>
        <button className='bg-[#FDFDFD] shadow-shadow1 text-[#231645] w-[193px] h-[40px] rounded-[10px] font-medium'>See Documentation</button>
      </div>

      <div className='flex justify-center items-center mt-[3rem]'>
        <img src="/asessts/dashboardsmall.png" alt="" />
      </div>
    </div>

  )
}

export default ApiDocs