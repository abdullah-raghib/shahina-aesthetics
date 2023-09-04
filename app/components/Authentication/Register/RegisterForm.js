'use client'
import Image from 'next/image'
import React from 'react'
import MaleIcon from "@mui/icons-material/Male"
import FemaleIcon from "@mui/icons-material/Female"
import OtherIcon from "@mui/icons-material/Transgender"
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
    const router = useRouter()
    const handleRegister = ()=>{
        router.push('/home')
    }
    return (
        <div>
            <div className="flex min-h-fit flex-1 w-full flex-col justify-center">

                <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">

                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="name"
                                autoComplete="name"
                                placeholder="First Name"
                                className="block w-full rounded-md border-0 py-3 px-4 bg-transparent text-cream shadow-sm ring-1 ring-inset ring-cream placeholder:text-cream focus:ring-2 focus:ring-inset focus:ring-cream sm:text-sm sm:leading-6"
                            />
                        </div>



                        <div className="mt-2">
                            <input
                                id="Last"
                                name="Last"
                                type="Last"
                                autoComplete="current-Last"
                                placeholder="Last Name"
                                className="block w-full rounded-md border-0 py-3 px-4  bg-transparent text-cream shadow-sm ring-1 ring-inset ring-cream placeholder:text-cream focus:ring-2 focus:ring-inset focus:ring-cream sm:text-sm sm:leading-6"
                            />
                        </div>



                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Email"
                                className="block w-full rounded-md border-0 py-3 px-4 bg-transparent text-cream shadow-sm ring-1 ring-inset ring-cream placeholder:text-cream focus:ring-2 focus:ring-inset focus:ring-cream sm:text-sm sm:leading-6"
                            />
                        </div>



                        <div className="mt-2 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 flex items-center bg-transparent">
                                <label for="country" className="sr-only bg-transparent">Country</label>
                                <select id="country" name="country" autocomplete="country" className="focus:ring-cream focus:border-cream h-full py-0 pl-3 pr-7 border-cream border-r-0 rounded-r-none bg-dark-green placeholder:text-cream text-cream sm:text-sm rounded-lg">
                                    <option>+91
                                    </option>
                                    <option>+44
                                    </option>
                                    <option>+65
                                    </option>
                                </select>
                                <div className='h-5 bg-cream w-[1px]'></div>
                            </div>
                            <input type="text" name="phone-number" id="phone-number" className="focus:ring-cream focus:border-cream block w-full pl-20 py-3 sm:text-sm border-cream bg-transparent placeholder:text-cream rounded-md" placeholder="Contact Number" />
                        </div>


                        <div>
                            <h1>Gender</h1>
                            <div className='flex items-center justify-between mt-2'>
                                <button className='flex items-center w-[110px] h-10 justify-center border rounded-lg border-cream focus:bg-cream focus:text-dark-green'>
                                    <div className='bg-cream px-1 rounded-full text-dark-green mr-1'>
                                        <MaleIcon fontSize='20px' />
                                    </div>
                                    <span className='font-semibold text-sm'>
                                        Male
                                    </span>
                                </button>
                                <button className='flex items-center w-[110px] h-10 justify-center border rounded-lg px-1 py-1 border-cream focus:bg-cream focus:text-dark-green'>
                                    <div className='bg-cream px-1 rounded-full text-dark-green mr-1'>
                                        <FemaleIcon fontSize='20px' />
                                    </div>
                                    <span className='font-semibold text-sm'>
                                        Female
                                    </span>
                                </button>
                                <button className='flex items-center w-[110px] h-10 justify-center border rounded-lg px-1 py-1 border-cream focus:bg-cream focus:text-dark-green'>
                                    <div className='bg-cream px-1 rounded-full text-dark-green mr-1'>
                                        <OtherIcon fontSize='20px' />
                                    </div>
                                    <span className='font-semibold text-sm'>
                                        Other
                                    </span>
                                </button>
                            </div>
                        </div>


                        <div className="mt-2">
                            <input
                                id="date"
                                name="date"
                                type="date"
                                autoComplete="date"
                                placeholder="Date of Birth"
                                className="block w-full rounded-md border-0 py-3 px-4 bg-transparent text-cream shadow-sm ring-1 ring-inset ring-cream placeholder:text-cream focus:ring-2 focus:ring-inset focus:ring-cream sm:text-sm sm:leading-6"
                            />
                        </div>



                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="password"
                                placeholder="Password"
                                className="block w-full rounded-md border-0 py-3 px-4 bg-transparent text-cream shadow-sm ring-1 ring-inset ring-cream placeholder:text-cream focus:ring-2 focus:ring-inset focus:ring-cream sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div className="pt-7 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 flex items-center h-10 w-8 ml-5 mt-8">
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs></defs><title>coupon-glyph</title><path className="fill-cream" d="M435.2,64H76.8A76.88,76.88,0,0,0,0,140.8V371.2A76.88,76.88,0,0,0,76.8,448H435.2A76.88,76.88,0,0,0,512,371.2V140.8A76.88,76.88,0,0,0,435.2,64ZM153.6,422.4a12.8,12.8,0,1,1-25.6,0V396.8a12.8,12.8,0,0,1,25.6,0Zm0-76.8a12.8,12.8,0,1,1-25.6,0V320a12.8,12.8,0,1,1,25.6,0Zm0-76.8a12.8,12.8,0,1,1-25.6,0V243.2a12.8,12.8,0,1,1,25.6,0Zm0-76.8a12.8,12.8,0,1,1-25.6,0V166.4a12.8,12.8,0,1,1,25.6,0Zm0-76.8a12.8,12.8,0,1,1-25.6,0V89.6a12.8,12.8,0,1,1,25.6,0Zm76.8,89.6a38.4,38.4,0,1,1,38.4,38.4A38.44,38.44,0,0,1,230.4,204.8Zm25.6,128a12.8,12.8,0,0,1-9.05-21.85l128-128a12.8,12.8,0,0,1,18.1,18.1l-128,128A12.76,12.76,0,0,1,256,332.8Zm115.2,12.8a38.4,38.4,0,1,1,38.4-38.4A38.44,38.44,0,0,1,371.2,345.6Z" /><path className="fill-cream" d="M371.2,294.4A12.8,12.8,0,1,0,384,307.2,12.82,12.82,0,0,0,371.2,294.4Z" /><path className="fill-cream" d="M281.6,204.8a12.8,12.8,0,1,0-12.8,12.8A12.82,12.82,0,0,0,281.6,204.8Z" /></svg>
                            </div>
                            <input
                                id="referral"
                                name="referral"
                                type="text"
                                autoComplete="referral"
                                placeholder="Enter Referral Code"
                                className="focus:ring-white focus:border-white block w-full pl-20 py-3 sm:text-sm border-white bg-transparent placeholder:text-white rounded-md"
                            />
                        </div>

                        <div>
                            <div>
                                <div class="relative flex items-start pt-7">
                                    <div class="flex items-center h-5 bg-transparent">
                                        <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="focus:ring-0 h-4 w-4 text-cream-600 border-cream rounded" />
                                    </div>
                                    <div class="ml-5 text-sm">
                                    <span>I agree to the terms and conditions</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                onClick={handleRegister}
                                className="flex w-11/12 justify-center rounded-md bg-cream px-2 py-3 font-[800] italic text-lg leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
