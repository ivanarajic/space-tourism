import React, { useState } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import { subtitleFont } from '../utils/fonts';
import Link from 'next/link';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header
      className={`${subtitleFont.className} z-50 m-6 flex items-center justify-between sm:m-0 sm:ml-10 sm:h-24 lg:mt-10 lg:ml-14`}
    >
      <div className="lg:basis-1/12">
        <Link href={'/'}>
          <Image
            className="cursor-pointer lg:h-12 lg:w-12 "
            src="/assets/shared/logo.svg"
            alt="Logo"
            width={40}
            height={40}
          />
        </Link>
      </div>

      <button
        onClick={handleToggle}
        className="z-[100] cursor-pointer sm:hidden"
      >
        {navbarOpen ? (
          <Image
            src="/assets/shared/icon-close.svg"
            alt="close"
            width={24}
            height={21}
          />
        ) : (
          <Image
            src="/assets/shared/icon-hamburger.svg"
            alt="menu"
            width={24}
            height={21}
          />
        )}
      </button>
      <div className="z-10 hidden h-[1px] translate-x-6 bg-[#ffffff]/10 lg:block lg:basis-5/12" />
      <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
    </header>
  );
}

export default Header;
