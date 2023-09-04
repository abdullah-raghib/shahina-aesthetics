/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

export default function ServiceMenu() {
    const menuList = [
        { title: "Aging", image: "Aging.jpg" },
        { title: "Acne", image: "Acne.webp" },
        { title: "Hair Loss", image: "Hair-Loss.jpg" },
        { title: "Fat Reduction", image: "Fat-Reduction.jpg" },
        { title: "Pigmentation", image: "Pigmentation.avif" },
        { title: "Acne Scar", image: "Acne-Scar.jpeg" },
        { title: "Laser Hair Removal", image: "Laser-Hair-Removal.png" },
        { title: "IV Injections", image: "IV-Injections.jpg" }]
    return (
        <div>
            {/* Title */}
            <div className='text-white font-semibold flex flex-col items-center'>
                <span>Service Menu by Consern</span>
                <p className='text-xs font-thin'>----------------------------------------------------------------------</p>
            </div>

            {/* Menu Items */}
            <ul role="list" className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 px-5">
                {menuList.map((item, i) => (

                    <li key={i} className="col-span-1 flex flex-col text-center border-[3px] border-cream rounded-lg shadow divide-y divide-gray-200">
                        <div className="flex-1 flex flex-col p-3">
                            <img className="w-24 h-24 flex-shrink-0 mx-auto rounded-full" src={`/menu/${item.image}`} alt="" />
                            <h3 className="mt-6 text-white text-sm font-medium">{item.title}</h3>
                        </div>

                    </li>

                ))}
            </ul>
        </div>
    )
}