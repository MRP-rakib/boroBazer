import React, { useState } from 'react'
import Container from '../ui/Container'
import boroBazer from '../../assets/logo.svg'
import { Link } from 'react-router'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


function Navbar() {
  const [hoverTrue, setHoverTrue] = useState(false)
  const handelHoverIn = () => {
    setHoverTrue(true)
  }
  const handelHoverOut = () => {
    setHoverTrue(false)
  }
  return (
    <div>
      <Container>
        <nav className='flex py-4 items-center justify-between'>
          <div className='flex items-center gap-5 xl:gap-15'>
            <img src={boroBazer} alt="logo" />
            <ul className='hidden lg:flex gap-5 xl:gap-10 items-center text-[16px] xl:text-[18px] capitalize'>
              <li className='hover:text-primary relative cursor-pointer group'>
                <Link className='custom-underline' to='/'>home</Link>
              </li>
              <li className='relative group'>
                <span className='cursor-pointer custom-underline hover:text-primary flex items-center'>
                  categories <span className='group-hover:rotate-180 transition-all duration-300 text-gray-400 group-hover:text-primary'><IoIosArrowDown /></span>
                </span>
                 <span className='absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-10 transition-all duration-300 top-15 left-0 w-[200px] p-4 bg-white shadow-2xl flex flex-col rounded'>
                  <Link className='hover:text-primary '>page1</Link>
                </span>
              </li>
              <li className='relative group'>
                <span className='cursor-pointer custom-underline hover:text-primary flex items-center'>
                  deitery <span className='group-hover:rotate-180 transition-all duration-300 text-gray-400 group-hover:text-primary'><IoIosArrowDown /></span>
                </span>
                
                <span className=' absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-10 transition-all duration-300 top-15 left-0 w-[200px] p-4 bg-white shadow-2xl flex flex-col rounded'>
                  <Link className='hover:text-primary'>page1</Link>
                </span>
              </li>
              <li className=' relative hover:text-primary'>
                <Link className='custom-underline'>search</Link>
              </li>
              <li className=' relative hover:text-primary'>
                <Link className='custom-underline'>shops</Link>
              </li>
              <li  className='relative group'>
                <span className='cursor-pointer custom-underline hover:text-primary flex items-center'>
                  pages <span className='group-hover:rotate-180 transition-all duration-300 text-gray-400 group-hover:text-primary'><IoIosArrowDown /></span>
                </span>
                
                <span className=' absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-10 transition-all duration-300 top-15  left-0 w-[200px] p-4 bg-white shadow-2xl flex flex-col rounded'>
                  <Link className='hover:text-primary'>page1</Link>
                </span>
              </li>
            </ul>
          </div>
          <div className='capitalize lg:hidden flex items-center gap-1'>
            <img className='w-5 h-5 border rounded-full' src="" alt="icon" />
            <p>english-en</p>
          </div>
          <div className='hidden lg:flex items-center gap-4 xl:gap-10 capitalize text-[16px] lg:text-[18]'>
            <span className='text-3xl'>
              <IoIosSearch />
            </span>
            <span className='capitalize flex items-center gap-1'>
              <img className='w-5 h-5 border rounded-full' src="" alt="icon" />
              <p>english-en</p>
            </span>
            <span className='inline-flex items-center'>
              <span className=' relative text-3xl'>
                <MdOutlineShoppingBag />
                <p className=' absolute text-[11px] w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white top-0 right-0'>0</p>
              </span>
              <p>cart</p>
            </span>
            <span className='flex items-center gap-1'>
              <span className='text-2xl'>
                <FaRegCircleUser />
              </span>
              <p>sign in</p>
            </span>
          </div>
        </nav>
      </Container>


    </div>
  )
}

export default Navbar