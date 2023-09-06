import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/navigation";

export default function LimitedOffers() {
    const router = useRouter();
    const handleLimitedOffer = () => {
        router.push('/limited-offers')
    }
  return (
    <div onClick={handleLimitedOffer} className='relative border border-cream w-full flex justify-center h-52'>
        <button  className='z-10 absolute left-0 w-15 h-7 bg-cream px-1 mt-3 font-semibold text-sm'>LIMITED TIME OFFERS</button>
        <Image src="/limited-offers.webp" fill={true}  alt="" />
    </div>
  )
}
