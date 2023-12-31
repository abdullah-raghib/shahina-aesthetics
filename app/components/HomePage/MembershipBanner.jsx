import Image from 'next/image'
import React from 'react'

export default function MembershipBanner() {
  return (
    <div className='w-full relative h-44 lg:h-80 rounded overflow-hidden'>
      <div className='absolute right-2 pt-10 lg:right-16 lg:top-16 text-dark-green z-10 flex flex-col items-center'>
        <h2 className='text-xl font-extrabold'>Membership</h2>
        <p className='text-sm'>Feel Great, Look Amazing</p>
        <button className='bg-dark-green mt-3 text-cream text-xs px-4 py-1 font-semibold'>
          VIEW MORE
        </button>
      </div>
      <div className='w-full h-96 relative'>
        <Image src="/membership-banner.avif" fill={true} objectFit="cover" objectPosition='top' quality={100} alt="" />
      </div>
    </div>
  )
}
