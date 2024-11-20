'use client';
import { useState, useEffect } from "react";
import blogData from './home.json';
import { FaFireAlt } from "react-icons/fa";

const Trending = () => {
    return (
        <div className="flex flex-col items-center mt-2 ">
            <h1 className="mb-2 font-bold flex items-center gap-2"><FaFireAlt className="text-lg"/>Trending</h1>
            
            <div className="w-full h-32 overflow-x-auto whitespace-nowrap scrollbar-hide ">
            <div className="fixed hidden md:block">left arrow</div>
                {blogData.map((blog, index) => (
                    <div key={index} className="inline-block ml-2 mt-2">
                        <div className="flex p-4 items-center gap-4 bg-slate-200 rounded">
                            <img src={blog.image} className="w-[64px] h-[64px]" />
                            <h1 className="w-[128px] text-wrap line-clamp-3">{blog.title}</h1>
                        </div>
                        
                    </div>
                ))}
<div className="fixed hidden md:block">right arrow</div>
            </div>
        </div>
    )
}

export default Trending