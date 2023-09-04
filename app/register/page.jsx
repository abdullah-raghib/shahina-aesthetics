'use client'
import React from 'react'
import CrownIcon from "../components/Authentication/Register/CrownIcon";
import RegisterForm from "../components/Authentication/Register/RegisterForm"

export default function Page() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-dark-green text-white items-center justify-between">
            {/* Text */}
            <div className='flex items-start justify-center mt-3 w-full'>
                <span className='mr-2'><CrownIcon /></span>
                <div className='mt-2 text-lg text-cream font-bold'>
                    <span>You Are One Step away to</span>
                    <p>become a VIP Member</p>
                </div>
            </div>

            {/* Register Form */}
            <div className='w-[101%] mt-10 flex justify-center border-transparent rounded-t-3xl shadow-[0px_-1px_1px_white] h-[54rem]'>
                <RegisterForm />
            </div>
        </div>
    )
}
