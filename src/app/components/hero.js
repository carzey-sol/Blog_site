'use client'
import { useState, useEffect } from "react"
import blogData from './home.json';
import Link from "next/link";

const home = () => {
  return (
    // <div className='flex justify-center md:ml-[22%] mt-2 w-[650px] '>
    //   <div className="">
    //   <Link href='/blog' >
    //  {blogData.map((blog, index) => (
    //   <div key={index} className=" mb-[32px] hover:scale-[1.05] transition-all duration-300 bg-slate-400">
    //     <h1 className="font-bold text-xl mb-2 ">{blog.title}</h1>
    //     <img  src={blog.image} />
        
    //     <p className="w-[50%] mt-2">{blog.description}</p>
    //   </div>
    //   ))}
    //   </Link>
    //   </div>
    // </div>

    <div className="flex flex-col text-center items-center mt-12 w-[300px] p-4 bg-slate-400 rounded-xl  ml-[12%] md:ml-[20%] md:hover:scale-[1.05] transition-all duration-300 ">
      <h1 className="text-xl font-bold mb-2">Blog Title</h1>
      <img src="./cs.png" className="w-[300px] mb-2 md:w"/>
      <p className="w-[300px]"> kdmcjdasknsdadk alsdjsakd asjdnasd asjdn jaksnd jasnd asnjd asd </p>
    </div>
     

      
    )
}

export default home