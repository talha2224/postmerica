import React from 'react'

const Footer = () => {
  return (

    <div style={{ backgroundImage: `url(./asessts/footer.png)` }} className='mt-[3rem] h-[479.5px] w-[100%] flex justify-between items-start py-20 relative flex-wrap'>


      <p className='text-xl text-[#231645] font-semibold absolute right-0 top-14'>Save time and money on shipping.</p>

      <div>
        <div className='flex items-center gap-x-4'>
          <img src="./asessts/logo.png" alt="" />
          <p className='text-[#231645] text-xl font-medium'>Postmerica</p>
        </div>

        <div className='flex items-center gap-x-4 mt-10'>
          <button className='bg-[#FDFDFD] border border-gray-200 shadow-shadow1 text-[#231645] w-[81px] h-[40px] rounded-[10px] font-medium'>Sign up</button>
          <button className='text-[#231645] w-[81px] h-[40px] rounded-[10px] font-medium'>Login</button>
        </div>

        <img src="./asessts/social.png" alt="" className='mt-[5rem]' />
      </div>


      <div className='flex gap-x-[2rem] sm:gap-x-[10rem] items-start mt-[3rem]'>
        <div>
          <p className='text-[#99A0AE] mb-2 cursor-pointer'>Product</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Process</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Services</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Pricing</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Work</p>
        </div>
        <div>
          <p className='text-[#99A0AE] mb-2 cursor-pointer'>Docs</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Process</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Services</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Pricing</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Work</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Blog</p>

        </div>
        <div>
          <p className='text-[#99A0AE] mb-2 cursor-pointer'>Support</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Process</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Services</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Pricing</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Work</p>
          <p className='text-[#231645] mb-2 cursor-pointer'>Blog</p>
        </div>
      </div>


      <div className=' sm:absolute bottom-7 flex justify-between items-center w-[100%] text-[#B7BCB8] flex-wrap'>

        <div>
          <p>Postmerica 2024</p>
        </div>

        <div className='flex items-center gap-x-5'>
          <p>Terms & Conditions</p>
          <p>Privacy</p>
          <p>Policy & Cookies</p>
        </div>

      </div>



    </div>

  )
}

export default Footer