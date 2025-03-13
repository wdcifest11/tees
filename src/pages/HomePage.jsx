import React from 'react'
import LogoCarousel from '../homepages/LogoCarousel'
import DealsMonth from '../homepages/DealsMonth'
import RecentlyUploaded from '../homepages/RecentlyUploaded'
import CustomerSay from '../homepages/CustomerSay'
import Hero2 from '../homepages/Hero2'


const HomePage = () => {
  return (
    <>
        <Hero2 />
        <LogoCarousel />
        <DealsMonth />
        <RecentlyUploaded />
        <div className='hidden md:block'>
        <CustomerSay />
        </div>
    </>
  )
}

export default HomePage