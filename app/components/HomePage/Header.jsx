import React from 'react'
import Search from "@mui/icons-material/Search";
import Cart from "@mui/icons-material/ShoppingCart";
import Image from 'next/image'
import MobileHeader from '../MobileHeader';
import { motion, useCycle } from 'framer-motion';

export default function Header() {
    const [mobileNav, toggleMobileNav] = useCycle(false, true)
    return (
        <div className='sticky z-40 top-0 h-16 bg-dark-green rounded-b-xl w-full flex justify-between px-2 items-center'>

            {/* Hamburger */}
            <motion.button
                className='z-40'
                onClick={() => toggleMobileNav()}
                animate={mobileNav ? "open" : "closed"}

            >
                <motion.div variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 40, y: 11, scaleY: 1.5 } }} className='w-5 h-[3px] bg-cream my-2 rounded-md'></motion.div>
                <motion.div variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className='w-8 h-[3px] bg-cream my-2 rounded-md'></motion.div>
                <motion.div variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -40, y: -11, scaleY: 1.5 } }} className='w-5 h-[3px] bg-cream my-2 rounded-md'></motion.div>
            </motion.button>

            {/* Mobile Navbar */}
            {mobileNav && (<MobileHeader />)}

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
                <Search fontSize='large' />
            </div>

            {/* Cart */}
            <div>
                <Cart fontSize='large' className='text-cream' />
            </div>

        </div >
    )
}
