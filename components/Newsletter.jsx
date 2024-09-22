import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex justify-center items-center w-[100%] mt-[3rem]'>
      <div className=' bg-[#231645] md:w-[81%] p-2 rounded-[24px] flex justify-center items-center h-[440px] flex-col'>
        <button className='text-[#DCD5FF] shadow-shadow1 bg-[#231645] w-[150px] h-[32px] rounded-[24px] font-medium'>Newsletter</button>
        <h1 className='text-[2.5rem] text-center font-semibold mt-7 text-white'>Keep up-to-date with the latest</h1>
        <p className='text-[#DCD5FF] text-center'></p>
        <div className='flex justify-center items-center gap-x-6 mt-10 flex-wrap'>
          <input type="text" name="" id=""  placeholder='Placeholder text....' className='outline-none bg-black px-3 rounded-md w-[20rem] h-[2.8rem] text-white mt-2'/>
          <button className='text-[#DCD5FF] shadow-shadow1 bg-[#7D52F4] w-[95px] h-[40px] rounded-[10px] font-medium mt-2'>Subscribe</button>
        </div>
        <p className='mt-5 text-center text-[#c4c4c4]'>Your personal data is protected</p>
      </div>
    </div>
  )
}

export default Newsletter