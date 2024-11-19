'use client'
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Aside from './components/aside';
import Hero from './components/hero';
import Footer from './components/footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Navbar />
      <div className="pt-16 block md:flex justify-between ">
        <Aside />
        <div className='center mx-auto'>
        <Hero />
        </div>
      </div>
      <Footer />
    </div>
  );
}
