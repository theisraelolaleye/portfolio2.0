"use client"
import React from 'react'
import Link from 'next/link'
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

import { useState, useRef, useEffect } from 'react';

const Header = () => {

  const [showmenu, setShowmenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLDivElement>(null)

  const menuToggler = () => {
    setShowmenu(!showmenu)
  }

  // Close menu when clicking outside of the menu panel or toggle
  useEffect(() => {
    if (!showmenu) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      const clickedOutsideMenu = menuRef.current && !menuRef.current.contains(target)
      const clickedOutsideToggle = toggleRef.current && !toggleRef.current.contains(target)
      if (clickedOutsideMenu && clickedOutsideToggle) {
        setShowmenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showmenu])

  return (
    <div className=' flex justify-between items-center px-4 md:px-8 py-6 md:py-10 backdrop-blur-2xl z-30 fixed top-0 left-0 right-0  ' >

      <div className=' flex gap-3 md:gap-5 items-center ' >
        <h1 className=' text-base md:text-lg ' >Israel Olaleye</h1>
      </div>

      {/* <Link href="/" className=' mx-3 md:mx-5 text-base md:text-lg font-bold ' >LOGO</Link> */}

      <div ref={toggleRef} className=' flex gap-3 md:gap-5 items-center text-base md:text-lg cursor-pointer ' onClick={menuToggler}>
        {
          showmenu ?

            <>
              <p className=' hidden md:block ' >MENU</p>
              <MdOutlineClose size={30} className=' w-6 h-6 md:w-8 md:h-8 ' />
            </>
            :
            <>
              <p className=' hidden md:block ' >MENU</p>
              <HiMenuAlt2 size={30} className=' w-6 h-6 md:w-8 md:h-8 ' />
            </>
        }
      </div>

      {
        showmenu && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={menuToggler}></div>

            {/* Menu Panel */}
            <div ref={menuRef} className=" flex flex-col justify-between py-8 md:py-10 px-6 md:pr-10 items-end fixed top-20 md:top-28 right-0 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 h-[calc(100vh-5rem)] md:h-[calc(100vh-7rem)] w-[65%] sm:w-[50%] md:w-1/2 lg:w-1/4 z-50 shadow-2xl">

              <div className=' flex items-center gap-3 text-sm md:text-base ' >
                <p className=' cursor-pointer hover:text-gray-700 dark:hover:text-white transition-colors ' >EN.</p>
                <p className=' cursor-pointer hover:text-gray-700 dark:hover:text-white transition-colors ' >FR.</p>
              </div>

              <nav className=' w-full ' >
                <ul className=' flex flex-col gap-3 md:gap-4 items-end ' >
                  <li className=' text-2xl md:text-3xl hover:text-gray-700 dark:hover:text-white transition-colors ' >
                    <Link href='/' onClick={menuToggler}>Home</Link>
                  </li>
                  <li className=' text-2xl md:text-3xl hover:text-gray-700 dark:hover:text-white transition-colors ' >
                    <Link href='/projects' onClick={menuToggler}>Projects</Link>
                  </li>
                  <li className=' text-2xl md:text-3xl hover:text-gray-700 dark:hover:text-white transition-colors ' >
                    <Link href='/blog' onClick={menuToggler}>Blog</Link>
                  </li>
                  <li className=' text-2xl md:text-3xl hover:text-gray-700 dark:hover:text-white transition-colors ' >
                    <Link href='/about' onClick={menuToggler}>About</Link>
                  </li>
                  <li className=' text-2xl md:text-3xl hover:text-gray-700 dark:hover:text-white transition-colors ' >
                    <Link href='/contact' onClick={menuToggler}>Contact</Link>
                  </li>
                </ul>
              </nav>

              <div className=' flex flex-col items-end gap-3 md:gap-4 text-sm md:text-base '>
                <Link href='tel:2348103874770' className=' hover:text-gray-700 dark:hover:text-white transition-colors ' >
                  +234-810-3874-770
                </Link>
                <Link href='mailto:theisraelolaleye@gmail.com' className=' hover:text-gray-700 dark:hover:text-white transition-colors break-all text-right ' >
                  theisraelolaleye@gmail.com
                </Link>
              </div>

            </div>
          </>
        )
      }

    </div>
  )
}

export default Header