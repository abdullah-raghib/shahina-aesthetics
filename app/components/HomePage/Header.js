import React from 'react'
import Search from "@mui/icons-material/Search";
import Cart from "@mui/icons-material/ShoppingCart";
import Image from 'next/image'

export default function Header() {
    return (
        <div className='sticky z-10 top-0 h-16 bg-dark-green rounded-b-xl w-full flex justify-between px-2 items-center'>

            {/* Hamburger */}
            <div className=''>
                <div className='w-5 h-[3px] bg-cream my-2 rounded-md'></div>
                <div className='w-8 h-[3px] bg-cream my-2 rounded-md'></div>
                <div className='w-5 h-[3px] bg-cream my-2 rounded-md'></div>
            </div>

            {/* Logo */}
            <div>
                <Image src="/Logo.png" width={50} height={50} alt="" />
            </div>

            {/* Logo Text */}
            <div>
                <Image src="/Logo-Text.png" width={150} height={50} alt="" />
            </div>

            {/* Search */}
            <div className='w-15 h-15 text-cream'>
                <Search fontSize='large'/>
            </div>

            {/* Cart */}
            <div>
                <Cart fontSize='large' className='text-cream'/>
            </div>

        </div>
    )
}
