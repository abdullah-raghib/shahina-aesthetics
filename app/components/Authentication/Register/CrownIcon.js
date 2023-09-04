import Image from 'next/image'
import React from 'react'

export default function CrownIcon() {
    return (
        <div className='w-10 h-10 text-cream'>
            <Image src="/crown.svg" height={90} width={120} alt='' />
        </div>
    )
}
