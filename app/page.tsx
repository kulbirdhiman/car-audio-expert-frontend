import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import Department from '@/components/home/Department'
import Accessories from '@/components/home/Accessories'
import SteeringWheelSection from '@/components/home/SteeringWheelSection'
import LightingSection from '@/components/home/LightingSection'
import ContactSupport from '@/components/home/ContactSupport'
const page = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <HeroSection />
      <Department />
      <Accessories />
      <SteeringWheelSection />
      <LightingSection />
      <ContactSupport />
    </div>
  )
}

export default page