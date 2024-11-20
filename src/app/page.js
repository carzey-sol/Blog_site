'use client'
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Aside from './components/aside';
import Hero from './components/hero';
import Footer from './components/footer';
import Trending from './components/Trending';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <Navbar />
      <div className="pt-16 block md:flex justify-between ">
        <div className='text-[#3d5280]'><Aside /></div>
        <div className='center mx-auto flex flex-col '>
          <Trending />
          <Hero />
        </div>
      </div>
      <Footer />
    </div>
  );
}
