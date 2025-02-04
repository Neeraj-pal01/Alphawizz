import React from 'react'
import patternImg from '../../assets/img/templatePattern.png';



export default function Header() {
  return (
    <>
    <div className='bg-[#fbeaf2] h-[80vh] relative' >
       <div className='absolute top-0 right-0 h-48 w-48 bg-cover bg-no-repeat' style={{
        backgroundImage: `url(${patternImg})`,
       }}>
       </div>
       <div className='w-[85%] mx-auto flex justify-between'>

       <div className='w-[60%] my-20 text-[#101828]'>
       <h1 className='text-[80px] leading-[88px] tracking-[-0.5%] font-bold w-full'>We are <span className='text-[#006D77]'> awesome teame </span> for your bussiness Dream</h1>

       </div>
       <div className='w-auto'>
       </div>

       </div>
    </div>
    </>
  )
}
