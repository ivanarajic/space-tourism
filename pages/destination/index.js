import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { subtitleFont, titleFont } from '../../utils/fonts';
import { destinationData } from '../../utils/constants';

export default function Home() {
  const [destinationId, setDestinationId] = useState(0);
  const [active, setActive] = useState(0);

  const { title, text, distance, time, img } = destinationData[destinationId];

  const handleClick = (id) => {
    setDestinationId(id);
    setActive(id);
  };

  return (
    <div>
      <Head>
        <title>Space Tourism - Destination</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 bg-img-dest-mobile bg-cover bg-no-repeat sm:bg-img-dest-tablet lg:bg-img-dest-desktop" />

      <div className="flex flex-col items-center gap-7 p-8 text-white  lg:pl-36 ">
        <h2
          className={`${subtitleFont.className} mt-4 uppercase tracking-[2.7px]  sm:self-start sm:text-xl  lg:text-2xl`}
        >
          <span className="mr-3 font-bold opacity-25">01</span>
          Pick your destination
        </h2>

        <div className="flex flex-col items-center gap-7 lg:mt-0 lg:flex-row  lg:gap-20 lg:px-20">
          <div className="mb-6 flex-grow lg:mb-0 ">
            <Image
              src={img}
              alt="planet"
              width={170}
              height={170}
              className="mx-auto sm:h-60 sm:w-60 lg:h-96 lg:w-96 lg:max-w-fit"
            />
          </div>

          <div className="mx-auto flex flex-col items-center gap-7 sm:px-14  lg:items-start lg:text-left">
            <div
              className={`${subtitleFont.className} flex gap-5 text-sm uppercase tracking-[2.3px] text-[#D0D6F9]`}
            >
              {destinationData.map((item) => (
                <a
                  key={item.id}
                  className={`cursor-pointer hover:border-b-2 hover:border-white/50 sm:text-base ${
                    active === item.id && 'border-b-2 border-[#fff] text-white '
                  }`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <h1
              className={`${titleFont.className} text-6xl uppercase sm:text-7xl lg:text-8xl`}
            >
              {title}
            </h1>
            <p className="pb-4 text-center text-[#D0D6F9] sm:text-base  lg:text-left lg:text-lg">
              {text}
            </p>
            <div className="w-full border border-b-[1px] border-[#383B4B] " />
            <div className="gap-24 text-center uppercase sm:flex lg:text-left">
              <div className="py-4">
                <h4
                  className={`${subtitleFont.className} pb-2 tracking-[2.3px] text-[#D0D6F9] `}
                >
                  Avg. Distance
                </h4>
                <h2 className={`${titleFont.className} text-[28px]`}>
                  {distance}
                </h2>
              </div>
              <div className="py-4">
                <h4
                  className={`${subtitleFont.className} pb-2 tracking-[2.3px] text-[#D0D6F9]`}
                >
                  Est. Travel Time
                </h4>
                <h2 className={`${titleFont.className} text-[28px]`}>{time}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}