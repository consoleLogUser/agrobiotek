"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import slide1 from "@/public/Plante-gelviter.png"
import slide2 from "@/public/racine-gelviter.png"
import slide3 from "@/public/graine-gelviter.png"

function SampleNextArrow(props: any) {
    const { className, style } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
      />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style} = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
      />
    );
  }

function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear",
       responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  return (
    <div className="slider-container bg-black">
      <h1 className='text-1xl md:text-3xl lg:text-4xl font-bold text-center uppercase text-white'>Notre mission, combattre la desertification</h1>
      <Slider {...settings}>
        <div>
          <Image src={slide1} alt="hero1"/>
        </div>
        <div>
        <Image src={slide2} alt="hero1"/>
        </div>
        <div>
        <Image src={slide3} alt="hero1"/>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;

