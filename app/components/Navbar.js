import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>

      <nav className='bg-slate-600 flex justify-evenly items-center font-semibold h-[5vh]'>



        <div className="logo font-bold text-2xl text-white">
          Link Tweak
        </div>



        <ul className='flex justify-center items-center text-white font-semibold space-x-4 py-'>
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/generate'><li>Services</li></Link>
          <Link href='/contact'><li>Contact</li></Link>

          <li className='flex justify-center items-center space-x-4'>

            <Link href='/generate'><button className='px-2 py-1 font-bold bg-sky-700 rounded-md'>Try Now</button></Link>
            



          </li>

        </ul>



      </nav>



    </>
  )
}

export default Navbar
