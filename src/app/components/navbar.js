import React from 'react'
import { FaBlogger,  FaRegUserCircle, FaInfoCircle } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import Link from 'next/link';
import LoginButton from '../components/loginButton';
import AuthContextProvider from '../lib/contexts/AuthContext';


const navbar = () => {
  
  return (
    <div className='fixed flex items-center justify-between text-sm md:fixed md:flex w-[100%]  md:text-xl border-b-2 p-2 bg-white z-10'>
        <Link href='/'>
        <FaBlogger className='text-3xl text-[#004b68]'/>
        </Link>
        <ul className='flex gap-4 md:gap-8'>
            <li ><Link href="/about" className='flex items-center gap-2'><FaInfoCircle />About us</Link></li>
            <li><Link href="/explore" className='flex items-center gap-2'><MdExplore />Explore</Link></li>
            <li><Link href="/trending" className='flex items-center gap-2'><FaFire />Trending</Link></li>
        </ul> 
        <AuthContextProvider>
        <LoginButton />
        </AuthContextProvider>
    </div>
  )
}

export default navbar