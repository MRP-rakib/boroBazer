import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'

function RouteLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RouteLayout