'use client'
import { useState, useEffect } from "react"
import blogData from './home.json';
import Link from "next/link";

const home = () => {
  return (
    <div className=' md:ml-[22%] mt-2 '>
      <div className="">
      <Link href='/blog' >
     {blogData.map((blog, index) => (
      <div key={index} className=" mb-[32px] hover:scale-[1.05] transition-all duration-300">
        <h1 className="font-bold text-xl mb-2 ">{blog.title}</h1>
        <img  src={blog.image} />
        
        <p className="w-[50%] mt-2">{blog.description}</p>
      </div>
      ))}
      </Link>
      </div>
    </div>
     

      
    )
}

export default home