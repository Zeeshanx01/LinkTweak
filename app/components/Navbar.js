'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import 'flowbite';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // const [darkMode, setDarkMode] = useDarkMode();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };



  console.log('Dark Mode:', darkMode);
  console.log('Dark Mode Setter:', setDarkMode);

  // Apply the dark mode class to <html> on toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>



      {/* <div className='duration-700 h-[8vh] fixed top-0 drop-shadow-2xl '> */}
      <nav className="duration-700   bg-slate-800 w-full border-gray-200 dark:bg-gray-900 h-fit fixed top-0    flex flex-wrap items-center justify-between mx-auto px-4 py-[1rem]  ">

        {/* <div className="duration-700   max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto px-4 py-[1rem] h-[8vh] fixed top-0"> */}



        <Link href="/" className="duration-700    flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/LinkTweakLogo.gif" className="duration-700   h-8" alt="Flowbite Logo" />
          <span className="duration-700   self-center text-slate-200 text-2xl font-semibold whitespace-nowrap dark:text-white">LinkTweak</span>
        </Link>



        <div className="duration-700  relative flex md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">

          <Link 
          href='/generate'
          className='m-1'
          >
            <button
              type="button"
              className="duration-700   px-4 py-3 font-bold  bg-sky-700 rounded-lg text-white  hover:bg-sky-800 text-sm  text-center dark:bg-sky-600 dark:hover:bg-sky-700  max-sm:hidden"
            >
              Get started
            </button>
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            onBlur={() => { setTimeout(() => { setIsMenuOpen(false) }, 200) }}
            className="duration-700   inline-flex items-center p-4  justify-center text-sm text-gray-800 rounded-lg md:hidden bg-slate-500  hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 max-sm:bg-transparent max-sm:text-slate-400 max-sm:hover:bg-slate-700"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="duration-700   sr-only">Open main menu</span>
            <svg
              className="duration-700   w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>


          <button
            onClick={() => setDarkMode(!darkMode)}
            // onClick={toggleDarkMode}
            // onClick={() => setDarkMode(!darkMode)}
            className="duration-700  bottom-0 p-2 rounded-lg  bg-slate-500 dark:bg-slate-700 dark:text-white text-black max-sm:bg-transparent dark:max-sm:bg-transparent max-sm:text-slate-400 max-sm:hover:bg-slate-700"
          >
            <img className='w-8' src={darkMode ? '/icons/lightmode.gif' : '/icons/darkmode.gif'} alt="" />
          </button>


        </div>




        <div
          className={`items-center duration-700 justify-between ${isMenuOpen ? 'relative -z-30  bg-slate-50 w-[100vw]' : 'hidden'
            } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >


          <ul className={` bg-opacity-60 dark:bg-opacity-60 backdrop-blur-sm dark:backdrop-blur-sm duration-700 flex flex-col  font-medium max-md:absolute max-md:z-50 max-md:w-64 right-4 top-3 p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-slate-700 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-slate-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
            <li>
              <Link
                href="/"
                // className="duration-700   block max-md:z-40 py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                className="duration-700   block  py-2 px-3 md:p-0 text-gray-200 rounded hover:bg-slate-800 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-800 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              // aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="duration-700   block  py-2 px-3 md:p-0 text-gray-200 rounded hover:bg-slate-800 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-800 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/generate"
                className="duration-700   block py-2 px-3 md:p-0 text-gray-200 rounded hover:bg-slate-800 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-800 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="duration-700   block  py-2 px-3 md:p-0 text-gray-200 rounded hover:bg-slate-800 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-800 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>

        </div>
        {/* </div> */}
      </nav>
      {/* </div> */}
    </>
  )
}

export default Navbar


































