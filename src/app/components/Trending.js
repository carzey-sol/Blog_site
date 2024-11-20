'use client';
import { useState, useEffect } from "react";
import blogData from './home.json';
import { FaFireAlt, FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Trending = () => {
    return (
        <div className="flex flex-col items-center mt-2 md:-ml-[150px]">
            <h1 className="mb-2 font-bold flex items-center gap-2 "><FaFireAlt />Trending</h1>
            
            <div className="w-[1000px] h-32 overflow-x-auto whitespace-nowrap scrollbar-hide  ">
            <div className="absolute hidden md:block md:mt-12 text-xl"><FaChevronCircleLeft /></div>
                {blogData.map((blog, index) => (
                    <div key={index} className="inline-block ml-2 mt-2">
                        <div className="flex p-4 items-center gap-4 bg-slate-200 rounded">
                            <img src={blog.image} className="w-[64px] h-[64px]" />
                            <h1 className="w-[128px] text-wrap line-clamp-3">{blog.title}</h1>
                        </div>
                        
                    </div>
                ))}
<div className="absolute hidden md:block text-xl md:ml-[980px] md:-mt-16"><FaChevronCircleRight /></div>
            </div>
        </div>
    )
}

export default Trending