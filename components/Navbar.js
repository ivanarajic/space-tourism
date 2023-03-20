import React from 'react';
import { navLinks } from '../utils/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar({ navbarOpen, setNavbarOpen }) {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav
      className={`${
        navbarOpen ? 'block' : 'hidden'
      } fixed top-0 right-0 bottom-0 z-50 w-[60vw] bg-[#ffffff]/5 tracking-[2.3px] text-white backdrop-blur-2xl sm:static sm:block sm:w-fit sm:p-10 sm:text-sm lg:basis-8/12 lg:p-9 lg:text-base`}
    >
      <ul className="mt-28 flex flex-col gap-8 pl-10 sm:mt-0 sm:flex-row sm:pl-0 lg:justify-center">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              onClick={() => setNavbarOpen(!navbarOpen)}
              href={`${link.path}`}
              className={`${
                currentRoute === link.path
                  ? ' border-b-2 border-[#ffffff]'
                  : 'hover:border-b-2 hover:border-white/50 active:border-b-2  active:border-white/50'
              } sm:pr-0 sm:pb-10 lg:pb-9`}
            >
              <span className="mr-2 font-semibold sm:hidden lg:mr-2 lg:inline-block lg:font-semibold">
                {link.span}
              </span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
