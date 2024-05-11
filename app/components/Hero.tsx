import React from 'react'
import Carousel from '@/app/components/Carousel'
import Image from 'next/image'
import { TDCard } from './TDCard'


const Hero = () => {
  return (
    <div className='bg-[#A6C938] mt-[64px] md:mt-[68.5px]  h-[300vh]'>
      <Carousel />
      <div className="custom-shape-divider-top-1715465170">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
      <div className='flex flex-col md:flex-row md:mx-20 mx-10 items-center justify-center gap-2 '>
        <p className='text-white'>
          Après 5 ans de recherche et développement, nous avons conçu un hydrorétenteur d&apos;eau qui permet de récupérer et de réutiliser l&apos;eau de pluie pour la stocker dans nos gélule biodégradable.Initialement développé pour être utilisé dans des terres arrides, il est possible de tout type de terrain.
        </p>
        <TDCard />
      </div>

    </div>
  )
}

export default Hero
