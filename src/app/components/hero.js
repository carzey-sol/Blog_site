'use client';
import { useState, useEffect } from "react";
import blogData from './home.json';
import Link from "next/link";

const Home = () => {
  return (
    <div>
      {blogData.map((blog, index) => (
        <div key={index} className="flex flex-col text-center items-center mt-12 w-[300px] md:w-[500px] p-4  rounded ml-[12%] md:ml-[70%] md:hover:scale-[1.05] transition-all duration-300">
          <h1 className="text-xl font-bold mb-2">{blog.title}</h1>
          <img src={blog.image} className="w-[300px] h-[300px] mb-2 md:w-[400px] md:h-[300px]" />
          <p className="w-[300px]">{blog.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
