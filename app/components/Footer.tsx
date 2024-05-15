import React from 'react'

const Footer = () => {
  return (
    <div className="bg-white text-[#9C6825] max-w-[100vw] ">
      <div className=" px-4 flex flex-col md:flex-row justify-center gap-1 items-center h-[70px] md:justify-between  ">
        <a href="#" className=" text-center text-[14px] hover:text-[#A3C83C]">
        Agrobiotek-Ingenierie© 2024, Tous droits réservés
        </a>
        <a href="#" className=" text-center text-[14px] hover:text-[#A3C83C]">
          Mentions légales
        </a>
      </div>
    </div>
  )
}

export default Footer
