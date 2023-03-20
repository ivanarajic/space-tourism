import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { crewData } from '../../utils/constants';
import { subtitleFont, titleFont } from '../../utils/fonts';

export default function Home() {
  const [crewId, setCrewId] = useState(0);
  const [active, setActive] = useState(0);

  const { name, image, role, bio } = crewData[crewId];

  const handleClick = (id) => {
    setCrewId(id);
    setActive(id);
  };
  return (
    <div>
      <Head>
        <title>Space Tourism - Crew</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10  bg-img-crew-mobile bg-cover bg-no-repeat sm:bg-img-crew-tablet lg:bg-img-crew-desktop" />

      <div
        className="flex flex-col items-center gap-7
         p-8 pb-0 text-white lg:items-start lg:pl-36"
      >
        <h2
          className={`${subtitleFont.className} mt-4 uppercase tracking-[2.7px]  sm:self-start sm:text-xl lg:text-2xl`}
        >
          <span className="mr-3 font-bold opacity-25">02</span>
          Meet your crew
        </h2>
        <div className="flex flex-col items-center gap-7 lg:mt-8 lg:flex-row lg:items-start ">
          <div className="w-full border-b-[1px] border-white/20 sm:order-4 sm:border-none lg:basis-2/4 lg:self-end">
            <div className="relative mx-auto h-56 max-w-full sm:h-[500px] lg:h-[70vh] ">
              <Image
                src={image}
                alt="crew member"
                className=" object-contain"
                sizes="100vw"
                fill
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 lg:basis-2/4 lg:items-start ">
            <div className="sm:order-3 lg:mt-4 lg:pb-10">
              {crewData.map((item) => (
                <a
                  key={item.id}
                  className={`ml-5 inline-block h-3 w-3 cursor-pointer rounded-full hover:bg-white/50 lg:ml-0 lg:mr-5  ${
                    active === item.id ? 'bg-white' : 'bg-white/20'
                  }`}
                  onClick={() => handleClick(item.id)}
                />
              ))}
            </div>
            <div
              className={`${titleFont.className} mt-8 text-center uppercase text-white sm:order-1 lg:text-left`}
            >
              <h2 className="opacity-50 mix-blend-normal sm:mb-2 sm:text-2xl lg:text-3xl">
                {role}
              </h2>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl">{name}</h1>
            </div>
            <p className=" mt-6 text-center text-[#D0D6F9] sm:order-2 sm:mb-6 sm:leading-7 lg:mr-40 lg:text-left lg:text-lg">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
