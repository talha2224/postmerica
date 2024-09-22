import React from 'react'

const Solutions = () => {
  return (

    <div className='flex justify-center items-center flex-col mt-[5rem]'>

      <div style={{ backgroundImage: `url(./asessts/map.svg)` }} className='flex justify-center items-center bg-no-repeat bg-cover w-[100%] bg-center h-[50rem] flex-col'>

        <button className='bg-[#FDFDFD] shadow-shadow1 text-[#231645] w-[130px] h-[40px] rounded-[10px] font-medium'>The solution</button>

        <h1 className='text-[2.5rem] text-center font-semibold mt-7 text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC]'>A single platform that rapidly and</h1>
        <h1 className='text-[2.5rem] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#231645] to-[#4507CC] mt-[-10px]'>accurately delivers your shipments</h1>

        <p className='text-center mt-5 text-[#231645]'>Explore how Postmerica will save you time and money.</p>
        <button className='w-[200px] h-[40px] rounded-[10px] bg-gradient-to-b from-[#231645] to-[#4507CC] text-white text-sm mt-5'>Start shipping today</button>

      </div>


    </div>
  )
}

export default Solutions