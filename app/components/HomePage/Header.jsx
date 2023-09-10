import React, { useEffect } from 'react'
import Search from "@mui/icons-material/Search";
import Cart from "@mui/icons-material/ShoppingCart";
import Image from 'next/image'
import MobileHeader from '../MobileHeader';
import Backdrop from './Backdrop';
import { motion, useCycle, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [mobileNav, toggleMobileNav] = useCycle(false, true);
    useEffect(() => {
        if (mobileNav) {
            document.body.classList.add('overlay-open');
        } else {
            document.body.classList.remove('overlay-open');
        }
    }, [mobileNav])
    return (
        <div className='fixed z-40 top-0 lg:space-x-5 h-16 bg-dark-green rounded-b-xl w-full flex lg:inline-block justify-between px-2 items-center'>

            {/* Hamburger */}
            <motion.button
                className='z-50 lg:hidden'
                onClick={() => toggleMobileNav()}
                animate={mobileNav ? "open" : "closed"}
            >
                <motion.div variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 35, y: 11, scaleY: 1.5 } }} className={`w-5 h-[3px] ${mobileNav ? 'bg-dark-green' : 'bg-cream'} my-2 rounded-md`}></motion.div>
                <motion.div variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className={`w-8 h-[3px] ${mobileNav ? 'bg-dark-green' : 'bg-cream'} my-2 rounded-md`}></motion.div>
                <motion.div variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -35, y: -11, scaleY: 1.5 } }} className={`w-5 h-[3px] ${mobileNav ? 'bg-dark-green' : 'bg-cream'} my-2 rounded-md`}></motion.div>
            </motion.button>

            {/* Mobile Navbar */}
            <AnimatePresence>
                {mobileNav && (
                    <>
                        <MobileHeader />
                        <Backdrop isOpen={mobileNav} onClose={toggleMobileNav}/>
                    </>
                )}
            </AnimatePresence>

            {/* Logo */}
            <div className='lg:inline'>
                <Image src="/Logo.png" width={50} height={50} alt="" className='lg:inline-block'/>
            </div>

            {/* Logo Text */}
            <div className='lg:inline'>
                <Image src="/Logo-Text.png" width={150} height={50} alt="" className='lg:inline-block' />
            </div>

            {/* Search */}
            <div className='w-15 h-15 text-cream lg:inline lg:float-right'>
                <Search fontSize='large'  />
            </div>

            {/* Cart */}
            <div className='lg:inline lg:float-right'>
                <Cart fontSize='large' className='text-cream lg:inline-block' />
            </div>

        </div>
    )
}
