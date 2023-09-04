'use client'
import { Navbar } from './components/Navbar'
import ProgressBar from './components/LandingPage/ProgressBar'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { Oxygen, Sacramento } from 'next/font/google'

const oxygen = Oxygen({ subsets: ['latin'], weight: ["400", "700"] })
const sacramento = Sacramento({ subsets: ['latin'], weight: ["400"] })

export default function Intro() {
  const [progress, setProgress] = useState(50);
  // const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        router.push("/login");
      }, 500);
    }
  }, [progress])


  const handleFillProgress = () => {
    setProgress(100);
  };
  return (
    <main className="flex min-h-screen flex-col bg-dark-green text-white items-center justify-end">
      {/* Upper Section */}
      <div className='mb-24'>
        <Image src="/Landing-Page-Logo.png" width={500} height={500} alt="Shahina-Hoja-Aesthetics-Logo" />
      </div>
      {/* Lower Section */}
      <div className='bottom-0 h-36 w-[101%] border-transparent rounded-t-3xl shadow-[0px_-1px_1px_rgb(195,184,128)] flex flex-col items-center'>

        {/* Progress Bar */}
        <div className='mt-3'>
          <ProgressBar progress={progress} />
        </div>

        {/* Login Page Navigation */}
        <div className='flex items-center w-full mx-2 px-5 py-9 justify-between'>
          <div className='flex flex-col gap-y-2'>
            <h4 className={`${oxygen.className} font-semibold text-sm`}>Welcome to</h4>
            <p className={`${sacramento.className} text-2xl`}>Shahina Hoja Aesthetics</p>
          </div>
          <div>
            <button className="mt-4 h-12 bg-cream w-12 flex items-center justify-center text-dark-green rounded-full" onClick={handleFillProgress}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
