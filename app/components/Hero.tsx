import React from "react";
import Image from "next/image";
import Hero1 from "../../public/saveWater.png";
import Hero2 from "../../public/secheresseAgriculture.png";

const Hero = () => {
  return (
    <div className="text-[#A3C83C] mt-[100px] font-bold min-h-[100dvh]">
      <section className="max-w-[900px] mx-auto">
        <div className="px-6 flex flex-col gap-4">
          <h1 className="font-bold text-center text-[16px]  ">
            En agriculture, l&apos;arrosage represente à elle seul 60% à 80% de
            la consommation d&apos;eau potable dans le monde
          </h1>
          <div className="flex flex-col gap-4 md:flex-row items-center">
            <Image
              src={Hero1}
              alt="hero"
              width={500}
              height={500}
              className="md:w-[50%]"
            />
            <div className="md:w-[50%]">
              <p className="text-white">
                L&apos;irrigation intensive dans l&apos;agriculture entraîne un
                épuisement des ressources en eau, en puisant dans les nappes
                phréatiques et en diminuant les débits des rivières et des cours
                d&apos;eau, ce qui compromet l&apos;approvisionnement en eau
                potable.
              </p>
              <p className="text-white mt-4">
                Ces problèmes ont des conséquences graves sur la disponibilité
                et la qualité de l&apos;eau potable, mettant en danger la santé
                publique et la biodiversité.
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 flex flex-col gap-4 mt-4">
          <h2 className="font-bold text-center text-[16px]">
            <span className="text-[#9C6825] line-through">Dans le futur,</span>{" "}
            l&apos;agriculture devra faire face à une augmentation des risques
            liés à l&apos;eau.
          </h2>
          <div className="flex flex-col gap-4 md:flex-row-reverse items-center">
            <Image
              src={Hero2}
              alt="hero"
              width={500}
              height={500}
              className="md:w-[50%]"
            />
            <div className="md:w-[50%]">
              <p className="text-white">
                Ces dernières années, de nombreuses régions agricoles à travers
                le monde ont été confrontées à des contraintes hydriques de plus
                en plus importantes. Des sécheresses graves ont entraîné une
                baisse de la production agricole et une diminution des réserves
                d&apos;eau, à la fois en surface et souterraines.
              </p>
              <p className="text-white mt-4">
                Ces événements, ainsi que d&apos;autres phénomènes
                météorologiques extrêmes tels que les inondations et les
                tempêtes tropicales, devraient devenir plus fréquents.
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 flex flex-col gap-4 mt-4">
          <h2 className="font-bold text-center text-[16px]">
          Et nous <span className="text-[#9C6825]">AGRO</span>BIO<span className="text-[#9C6825]">TEK</span> dans tout ça on fait quoi ?
          </h2>
          <div className="flex flex-col gap-4 items-center">
              <p className="text-white text-center">
              Il nous fallait mettre en place une solution à la fois <span className="text-[#A3C83C]">naturelle, efficace et adaptable</span> à tous les types de sols pour limiter l&apos;impact de la consommation d&apos;eau liée à l&apos;agriculture. Nous avions besoin d&apos;une solution <span className="text-[#A3C83C]">viable, facile à utiliser</span> et qui ne soit pas en contradiction avec les méthodes d&apos;agriculture naturelle afin de <span className="text-[#A3C83C]">préserver les micro-organismes présents dans le sol.</span>
              </p>
              <p className="text-white text-center">
              Après <span className="text-[#A3C83C]">cinq ans de recherche et développement</span>, nous avons mis en production le <span className="text-[#A3C83C]">GELVITER</span>, un hydro-rétenteur qui stocke l&apos;eau d&apos;arrosage. Il promet <span className="text-[#A3C83C]">une économie de 60 % d&apos;eau</span> par rapport à une agriculture standard.
              </p>

              <a href="" className="text-white text-center px-4 py-2 rounded-md bg-[#A3C83C] hover:bg-[#799235]">
                En savoir plus
              </a>
          </div>
        </div>
      </section>
      <hr className="h-[3px] my-10 " />
    </div>
  );
};

export default Hero;
