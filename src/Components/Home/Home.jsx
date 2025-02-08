import React, { useState } from 'react'
import Header from './Header'
import logo1 from '../../assets/svg/sample-logo-1.svg'
import logo2 from '../../assets/svg/sample-logo-2.svg'
import logo3 from '../../assets/svg/sample-logo-3.svg'
import logo4 from '../../assets/svg/sample-logo-4.svg'
import logo5 from '../../assets/svg/sample-logo-5.svg'

import bussiness from '../../assets/svg/business-strategy.svg'
import local from '../../assets/svg/local.svg'
import social from '../../assets/svg/social.svg'

import leaf from '../../assets/svg/icon-leaf.svg'
import photo from '../../assets/img/img-2.png'



import img1 from '../../assets/img/branding.png'
import img2 from '../../assets/img/development.jpg'
import img3 from '../../assets/img/animation.jpg'
import img4 from '../../assets/img/userExperience.jpg'
import img5 from '../../assets/img/socialNetwork.jpg'
import img6 from '../../assets/img/marketing.jpg'
import chart from '../../assets/img/chart.png'
import Swiper from '../swiper/Swiper'
import '../../App.css'



export default function Home() {
  const tabs = ['Branding', 'Devlelopment', 'Animation', 'User Experience', 'Social Network', 'Marketing']
  const [active, setactive] = useState(0)
  const headings = [
    "Optimize and scale, easy to start",
    "Design Studios That Everyone Should Know",
    "We can blend colors multiple ways",
    "Choose The Best Plan That's For You",
    "Subscribe our newsletter to get gift",
    "Ready to get started? Create an Account"
  ];
  const imgs = [img1, img2, img3, img4, img5, img6]
  const card = [{ name: "Wade Warren", img: "https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-1.png", company: "Louis Vuitton" }, { name: "Brooklyn Simmons", img: "https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-2.png", company: "Nitendo" }, { name: "Jenny Wilson", img: "https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png", company: "Starbucks" }, { name: "Albert Flores", img: "https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-4.png", company: "Bank Of America" }]
  const [btnClk, SetBtnClk] = useState(false)
  return (
    <>
      <Header />
      <section className='w-[85%] mx-auto py-10 flex flex-col gap-20'>
        <div className='flex justify-around items-center my-5'>
          <div className='flex items-center justify-center p-1 hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-2xl'> <img className='h-20 w-36' src={logo1} alt="img" /></div>
          <div className='flex items-center justify-center p-1 hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-2xl'> <img className='h-20 w-36' src={logo2} alt="img" /></div>
          <div className='flex items-center justify-center p-1 hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-2xl'> <img className='h-20 w-36' src={logo3} alt="img" /></div>
          <div className='flex items-center justify-center p-1 hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-2xl'> <img className='h-20 w-36' src={logo4} alt="img" /></div>
          <div className='flex items-center justify-center p-1 hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-2xl'> <img className='h-20 w-36' src={logo5} alt="img" /></div>
        </div>
        <div className='w-1/2 flex flex-col gap-6 py-5 mx-auto'>
          <h1 className='text-6xl text-[#101828] text-center font-bold'>See why we are trusted
            the world over</h1>
          <p className='text-center text-gray-600 text-xl'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla...</p>
        </div>
        <div>


          <div className='flex items-center  justify-evenly'>
            {tabs.map((i, index) => (
              <div
                onClick={() => setactive(index)}
                key={index}
                className={`p-5 bg-gray-100 text-lg  hover:border rounded-full hover:border-[#006D77] hover:-translate-y-1 transition-all duration-300 hover:text-[#006D77] font-semibold  ${active == index ? "border border-[#006D77] text-[#006D77]  " : "border border-transparent text-gray-600"}`} >
                {i}
              </div>
            ))}
          </div>
          <div className=' w-[88%] mx-auto my-10 bg-pink-100'>
            <div className='flex relative'>
              <div className='w-1/2 flex flex-col justify-center  p-14 gap-7'>
                <h1 className="text-4xl font-bold">{headings[active] || ""}</h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button className='font-bold w-fit text-lg text-center text-[#101828] bg-white p-5 rounded-full hover:bg-[#101828] hover:text-white transition-colors duration-300 ease-in-out'>Learn More →</button>
              </div>
              <div className='w-1/2'
                style={{
                  backgroundImage: `url(${imgs[active]}) `,
                  backgroundSize: 'cover',
                }}></div>
              <div className='absolute top-[50%] left-[47%] p-5 bg-white rounded-full'>
                <span><svg class="h-8 w-8 text-black" viewBox="0 0 24 24" fill="fill" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg></span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-3/4 flex flex-col gap-6 py-5 mx-auto'>
          <h1 className='text-6xl text-[#101828] text-center font-bold'>We facilitate the creation
            of strategy and design</h1>
          <p className='text-center text-gray-600 text-2xl'>Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking..</p>
        </div>

        <div className='flex flex-wrap gap-4  justify-evenly items-center '>

          <div className='w-[32%] bg-[#DBECE5] flex rounded-2xl flex-col p-12 gap-7 hover:-translate-y-1 transition-transform duration-300'>
            <img className='h-20 w-20' src={bussiness} alt="" />
            <h1 className="text-4xl font-bold">Business Strategy</h1>
            <p className='text-lg'>You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe..</p>
            <button className='font-bold w-fit text-lg text-center text-[#101828] bg-white p-5 rounded-full hover:bg-[#101828] hover:text-white transition-colors duration-300 ease-in-out'>Learn More →</button>
          </div>

          <div className='w-[32%] bg-[#D1ECFD] flex flex-col  rounded-2xl p-12 gap-7 hover:-translate-y-1 transition-transform duration-300'>
            <img className='h-20 w-20' src={local} alt="" />
            <h1 className="text-4xl font-bold">Local Marketing</h1>
            <p className='text-lg'>You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
            <button className='font-bold w-fit text-lg text-center text-[#101828] bg-white p-5 rounded-full hover:bg-[#101828] hover:text-white transition-colors duration-300 ease-in-out'>Learn More →</button>
          </div>

          <div className='w-[32%]  bg-[#FFF3EA] flex flex-col rounded-2xl  p-12 gap-7 hover:-translate-y-1 transition-transform duration-300'>
            <img className='h-20 w-20' src={social} alt="" />
            <h1 className="text-4xl font-bold">Social Media</h1>
            <p className='text-lg'>You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
            <button className='font-bold w-fit text-lg text-center text-[#101828] bg-white p-5 rounded-full hover:bg-[#101828] hover:text-white transition-colors duration-300 ease-in-out'>Learn More →</button>
          </div>
        </div>

        <div className='flex gap-10'>
          <div className='w-1/2 rounded-2xl'
            style={{ backgroundImage: `url(${photo})`, backgroundSize: 'cover' }}></div>
          <div className='w-1/2  flex flex-col gap-7 '>
            <span className='text-[#E29578] p-3 w-fit rounded-full px-5 bg-[#FFF3EA]'>What We Do, What You Get</span>
            <h3 className='text-5xl text-[#101828] font-bold'>We believe that our works can contribute to a better world.</h3>
            <p className='text-gray-600 text-2xl'>Necessary to deliver white glove, fully managed campaigns that surpass industry benchmarks.Take your career to next level.</p>
            <span className='border border-[#006D77] border-dashed mt-10'></span>
            <div className='grid grid-cols-2 gap gap-y-5'>
              <div className='space-y-5'>
                <h4 className='text-xl font-bold flex gap-3'><img src={leaf} alt="" /> Boost your sale</h4>
                <p className='text-gray-600 text-xl'>The latest design trends meet hand-crafted templates.</p>
              </div>
              <div className='space-y-5'>
                <h4 className='text-xl font-bold flex gap-3'><img src={leaf} alt="" /> Smart Installation Tools</h4>
                <p className='text-gray-600 text-xl'>The latest design trends meet hand-crafted templates.</p>
              </div>
              <div className='space-y-5'>
                <h4 className='text-xl font-bold flex gap-3'><img src={leaf} alt="" /> Introducing New Features</h4>
                <p className='text-gray-600 text-xl'>The latest design trends meet hand-crafted templates.</p>
              </div>
              <div className='space-y-5'>
                <h4 className='text-xl font-bold flex gap-3'><img src={leaf} alt="" /> Dynamic Boosting</h4>
                <p className='text-gray-600 text-xl'>The latest design trends meet hand-crafted templates.</p>
              </div>

            </div>
          </div>
        </div>
        <div className='py-10 bg-[#FFF3EA] rounded-4xl space-y-10'>
          <div className='w-1/2 mt-10 space-y-5 mx-auto'>
            <h1 className='text-6xl text-[#101828] text-center font-bold'>What We Offer</h1>
            <p className='text-center text-gray-600 text-2xl'>What makes us different from others? We give holistic solutions with strategy, design & technology.</p>
          </div>
          <Swiper />
        </div>
        {/* Customers */}
        <div>
          <h1 className='text-6xl text-[#101828] font-bold py-5'>Our Happy Customers</h1>
          <p className=' text-gray-600 text-3xl'>Know about our clients, we are a woldwide corporate brand</p>
          <div className='grid grid-cols-4 gap-5 *:odd:border-[#FAD2E1] *:even:border-[#BEE1E6] my-5'>
            {card.map((i, index) =>
              <div key={index} className=' border-8 hover:-translate-y-1 transition-all duration-300 ease-in-out p-7 py-10 space-y-5'>
                <img className='rounded-full w-14 h-14 object-cover' src={i.img} alt="" />
                <span>
                  <p className='font-bold'>{i.name}</p>
                  <span className='text-sm'>{i.company}</span>
                </span>
                <p className='text-gray-600 pt-4'>Even factoring differences in body weight between children and adults into account.</p>
              </div>
            )}
          </div>
        </div>
        {/* News */}
        <div className='flex flex-col gap-14'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-6xl text-[#101828] font-bold py-5'>Latest News</h1>
              <p className=' text-gray-600 text-3xl'>From Our blog and Event fanpage</p>
            </div>
            <div>
              <button className='font-bold text-xl text-center bg-[#101828] mt-5 text-white p-5 rounded-full hover:text-[#101828] hover:bg-white transition-colors duration-300 ease-in-out'>View More →</button>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-14 '>


            <div className='group'>
              <div className=' space-y-2 mb-5'>
                <li className='text-sm text-gray-600'>Company</li>
                <h2 className='text-2xl text-[#101828] font-bold hover:text-[#006D77]'>We Can Blend Colors Multiple Ways, The Most Common</h2>
              </div>
              <div className=' relative transition-all duration-300 ease-in-out '>
                <div className='absolute -bottom-7 rounded-2xl left-7 w-full h-full group-hover:-translate-y-3 group-hover:-translate-x-3 transition-transform duration-300 ease-in-out  bg-[#D1ECFD]'></div>
                <img className='rounded-2xl h-64 w-full shadow-2xl object-cover relative   max-w-full box-border' src={img3} alt="" />
              </div>
            </div>

            <div className='group'>
              <div className=' space-y-2 mb-5'>
                <li className='text-sm text-gray-600'>Company</li>
                <h2 className='text-2xl text-[#101828] font-bold hover:text-[#006D77]'>We Can Blend Colors Multiple Ways, The Most Common</h2>
              </div>
              <div className=' relative transition-all duration-300 ease-in-out '>
                <div className='absolute -bottom-7 rounded-2xl left-7 w-full h-full group-hover:-translate-y-3 group-hover:-translate-x-3 transition-transform duration-300 ease-in-out  bg-[#FAD2E1]'></div>
                <img className='rounded-2xl h-64 w-full shadow-2xl object-cover relative   max-w-full box-border' src={img4} alt="" />
              </div>
            </div>
            <div className='group'>
              <div className=' space-y-2 mb-5'>
                <li className='text-sm text-gray-600'>Company</li>
                <h2 className='text-2xl text-[#101828] font-bold hover:text-[#006D77]'>We Can Blend Colors Multiple Ways, The Most Common</h2>
              </div>
              <div className=' relative  transition-all duration-300 ease-in-out '>
                <div className='absolute -bottom-7 rounded-2xl left-7 w-full h-full group-hover:-translate-y-3 group-hover:-translate-x-3 transition-transform duration-300 ease-in-out  bg-[#bcb997]'></div>
                <img className='rounded-2xl h-64 w-full shadow-2xl object-cover relative   max-w-full box-border' src={img5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-10'>
        <div className='bg-[#006D77] py-10'>
          <div className='w-2/3 mx-auto flex flex-col items-center gap-10'>
            <h1 className='text-5xl w-3/5 mx-auto text-white text-center font-bold'>Choose The Best Plan That's For You</h1>
            <div className='text-white flex justify-center items-center gap-4'>
              <span>Billed Monthly</span>
              <button onClick={() => SetBtnClk(!btnClk)} aria-pressed={btnClk} className=' bg-white relative group w-14 h-7 rounded-full flex items-center'> <span className='bg-[#101828]  absolute rounded-full w-5 h-5 left-1 group-aria-pressed:translate-x-7 transition-all duration-300'></span></button>
              <span>Bill Annually</span>
            </div>
            <div className='grid grid-cols-3 gap-5'>
              {/* 1st */}
              <div className='bg-white rounded-2xl p-7 flex flex-col gap-6 shadow-2xl'>
                <h2 className='text-3xl font-bold'>{btnClk ? `$${35 * 12}` : "$35"}<span className='text-sm font-normal text-gray-500'>{btnClk ? "/year" : "/month"}</span> </h2>
                <p className='text-[#101828] font-bold text-2xl'>Standard</p>
                <p className='text-gray-400 pb-5 text-xs font-semibold border-b border-gray-300'>All the basics for businesses that are just getting started.</p>

                <ul className='list-disc pl-5 flex flex-col gap-5 text-xs font-semibold text-[#101828]'>
                  <li className='flex items-center gap-2'>
                    <span className='bg-blue-500 rounded-full '>
                      <svg className='text-white w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M9 12l2 2 4-4 1.41 1.41L11 16.83 7.59 13.41z'></path>
                      </svg>
                    </span>
                    Unlimited updates
                  </li>

                  <li className='flex items-center gap-2'>
                    <span className='bg-blue-500 rounded-full '>
                      <svg className='text-white w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M9 12l2 2 4-4 1.41 1.41L11 16.83 7.59 13.41z'></path>
                      </svg>
                    </span>
                    Custom permissions
                  </li>

                  <li className='flex items-center gap-2'>
                    <span className='bg-white rounded-full border border-gray-500 flex items-center justify-center w-5 h-5 text-gray-500'>
                      <span>X</span>
                    </span>
                    Custom designs & features
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='bg-white rounded-full border border-gray-500 flex items-center justify-center w-5 h-5 text-gray-500'>
                      <span>X</span>
                    </span>
                    Custom hashtags
                  </li>
                </ul>
                <button className='mt-5 font-bold text-xl border border-[#101828] p-2 bg-white text-[#101828] rounded-xl hover:bg-[#101828] hover:text-white transition-colors duration-300 ease-in-out'>Get Started →</button>
              </div>

              {/* 2nd */}
              <div className='bg-white rounded-2xl p-7 flex flex-col gap-6 shadow-2xl'>
                <h2 className='text-3xl font-bold'>{btnClk ? `$${89 * 12}` : "$89"}<span className='text-sm font-normal text-gray-500'>{btnClk ? "/year" : "/month"}</span> </h2>
                <p className='text-[#101828] font-bold text-2xl'>Essentials</p>
                <p className='text-gray-400 pb-5 text-xs font-semibold border-b border-gray-300'>All the basics for businesses that are just getting started.</p>

                <ul className='list-disc pl-5 flex flex-col gap-5 text-xs font-semibold text-[#101828]'>
                  <li className='flex items-center gap-2'>
                    <span className='bg-blue-500 rounded-full '>
                      <svg className='text-white w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M9 12l2 2 4-4 1.41 1.41L11 16.83 7.59 13.41z'></path>
                      </svg>
                    </span>
                    Unlimited updates
                  </li>

                  <li className='flex items-center gap-2'>
                    <span className='bg-blue-500 rounded-full '>
                      <svg className='text-white w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M9 12l2 2 4-4 1.41 1.41L11 16.83 7.59 13.41z'></path>
                      </svg>
                    </span>
                    Custom permissions
                  </li>

                  <li className='flex items-center gap-2'>
                    <span className='bg-blue-500 rounded-full '>
                      <svg className='text-white w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M9 12l2 2 4-4 1.41 1.41L11 16.83 7.59 13.41z'></path>
                      </svg>
                    </span>
                    Custom designs & features
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='bg-white rounded-full border border-gray-500 flex items-center justify-center w-5 h-5 text-gray-500'>
                      <span>X</span>
                    </span>
                    Custom hashtags
                  </li>
                </ul>
                <button className='mt-5 font-bold text-xl border border-[#101828] p-2 bg-white text-[#101828] rounded-xl hover:bg-[#101828] hover:text-white transition-colors duration-300 ease-in-out'>Get Started →</button>
              </div>

              {/* 3rd */}
              <div className='bg-white rounded-2xl p-7 flex flex-col gap-6 shadow-2xl'>
                <h2 className='text-3xl font-bold'>{btnClk ? `$${125 * 12}` : "$125"}<span className='text-sm font-normal text-gray-500'>{btnClk ? "/year" : "/month"}</span> </h2>
                <p className='text-[#101828] font-bold text-2xl'>Premium</p>
                <p className='text-gray-400 pb-5 text-xs font-semibold border-b border-gray-300'>All the basics for businesses that are just getting started.</p>

                <ul className='list-disc pl-5 flex flex-col gap-3 text-xs font-semibold text-[#101828]'>
                  <li className='flex items-center gap-2'>
                    <span className='bg-blue-500 rounded-full '>
                      <svg className='text-white w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M9 12l2 2 4-4 1.41 1.41L11 16.83 7.59 13.41z'></path>
                      </svg>
                    </span>
                    Unlimited updates
                  </li>

                  <li className='flex items-center gap-2'>
                    <span className='bg-blue-500 rounded-full '>
                      <svg className='text-white w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M9 12l2 2 4-4 1.41 1.41L11 16.83 7.59 13.41z'></path>
                      </svg>
                    </span>
                    Custom permissions
                  </li>

                  <li className='flex items-center gap-2'>
                    <span className='bg-blue-500 rounded-full '>
                      <svg className='text-white w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M9 12l2 2 4-4 1.41 1.41L11 16.83 7.59 13.41z'></path>
                      </svg>
                    </span>
                    Custom designs & features
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='bg-blue-500 rounded-full '>
                      <svg className='text-white w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M9 12l2 2 4-4 1.41 1.41L11 16.83 7.59 13.41z'></path>
                      </svg>
                    </span>
                    Custom hashtags
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='bg-blue-500 rounded-full '>
                      <svg className='text-white w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M9 12l2 2 4-4 1.41 1.41L11 16.83 7.59 13.41z'></path>
                      </svg>
                    </span>
                    Custom instructors
                  </li>
                </ul>
                <button className='mt-4 font-bold text-xl border border-[#101828] p-2 bg-white text-[#101828] rounded-xl hover:bg-[#101828] hover:text-white transition-colors duration-300 ease-in-out'>Get Started →</button>
              </div>
            </div>
          </div>

        </div>
        <div className='w-3/4 mx-auto py-5 rounded-2xl bg-[#FFF3EA] flex'>
          <div className='w-[40%] p-5 px-10 flex flex-col gap-7'>
            <span className='text-gray-600'>NEWSLETTER</span>
            <h1 className='text-5xl font-bold text-[#101828]'>Subscribe our newsletter</h1>
            <p>By clicking the button, you are agreeing with our
              <span className='text-[#1B6F70] hover:text-[#78b8b9] p-1'>Term & Conditions</span></p>
              <div className='relavtive bg-white rounded-full'><input className='p-5 w-[80%]  bg-white z-0 outline-none rounded-full' type="Email" placeholder='Enter Your Email' /><span className='p-2 px-3 font-bold text-2xl  z-10 bg-[#1B6F70] text-white  rounded-full'> →</span></div>
          </div>
          <div className='w-[60%] flex items-center relative'>
            <img className='rounded-2xl absolute z-10 anime2 h-48 max-w-64 object-cover' src={chart} alt="" />
            <img className='rounded-2xl absolute z-0 right-[20%] -bottom-[20%]  h-full max-w-80 object-cover' src={photo} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
