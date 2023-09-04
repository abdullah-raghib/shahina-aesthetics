'use client'
import React from 'react'
import Header from "../components/HomePage/Header";
import HeroSection from "../components/HomePage/HeroSection";
import LimitedOffers from "../components/HomePage/LimitedOffers";
import PayLater from "../components/HomePage/PayLater";
import ServiceMenu from "../components/HomePage/ServiceMenu";
import ProductsBanner from "../components/HomePage/ProductsBanner";

export default function page() {
    return (
        <div className='h-[110rem]'>

            {/* Header */}
            <Header />

            {/* Main Section */}
            <div>
                {/* Hero Section */}
                <div className='mt-12 mb-3'>
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
                <div className='mt-9 mb-3'>

                </div>
            </div>

            {/* Bottom Navigation */}
        </div>
    )
}
