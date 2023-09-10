import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HomeOutlined } from '@mui/icons-material';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import QuizIcon from '@mui/icons-material/Quiz';
import ForumIcon from '@mui/icons-material/Forum';
import PriceChangeIcon from '@mui/icons-material/PriceChange';

export default function MobileHeader() {
  return (
    <motion.div
      variants={{
        open: { x: "-10%" },
        closed: { x: "-100%" }
      }}
      initial="closed"
      animate="open"
      exit="closed"
      className='fixed pl-16 lg:pl-24 pt-14 pb-10 inset-0 h-full z-40 bg-cream opacity-[0.98]  overflow-y-scroll'
    >
      {/* Profile Menu */}
      <div className='flex'>
        <div className='rounded-full w-16 h-16 overflow-hidden '>
          <Image src="/Profile.jpg" width={200} height={200} quality={100} objectFit='contain' alt="" />
        </div>
        <div className='ml-5 space-y-1'>
          <p className='font-extrabold text'>Abdullah Raghib</p>
          <p className='text-sm'>abdullah.raghib.official@gmail.com</p>
          <button className='text-sm font-bold'>View Profile
            <ArrowForwardIosIcon fontSize='smaller' />
          </button>
        </div>
      </div>

      <div className='ml-2 mt-4 pt-3 space-y-9'>
        {/* Home */}
        <div className='mt-4 flex space-x-8 items-center'>
          <HomeOutlined fontSize='large'/>
          <h3 className="font-bold text-xl">Home</h3>
        </div>


        {/* Services Menu */}
        <div className='mt-4 flex space-x-8 items-center'>
          <MiscellaneousServicesIcon fontSize='large'/>
          <h3 className="font-bold text-xl">Services</h3>
        </div>


        {/* My Bookings */}
        <div className='mt-4 flex space-x-8 items-center'>
          <BookmarksIcon fontSize='large' />
          <h3 className="font-bold text-xl">Bookings</h3>
        </div>


        {/* Offers */}
        <div className='mt-4 flex space-x-8 items-center'>
          <LocalOfferIcon fontSize='large' />
          <h3 className="font-bold text-xl">Offers</h3>
        </div>


        {/* Finance */}
        <div className='mt-4 flex space-x-8 items-center'>
          <PriceCheckIcon fontSize='large' />
          <h3 className="font-bold text-xl">Finance</h3>
        </div>


        {/* Notifications */}
        <div className='mt-4 flex space-x-8 items-center'>
          <NotificationsIcon fontSize='large' />
          <h3 className="font-bold text-xl">Notifications</h3>
        </div>


        {/* Gift Cards */}
        <div className='mt-4 flex space-x-8 items-center'>
          <CardGiftcardIcon fontSize='large' />
          <h3 className="font-bold text-xl">Gift Cards</h3>
        </div>


        {/* Ingredients Checker */}
        <div className='mt-4 flex space-x-8 items-center'>
          <ChecklistRtlIcon fontSize='large' />
          <h3 className="font-bold text-xl">Ingredients Checker</h3>
        </div>


        {/* Acne Quiz */}
        <div className='mt-4 flex space-x-8 items-center'>
          <QuizIcon fontSize='large' />
          <h3 className="font-bold text-xl">Acne Quiz</h3>
        </div>


        {/* Live Chat */}
        <div className='mt-4 flex space-x-8 items-center'>
          <ForumIcon fontSize='large' />
          <h3 className="font-bold text-xl">Live Chat</h3>
        </div>


        {/* Refer and Earn */}
        <div className='mt-4 flex space-x-8 items-center'>
          <PriceChangeIcon fontSize='large'/>
          <h3 className="font-bold text-xl">Refer and Earn</h3>
        </div>

        <div className='text-xs font-thin mt-1 space-x-8 text-center'>--------------------------------------------------</div>
        {/* Logout */}
        <div className='-mt-2 flex items-center justify-center -ml-8'>
          <button className='text-xl font-bold'>Logout</button>
        </div>
      </div>
    </motion.div>
  )
}
