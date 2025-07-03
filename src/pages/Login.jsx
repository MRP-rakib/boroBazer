import React from 'react'
import { useNavigate } from 'react-router'
import login from '../assets/login.webp'
import logo from '../assets/logo.svg'
import { IoMdClose } from "react-icons/io";

function Login() {
    const navigate = useNavigate()
    const handelCloseLogin = () => {
        navigate(-1)
    }
    return (
        <div className=' absolute bg-[rgba(0,0,0,0.5)] w-full h-full top-0 left-0 flex items-center justify-center'>
            <div className='overflow-hidden w-[70%] bg-white  rounded-md'>
            <div className='flex relative'>
                <div className='w-[60%] h-full'>
                    <img className=' object-cover h-full w-full' src={login} alt="image" />
                </div>
                <div className='flex flex-col items-center w-[40%] p-7.5'>
                    <div className='flex flex-col gap-3 items-center'>
                        <img src={logo} alt="logo" />
                    <h2 className='text-2xl font-bold'>Welcome Back</h2>
                    <p className='text-[rgba(0,0,0,0.5)]'>Don’t have an account?  <span className='text-primary font-bold cursor-pointer'>Create Account</span></p>
                    </div>
                </div>
                    <p className=' cursor-pointer absolute right-5 top-3 text-2xl' onClick={handelCloseLogin}><IoMdClose /></p>
            </div>
            


        </div>
        </div>

    )
}

export default Login