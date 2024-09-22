import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (

    <div className='mt-[25rem] flex justify-center items-center relative'>

      <div className='border border-[#E1E4EA] rounded-xl w-[100%] md:w-[80%] lg:w-[60%] flex justify-center items-center flex-col pt-5 pb-[4rem] '>
        <p className='text-[#21066F]'>Compatible with</p>

        <div className='flex justify-center items-center gap-x-5 mt-6'>
          <Image src={"/asessts/dhl.png"} width={150} height={150} />
          <Image src={"/asessts/ups2.png"} width={50} height={50} />
          <Image src={"/asessts/ups.png"} width={150} height={150} />
        </div>

        <img src={"/asessts/line.png"} className='w-[100%]' />

        <p className='text-[#21066F]'>Trusted by 500+ renowned businesses</p>


        <div className='flex justify-center items-center gap-x-5 mt-6'>
          <Image src={"/asessts/icon1.png"} width={40} height={40} />
          <Image src={"/asessts/icon2.png"} width={40} height={40} />
          <Image src={"/asessts/icon3.png"} width={40} height={40} />
          <Image src={"/asessts/icon4.png"} width={40} height={40} />
          <Image src={"/asessts/icon5.png"} width={40} height={40} />
        </div>


      </div>


      <div className=' absolute bottom-[-12%] w-[98%] md:w-[80%] lg:w-[60%] p-2 flex justify-center items-center'>
        <div className='w-fit h-[4rem] rounded-[20px] p-3 border border-[#E1E4EA] bg-[#FDFDFD] flex justify-between items-center'>
          <Image src={"/asessts/logo.png"} width={50} height={50} />
          <Image src={"/asessts/star.svg"} width={50} height={50} />
        </div>
      </div>

    </div>

  )
}

export default Partners