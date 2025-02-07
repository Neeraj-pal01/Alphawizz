import React from 'react'
import patternImg from '../../assets/img/templatePattern.png';
import bannerImg from '../../assets/img/banner.png';
import watchIntro from '../../assets/img/watch-intro.png';
import '../../App.css'



export default function Header() {
  return (
    <>
      <div className='bg-[#FAEDE3]' >
        <div className='relative'>

          <div className='absolute top-0 right-0 h-48 w-48 bg-cover bg-no-repeat' style={{
            backgroundImage: `url(${patternImg})`,
          }}>
          </div>
        </div>
        <div className='w-[85%] mx-auto  flex justify-between'>

          <div className='w-[55%] my-20  text-[#101828]'>
            <h1 className='text-[80px] leading-[88px] tracking-[-0.5%] font-bold w-full'>We are <span className='text-[#006D77]'> awesome teame </span> for your bussiness Dream</h1>
            <h3 className='text-2xl font-mono mt-10'>Integrated workflow designed for product teams. We create world-class development and branding..</h3>
            <div className='flex gap-4 mt-10 items-center'>
              <button className='font-bold text-xl text-center bg-[#101828] text-white p-5 rounded-full hover:text-[#101828] hover:bg-white transition-colors duration-300 ease-in-out'>Get Start →</button>
              <button className='font-bold text-xl'>Learn More →</button>
            </div>

          </div>
          <div className=' w-[40%]'>
            <div className='relative h-[635px] w-full'>

              <div className='bottom-0 anime2 top-[50%] -left-18 z-20 w-full h-full text-white font-bold text-2xl flex items-center justify-center absolute' style={
                {
                  backgroundImage: `url(${watchIntro})`,
                  height: "224px",
                  width: "176px",
                  backgroundSize: "cover"
                }
              }>
                <span className='font-bold text-3xl px-2  text-center'> Watch Intro Video</span>
                <span className='p-3 absolute -left-5 bg-white rounded-full'><svg class="h-6 w-6 text-black" viewBox="0 0 24 24" fill="fill" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg></span>
              </div>
              <img className='max-w-full z-10 absolute bottom-0 anime' src={bannerImg} alt="" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
