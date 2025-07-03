import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import Login from '../pages/login'


function RouteLayout() {
  return (
    <>
    {/* <Login/> */}
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RouteLayout