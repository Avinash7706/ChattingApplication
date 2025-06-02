import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'

export default function MainFile() {
  return (
    <div className='relative'>
      <Header/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}
