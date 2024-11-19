'use client'
import { useEffect, useState } from 'react';
import Navbar from "../components/navbar"
import Image from 'next/image'
import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";

const index = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className={`transition-opacity duration-500 ease-in-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <Navbar />
        <div className="flex flex-col justify-center items-center h-screen ">
          <Image
            src="/images/cs.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="border-8 border-black"
          />
          <Link href='/' ><span className="flex items-center text-2xl mt-2 hover:bg-slate-300 rounded p-2">Return Home<IoChevronBackOutline /></span></Link>
        </div>
      </div>

    </>
  )
}

export default index