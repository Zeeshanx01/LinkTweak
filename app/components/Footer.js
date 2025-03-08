import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='duration-700  fixed bottom-0 w-full bg-slate-800 dark:bg-gray-900 text-white text-center flex justify-center items-center gap-4 p-4 h-[5vh]'>

      <p className='duration-700   text-slate-200'>Made by Zeeshan</p>
      <p className='duration-700  text-sm text-slate-300 font-semibold'>© 2025 Link Tweak. All rights reserved.</p>


      <Link href='https://github.com/Zeeshanx01' target='_blank'><button className='duration-700   dark:bg-slate-800 bg-slate-200 bg-opacity-50 rounded-full flex justify-center items-center hover:bg-slate-500 '>
        <span><img className='duration-700   w-8 invert dark:invert-0' src="icons/icons-github-cat.png" alt="" /></span>
        <span><img className='duration-700   dark:invert invert-0 w-10 mr-1' src="icons/github-logo.png" alt="" /></span>
      </button>
      </Link>


    </footer>
  )
}

export default Footer
