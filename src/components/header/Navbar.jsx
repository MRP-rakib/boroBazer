import React, { useState } from 'react'
import Container from '../ui/Container'
import boroBazer from '../../assets/logo.svg'
import { Link } from 'react-router'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


function Navbar() {
  const [hoverTrue, setHoverTrue] = useState(false)
  const handelHoverIn = () => {
    setHoverTrue(true)
  }
  const handelHoverOut = () => {
    setHoverTrue(false)
  }
  const [menuOpen, setMenuOpen] = useState(false)
  const handelMenuOpen = () => {
    setMenuOpen(true)
  }
  const handelMenuClose = () => {
    setMenuOpen(false)
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
              <li className='relative group'>
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
      <MobileMenu handelMenuOpen={handelMenuOpen} />
      <Menu menuOpen={menuOpen} handelMenuClose={handelMenuClose} />

    </div>

  )
}
const MobileMenu = ({ handelMenuOpen }) => {
  return (
    <div className='fixed lg:hidden bottom-0 w-full py-4 bg-white'>
      <ul className='flex w-[90%] mx-auto items-center justify-between text-2xl'>
        <li onClick={handelMenuOpen}>
          <RiMenu2Fill />
        </li>
        <li>
          <IoIosSearch />
        </li>
        <li>
          <Link to='/'><AiOutlineHome /></Link>
        </li>
        <li>
          <span className=' relative text-3xl'>
            <MdOutlineShoppingBag />
            <p className=' absolute text-[11px] w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white top-0 right-0'>0</p>
          </span>
        </li>
        <li>
          <FaRegCircleUser />
        </li>
      </ul>
    </div>
  )
}
const Menu = ({ menuOpen, handelMenuClose }) => {
  const [openMenu,setMenu] = useState(null)
  const handelMenu=(menu)=>{
    setMenu(openMenu===menu?null:menu)
  }
  return (
    <div className={` lg:hidden fixed overflow-hidden flex justify-between flex-col transition-all duration-500 left-0 top-0 bg-white
     ${menuOpen ? "w-full " : "w-0 "} h-screen z-10`}>
      
        <div className='py-4 w-full left-0 bg-white border-b border-[rgba(0,0,0,0.2)]'>
        <div className='w-[90%] mx-auto flex items-center justify-between'>
          <img src={boroBazer} alt="logo" />
          <span onClick={handelMenuClose} className='text-2xl font-bold'><IoMdClose /></span>
        </div>
      </div>

      <div className='flex-1 overflow-y-auto pt-5'>
        <Container>
          <ul className=' flex flex-col gap-3 text-[16px] font-semibold capitalize'>
            <li className=' hover:text-primary cursor-pointer group'>
              <Link className='' to='/'>home</Link>
            </li>
            <li onClick={()=>handelMenu('categories')} className=' cursor-pointer group'>
              <span className={`cursor-pointer ${openMenu==='categories'&&'text-primary'} flex items-center justify-between`}>
                categories <span className={`${openMenu==='categories'&&'rotate-180 text-primary'} transition-all duration-300
                   text-gray-400 `}><IoIosArrowDown /></span>
              </span>
              {openMenu==='categories'&&<span className='pl-3 pt-3 flex flex-col gap-2'>
                <Link className='hover:text-primary '>page1</Link>
              </span>}
            </li>
            <li onClick={()=>handelMenu('dietary')} className=' cursor-pointer group'>
              <span className={`cursor-pointer ${openMenu==='dietary'&&'text-primary'} flex items-center justify-between`}>
                dietary <span className={`${openMenu==='dietary'&&'rotate-180 text-primary'} transition-all duration-300
                   text-gray-400 `}><IoIosArrowDown /></span>
              </span>
              {openMenu==='dietary'&&<span className='pl-3 pt-3 flex flex-col gap-2'>
                <Link className='hover:text-primary '>page1</Link>
              </span>}
            </li>
            <li className=' hover:text-primary'>
              <Link className=''>search</Link>
            </li>
            <li className=' hover:text-primary'>
              <Link className=''>shops</Link>
            </li>
            <li onClick={()=>handelMenu('pages')} className=' cursor-pointer group'>
              <span className={`cursor-pointer ${openMenu==='pages'&&'text-primary'} flex items-center justify-between`}>
                pages <span className={`${openMenu==='pages'&&'rotate-180 text-primary'} transition-all duration-300
                   text-gray-400 `}><IoIosArrowDown /></span>
              </span>
              {openMenu==='pages'&&<span className='pl-3 pt-3 flex flex-col gap-2'>
                <Link className='hover:text-primary '>page1</Link>
              </span>}
            </li>
          </ul>
        </Container>
      </div>
      

      <div className='py-4 bottom-0 w-full bg-white border-t border-[rgba(0,0,0,0.2)] '>
        <div className='flex items-center justify-center gap-4'>
          <span><CiFacebook /></span>
          <span><FaXTwitter /></span>
          <span><CiYoutube /></span>
          <span><IoLogoInstagram /></span>
        </div>
      </div>

    </div>
  )
}
export default Navbar