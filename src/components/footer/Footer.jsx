import React from 'react'
import Container from '../ui/Container'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaCcMastercard, FaCcVisa, FaCcPaypal, FaCcJcb } from 'react-icons/fa'
import boroBazer from '../../assets/logo.svg'

function Footer() {
  return (
    <footer className="bg-white mt-8 text-gray-700 text-sm">
      <Container>
        <div className="grid grid-cols-1 text-[18px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between gap-8 py-10">
          {/* Brand and description */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center gap-2 mb-3">
              <img src={boroBazer} alt="" />
            </div>
            <p className="mb-4 text-base">We offer high-quality foods and the best delivery service, and the food market you can blindly trust</p>
            <div className="flex gap-3 text-xl text-[#02B290]">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* About Us */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-semibold mb-3">About Us</h3>
            <ul className="space-y-2 text-base">
              <li><a href="#" className="hover:text-[#02B290]">About us</a></li>
              <li><a href="#" className="hover:text-[#02B290]">Contact us</a></li>
              <li><a href="#" className="hover:text-[#02B290]">About team</a></li>
              <li><a href="#" className="hover:text-[#02B290]">Customer Support</a></li>
            </ul>
          </div>

          {/* Our Information */}
          <div className="flex-1 min-w-[180px]">
            <h3 className="font-semibold mb-3">Our Information</h3>
            <ul className="space-y-2 text-base">
              <li><a href="#" className="hover:text-[#02B290]">Privacy policy update</a></li>
              <li><a href="#" className="hover:text-[#02B290]">Terms & conditions</a></li>
              <li><a href="#" className="hover:text-[#02B290]">Return Policy</a></li>
              <li><a href="#" className="hover:text-[#02B290]">Site Map</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-semibold mb-3">Community</h3>
            <ul className="space-y-2 text-base">
              <li><a href="#" className="hover:text-[#02B290]">Announcements</a></li>
              <li><a href="#" className="hover:text-[#02B290]">Answer center</a></li>
              <li><a href="#" className="hover:text-[#02B290]">Discussion boards</a></li>
              <li><a href="#" className="hover:text-[#02B290]">Giving works</a></li>
            </ul>
          </div>

          {/* Subscribe Now */}
          <div className="flex-1 min-w-[220px]">
            <h3 className="font-semibold mb-3">Subscribe Now</h3>
            <p className="mb-3 text-base">Subscribe your email for newsletter and featured news based on your interest</p>
            <form className="flex items-center border rounded-md overflow-hidden">
              <span className="px-3 text-gray-400">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8"/></svg>
              </span>
              <input type="email" placeholder="Write your email here" className="flex-1 py-2 px-2 outline-none text-base" />
              <button type="submit" className="bg-[#02B290] px-4 py-2 text-white hover:bg-[#029e7e]">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t pt-5 pb-3 gap-4">
          <div>
            <span className="text-xs">© Copyright 2025 REDQ  All rights reserved</span>
          </div>
          <div className="flex gap-3 text-2xl text-gray-400">
            <FaCcMastercard />
            <FaCcVisa />
            <FaCcPaypal />
            <FaCcJcb />
            {/* <SiSkrill /> */}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer