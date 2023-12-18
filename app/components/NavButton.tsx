import Link from 'next/link'
import React from 'react'

type Props = {
    name: string
    href: string
}

const NavButton = (props: Props) => {
  return (
        <Link 
            className='text-3xl text-primary text-center hover:scale-110 transition duration-250'
            href={ props.href }
        >
             { props.name }
        </Link>
  )
}

export default NavButton