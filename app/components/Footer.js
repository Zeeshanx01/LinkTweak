import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='bg-gray-700 text-white text-center flex justify-center items-center gap-4 p-4 h-[5vh]'>

      <p className=' text-slate-200'>Made by Zeeshan</p>
      <p className='text-sm text-slate-300 font-semibold'>© 2024 Link Tweak. All rights reserved.</p>


      <Link href='/github'><button className='bg-slate-800 bg-blackl rounded-full flex justify-center items-center hover:bg-slate-900 duration-300'>
        <span><img className='w-8' src="icons/icons-github-cat.png" alt="" /></span>
        <span><img className='invert w-10 mr-1' src="icons/github-logo.png" alt="" /></span>
      </button>
      </Link>
    </footer>
  )
}

export default Footer
