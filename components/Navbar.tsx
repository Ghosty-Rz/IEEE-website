import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';


function Navbar() {
    const [Nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!Nav)
    }

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true)
          } else {
            setIsScrolled(false)
          }
        }
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])
      
  return (
    
    
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300 '>
        
        <header className={`${isScrolled && 'bg-gray-800'}`}>

        <div className='flex justify-between items-center text-white m-auto max-w-[1240px] p-2'>
            <Link href='/'>
                <img 
                src="https://i.postimg.cc/6pdB9C7s/Untitled85-20230717233556.png"
                width={100}
                height={100}
                className="cursor-pointer object-contain"
                />
            </Link>
            <ul className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='p-4'>
                    <Link href='/events'>Events</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>

            {/* Mobile button */}
            <div onClick={handleNav} className='block sm:hidden z-10 p-4'>
                {Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
            </div>
            {/* Menu that shows up on mobile after clicking the icon*/}
            <div className={Nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/events'>Events</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>

        </div>
        </header>
    </div>
    
    
  )
}

export default Navbar