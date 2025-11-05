"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

import { useState } from 'react';

const Header = () => {

  const [showmenu, setShowmenu] = useState(false)

  const menuToggler = () => {
    setShowmenu(!showmenu)
  }

  return (
    <div className=' flex justify-between items-center px-4 md:px-8 py-10 backdrop-blur-2xl z-30 fixed top-0 left-0 right-0  ' >

      <div className=' flex gap-5 items-center ' >
        {/* <Image src="/logo.png" alt="Logo" width={40} height={40} /> */}
        <h1>Israel Olaleye</h1>
      </div>

      <Link href="/" className=' mx-5 ' >LOGO</Link>

      <div className=' flex gap-5 items-center text-lg ' onClick={menuToggler}>
        {
          showmenu ?

            <>
              <p className=' hidden md:block ' >MENU</p>
              <MdOutlineClose size={30} />
            </>
            :
            <>
              <p className=' hidden md:block ' >MENU</p>
              <HiMenuAlt2 size={30} />
            </>
        }
      </div>

      {
        showmenu && (
          <>
            <div className=" flex flex-col justify-between py-10 pr-10 items-end absolute top-28 right-0 bg-gray-500 h-[calc(100vh-7rem)] w-1/4">

              <div className=' flex gap-3 ' >
                <p>EN.</p>
                <p>FR.</p>
              </div>
              <nav className='  '>
                <ul className=' flex flex-col gap-4 items-end ' >
                  <li className=' text-3xl ' ><Link href='/'>Home</Link></li>
                  <li className=' text-3xl ' ><Link href='/projects'>Projects</Link></li>
                  <li className=' text-3xl ' ><Link href='/blog'>Blog</Link></li>
                  <li className=' text-3xl ' ><Link href='/contact'>Contact</Link></li>
                </ul>

              </nav>
              <div className=' flex flex-col items-end gap-4 '>
                <Link href='tel:2348103874770' >+234-810-3874-770</Link>
                <Link href='mailto:theisraelolaleye@gmail.com' >theisraelolaleye@gmail.com</Link>
              </div>

            </div>



            {/*  <div className=' flex flex-col justify-between absolute top-28 bottom-0 right-0 bg-black  w-1/4  '>
              
             <div>
                top
              </div>
              <div>

                <Link href={"/"} className=' text-4xl ' >Home</Link>
                <Link href={"/blog"} className=' text-4xl ' >Contact</Link>
                <Link href={"/blog"} className=' text-4xl ' >Blog</Link>
              </div>
              <div>
                bottomonokk ijoijopisd
              </div> 
            </div>
            */}
          </>
        )
      }

    </div>
  )
}

export default Header