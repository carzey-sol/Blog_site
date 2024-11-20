'use client';
import { useState, useEffect } from "react";
import blogData from './home.json';
import Link from "next/link";
import { FaBlogger } from "react-icons/fa";
const Home = () => {
  return (
    <div >
    <h1 className="text-center flex items-center text-xl gap-2 font-bold text-[#3d5280] "><FaBlogger />Blogs</h1>
    <div className=" grid grid-cols-1 md:grid-cols-2 ">
      {blogData.map((blog, index) => (
        <div key={index} className=" mt-4 w-[300px] md:w-[580px] p-4 rounded  md:hover:scale-[1.05] transition-all duration-300 text-left ">
          <h1 className="text-xl font-bold mb-2 hover:underline">{blog.title}</h1>
          <img src={blog.image} className="w-[300px] h-[300px] mb-2 md:w-[400px] md:h-[300px] " />
          <p className="w-[280px] md:w-[400px] text-left hover:underline">{blog.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Home;
