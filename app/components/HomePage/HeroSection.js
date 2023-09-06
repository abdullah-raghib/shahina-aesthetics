import React, { useState } from 'react'
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';

export default function HeroSection() {
    const [name, setName] = useState("Jasmine")
    return (
        <div className='text-cream flex max-w-5xl flex-col m-3 mx-5 items-center'>
            <span className='text-lg'>Hello, <span className='font-bold'>{name}</span> </span>
            <div className='h-32 w-full rounded-md mt-5 flex flex-col items-center justify-around border-cream border'>
                <div className='flex'>
                    <span className='text-white'><PersonPinCircleIcon /></span>
                    <span className='font-bold mr-2 text-white'>1 Visit Left! {' '}</span>
                    <span className='pr-2 font-medium'>Until your next reward!</span>
                </div>
                <div>
                    <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-md shadow-sm text-black bg-cream hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cream">
                        CHECK IN
                    </button>
                </div>
            </div>
        </div>
    )
}
