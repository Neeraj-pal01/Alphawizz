import React from 'react'
import { NavLink } from 'react-router-dom'
import logo1 from '../../assets/img/logo1.png'
import logo2 from '../../assets/img/logo2.png'
export default function Navbar() {
  return (
    <>
      <nav className=''>
        <div className=''>
          <div className='flex justify-around items-center h-28 '>
            <NavLink><img className='w-44 object-cover' src={logo2} alt="" /></NavLink>
            <ul className='flex gap-9 '>
              <li className='group relative flex items-center justify-center flex-col *:first:text-xl *:first:hover:text-[#006D77]'>
                <NavLink>Home</NavLink>
                <ul className=' bg-white mt-6 absolute z-10 top-full p-4 invisible group-hover:visible grid grid-cols-2  opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out items-center justify-center min-w-64 gap-5 shadow-lg rounded-lg *:hover:text-[#006D77] *:hover:pl-1 '>
                  <li>Homepage-1</li>
                  <li>Homepage-2</li>
                  <li>Homepage-3</li>
                  <li>Homepage-4</li>
                  <li>Homepage-5</li>
                  <li>Homepage-6</li>
                  <li>Homepage-7</li>
                  <li>Homepage-8</li>
                </ul>
              </li>


              
              <li className='group relative flex items-center justify-center flex-col *:first:text-xl *:first:hover:text-[#006D77]'>
                <NavLink>About</NavLink>
                <ul className=' bg-white mt-6 absolute z-10 top-full p-3 invisible group-hover:visible flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out items-center justify-center min-w-64 gap-5 shadow-lg rounded-2xl *:hover:text-[#006D77] *:hover:pl-1 '>
                  <li>About Us - 1</li>
                  <li>About Us - 2</li>
                  <li>About Us - 3</li>
                  
                </ul>
              </li>


              <li className='group relative flex items-center justify-center flex-col *:first:text-xl *:first:hover:text-[#006D77]'>
                <NavLink>Payment</NavLink>
                <ul className=' bg-white mt-6 absolute z-10 top-full p-3 invisible group-hover:visible grid grid-cols-2  opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out items-center justify-center min-w-64 gap-5 shadow-lg rounded-2xl *:hover:text-[#006D77] *:hover:pl-1 '>
                  <li>Homepage-1</li>
                  <li>Homepage-2</li>
                  <li>Homepage-3</li>
                  <li>Homepage-4</li>
                  <li>Homepage-5</li>
                  <li>Homepage-6</li>
                  <li>Homepage-7</li>
                  <li>Homepage-8</li>
                </ul>
              </li>


              <li className='group relative flex items-center justify-center flex-col *:first:text-xl *:first:hover:text-[#006D77]'>
                <NavLink>Portfolio</NavLink>
                <ul className=' bg-white mt-6 absolute z-10 top-full p-3 invisible group-hover:visible grid grid-cols-2  opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out items-center justify-center min-w-64 gap-5 shadow-lg rounded-2xl *:hover:text-[#006D77] *:hover:pl-1 '>
                  <li>Homepage-1</li>
                  <li>Homepage-2</li>
                  <li>Homepage-3</li>
                  <li>Homepage-4</li>
                  <li>Homepage-5</li>
                  <li>Homepage-6</li>
                  <li>Homepage-7</li>
                  <li>Homepage-8</li>
                </ul>
              </li>


              <li className='group relative flex items-center justify-center flex-col *:first:text-xl *:first:hover:text-[#006D77]'>
                <NavLink>Career</NavLink>
                <ul className=' bg-white mt-6 absolute z-10 top-full p-3 invisible group-hover:visible grid grid-cols-2  opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out items-center justify-center min-w-64 gap-5 shadow-lg rounded-2xl *:hover:text-[#006D77] *:hover:pl-1 '>
                  <li>Homepage-1</li>
                  <li>Homepage-2</li>
                  <li>Homepage-3</li>
                  <li>Homepage-4</li>
                  <li>Homepage-5</li>
                  <li>Homepage-6</li>
                  <li>Homepage-7</li>
                  <li>Homepage-8</li>
                </ul>
              </li>
              <li className='group relative flex items-center justify-center flex-col *:first:text-xl *:first:hover:text-[#006D77]'>
                <NavLink>Gallery</NavLink>
                <ul className=' bg-white absolute z-10 mt-6 top-full p-3 invisible group-hover:visible grid grid-cols-2  opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out items-center justify-center min-w-64 gap-5 shadow-lg rounded-2xl *:hover:text-[#006D77] *:hover:pl-1 '>
                  <li>Homepage-1</li>
                  <li>Homepage-2</li>
                  <li>Homepage-3</li>
                  <li>Homepage-4</li>
                  <li>Homepage-5</li>
                  <li>Homepage-6</li>
                  <li>Homepage-7</li>
                  <li>Homepage-8</li>
                </ul>
              </li>
              <li className='group relative flex items-center justify-center flex-col *:first:text-xl *:first:hover:text-[#006D77]'>
                <NavLink>Services</NavLink>
                <ul className=' bg-white absolute z-10 top-full mt-6 p-3 invisible group-hover:visible flex flex-col  opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out justify-center min-w-64 gap-5 shadow-lg rounded-2xl *:hover:text-[#006D77] *:hover:pl-1 '>
                  <li>Mobile App Development</li>
                  <li>Website Development</li>
                  <li>Ecommerce Website Design</li>
                  <li>Digital Marketing Services</li>
                  
                </ul>
              </li>

              <li className='group relative flex items-center justify-center flex-col *:first:text-xl *:first:hover:text-[#006D77]'>
                <NavLink>Contact Us</NavLink>
                <ul className=' bg-white absolute z-10 mt-6 top-full p-3 invisible group-hover:visible grid grid-cols-2  opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out items-center justify-center min-w-64 gap-5 shadow-lg rounded-2xl *:hover:text-[#006D77] *:hover:pl-1 '>
                  <li>Homepage-1</li>
                  <li>Homepage-2</li>
                  <li>Homepage-3</li>
                  <li>Homepage-4</li>
                  <li>Homepage-5</li>
                  <li>Homepage-6</li>
                  <li>Homepage-7</li>
                  <li>Homepage-8</li>
                </ul>
              </li>

            </ul>
            <div className='p-4 flex flex-col space-y-2 *:block group *:transition-all *:ease-in-out *:duration-500'>
              <span className= 'group-hover:rotate-45 group-hover:translate-y-1.5 w-6 h-0.5 rounded-full bg-black'></span>
              <span className= 'group-hover:-rotate-45 group-hover:-translate-y-1.5 w-6 h-0.5 rounded-full bg-black'></span>
              <span className= 'group-hover:opacity-0  w-6 h-0.5 rounded-full bg-black'></span>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}
