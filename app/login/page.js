'use client'
import React, { useEffect } from 'react'
import { getAuth } from "firebase/auth";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Login  from "../components/Authentication/Login";
import { Navbar } from '../components/Navbar';

export default function Page() {
const router = useRouter();
// const auth = getAuth();
// const user = auth.currentUser;
const user = false;
 useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  if(!user){
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      {/* Logo */}
      <div className='mt-5'>
        <Image src="/Landing-Page-Logo.png" width={150} height={150} alt="" />
      </div>
      {/* Sign In Form */}
      <Login />
      {/* Terms and Conditions */}
      <div className='text-gray-500 font-bold text-sm w-full flex items-center flex-col bottom-0'>
        <p>By Clicking, I accept the</p>
        <a href="">Terms of Services</a>
      </div>
    </div>
  )
  }
  return null;
}
