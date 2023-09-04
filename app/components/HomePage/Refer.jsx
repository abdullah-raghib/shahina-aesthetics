import Image from 'next/image'
import React from 'react'

export default function Refer() {
    return (
        <div className='border border-1 border-cream rounded w-full h-44 flex items-center justify-around'>
            <div className='text-white space-y-5'>
                <h2 className='text-xl font-extrabold '>
                    Refer and get<br/> Free services
                </h2>
                <p className='text-sm font-semibold'>Invite and get $300*</p>
            </div>
            <div className='py-[2px]'>
            <Image src="/refer-icon.png" width={120} height={100} alt=''/>
            </div>
        </div>
    )
}
