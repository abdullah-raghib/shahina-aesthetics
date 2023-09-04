import React from 'react'
import Search from "@mui/icons-material/Search";
import Cart from "@mui/icons-material/ShoppingCart";
import Image from 'next/image'
import { HomeOutlined } from '@mui/icons-material';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';

export default function Navbar() {
  return (
    <div className='fixed z-20 bottom-0 h-16 bg-dark-green rounded-t-xl w-full flex justify-around px-3 items-center'>

      {/* Home */}
      <div className='flex flex-col items-center justify-center'>
        <HomeOutlined fontSize='large' className='text-cream' />
        <p className='text-xs text-cream'>Home</p>
      </div>

      {/* Book Online */}
      <div className='flex flex-col items-center justify-center'>
        <EventRepeatOutlinedIcon fontSize='large' className='text-gray-200' />
        <p className='text-xs text-gray-300'>Book Online</p>
      </div>

      {/* Book Online */}
      <div className='flex flex-col items-center justify-center'>
        <ShoppingBagOutlinedIcon fontSize='large' className='text-gray-200' />
        <p className='text-xs text-gray-300'>Home</p>
      </div>

      {/* Book Online */}
      <div className='flex flex-col items-center justify-center'>
        <ContactEmergencyOutlinedIcon fontSize='large' className='text-gray-200' />
        <p className='text-xs text-gray-300'>Home</p>
      </div>
      
      {/* Book Online */}
      <div className='flex flex-col items-center justify-center'>
        <CardMembershipOutlinedIcon fontSize='large' className='text-gray-200' />
        <p className='text-xs text-gray-300'>Home</p>
      </div>
    </div>
  )
}
