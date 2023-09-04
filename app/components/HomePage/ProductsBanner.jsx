import Image from 'next/image'
import React from 'react'

export default function ProductsBanner() {
    return (
        <div className='rounded w-full h-44 flex mb-5'>
            <div className='h-full w-1/2 bg-cream flex flex-col justify-center items-center'>
                <h3 className='text-xs mb-1'>Explore Our</h3>
                <h2 className='text-dark-green text-lg font-bold'>SKINCARE</h2>
                <h2 className='text-dark-green text-lg font-bold'>PRODUCTS</h2>
                <button className='bg-dark-green mt-3 text-cream text-xs px-4 py-1 font-semibold'>
                    VIEW MORE
                </button>
            </div>
            <div className='relative h-full w-1/2 overflow-hidden'>
                <Image src="/skin-products-banner.jpg" fill={true} className='absolute' alt="" />
            </div>
        </div>
    )
}
