'use client'
import Image from "next/image";
import localfont from "next/font/local"
import Link from "next/link"

import { createContext, useContext, useState, useEffect } from 'react';
const zenfonts = localfont({
  src: "/fonts/ZenLoop-Regular.ttf",
  variable: "--font-zenfonts",
  weights: [400, 700],
  // size: "56px",
})

export default function Home() {



  // // Apply the dark mode class to <html> on toggle
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [darkMode]);




  return (<>

    <div className={`duration-700  dark:bg-[#b4b7bf] bg-slate-900 gird grid-cols-2 md:my-20  flex md:py-20 max-lg:flex-col ${zenfonts.className} `}>


      <div className="duration-700 flex flex-col items-center justify-center w-[40%] max-md:mt-14  mx-auto py-10 max-lg:w-[90%] drop-shadow-2xl bg-gray-5000">
        <h1 className="duration-700 text-7xl font-bold text-slate-300 dark:text-gray-950 z-0 "><span className="max-sm:hidden"> Welcome to</span><span> Link Tweak</span></h1>
        <p className="duration-700 text-3xl font-bold text-slate-400 dark:text-gray-800">The best link shortener in the world</p>

        <div className="duration-700 text-2xl  font-bold dark:text-slate-700 text-slate-300 mt-12 bg-gray-500 bg-opacity-35 rounded-3xl p-4 w-[80%] max-md:w-[90%]  drop-shadow-2xl">
          "Our platform allows you to shorten your links quickly and efficiently, providing you with detailed analytics and custom options to make your links stand out. Whether you're a marketer, a business owner, or just someone who wants to share links more effectively, Link Tweak has the tools you need to succeed. Join us today and start optimizing your links for better performance and engagement."
        </div>

        {/* nav buttons */}
        <div className="duration-700 flex justify-center items-center font-sans space-x-4 mt-8">
          <Link href='/generate'>
            <button className="duration-700 px-2 py-1 font-bold bg-gray-800 dark:slate-700 text-white rounded-md">Try Now</button>
          </Link>
          <Link href='https://github.com/Zeeshanx01' target='_blank'><button className='duration-700  dark:bg-slate-800 bg-slate-200 bg-opacity-50 rounded-full flex justify-center items-center hover:bg-slate-500 '>
            <span><img className='duration-700 w-8 invert dark:invert-0' src="icons/icons-github-cat.png" alt="" /></span>
            <span><img className='duration-700 dark:invert invert-0 w-10 mr-1' src="icons/github-logo.png" alt="" /></span>
          </button>
          </Link>

        </div>

      </div>


      <div className="duration-700 w-[60%] max-lg:w-full  flex justify-center items-center max-lg:mb-8 max-md:mb-16 ">
        <img className="duration-700 rounded-2xl w-[95%] mix-blend-darkenn hidden dark:block mx-auto drop-shadow2xl" src="/wide-cover.webp" alt="" />
        <img className="duration-700 rounded-2xl w-[95%] mix-blend-darkenn dark:hidden block mx-auto drop-shadow2xl" src="/wide-cover-darkmode.webp" alt="" />
      </div>


    </div>

{/* <div className="bg-indigo-400 w-full h-72 p-6">
<div className="w-[80vw] mx-auto h-3  bg-indigo-600 animate-spin rounded-full">
  .
</div>
</div> */}


  </>);
}
