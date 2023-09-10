'use client'
import React from 'react'
import Header from "../components/HomePage/Header";
import HeroSection from "../components/HomePage/HeroSection";
import LimitedOffers from "../components/HomePage/LimitedOffers";
import PayLater from "../components/HomePage/PayLater";
import ServiceMenu from "../components/HomePage/ServiceMenu";
import ProductsBanner from "../components/HomePage/ProductsBanner";
import MembershipBanner from "../components/HomePage/MembershipBanner";
import Refer from "../components/HomePage/Refer";
import Navbar from "../components/Navbar";

export default function Page() {
    return (
        <div className='h-[110rem] flex flex-col items-center'>

            {/* Header */}
            <Header />

            {/* Main Section */}
            <div className='w-full max-w-3xl m-auto'>
                {/* Hero Section */}
                <div className='mt-12 pt-8 mb-3'>
                    <HeroSection />
                </div>

                {/* Limited Time Offers */}
                <div className='mt-8 mb-3'>
                    <LimitedOffers />
                </div> 

                {/* Pay Later */}
                <div className='mt-8 mb-3'>
                    <PayLater />
                </div>
                
                {/* Service Menu */}
                <div className='mt-12 mb-3'>
                    <ServiceMenu />
                </div>

                {/* SkinCare Products / Shop */}
                <div className='mt-9 mb-3'>
                    <ProductsBanner />
                </div>

                {/* Membership  */}
                <div className='mt-9 mb-3 mx-2'>
                    <MembershipBanner />
                </div>

                {/* Refer and Earn */}
                <div className='mt-9 mb-12 pb-28 mx-2'>
                    <Refer />
                </div>
            </div>

            {/* Bottom Navigation */}
            <Navbar />
        </div>
    )
}
