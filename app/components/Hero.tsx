import React from 'react'
import Carousel from '@/app/components/Carousel'
import Image from 'next/image'


const Hero = () => {
  return (
    <div >
      <Carousel />
      <div>
        <p></p>
        <Image src='/images/hero.png' alt='hero' width={500} height={500} />
      </div>

    </div>
  )
}

export default Hero
