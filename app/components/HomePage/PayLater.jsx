import React from 'react'
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function PayLater() {
    return (
        <div className='w-full h-28 flex flex-col justify-around items-center border bg-white py-5'>
            <div>
                <span className='font-semibold'> Buy Now, Pay Later with </span>
                <span className='font-extrabold'><span className='rounded-full bg-black text-white px-[3px] py-[2px]'><PercentRoundedIcon fontSize='string'/></span> Cherry</span>
            </div>
            <div className='font-bold text-sm'>
                <a href="">LEARN MORE <ArrowForwardIosIcon fontSize='string'/></a>
            </div>
        </div>
    )
}
