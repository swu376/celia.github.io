import React from 'react'
import SiyanwuName from './name'
import Image from 'next/image'
import Link from 'next/link'
import NavButton from './NavButton'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-backgroundNav h-20 flex items-center justify-between fixed w-screen opacity-80 rounded-md shadow-md top-0 '>
        {/* LEFT */}
        <Link
            className='w-[50%] text-2xl text-primary flex items-center justify-start gap-2'
            href='/'
        >
            <Image src='cc.png' alt='logo' width={80} height={80} className='rounded-lg'/>
            <SiyanwuName />
        </Link>

        {/* RIGHT */}
        <nav className='w-[50%] grid grid-cols-3 text-2xl content-center font-semibold'>
            <NavButton name='Home' href='/'/>
            <NavButton name='Experiences' href='/experiences'/>
            <NavButton name='Contact' href='/contact'/>
        </nav>
    </div>
  )
}

export default Navbar