import { Bellefair, Barlow_Condensed, Barlow } from '@next/font/google';

export const titleFont = Bellefair({
  subsets: ['latin'],
  variable: '---font-bellefair',
  weight: '400',
});

export const subtitleFont = Barlow_Condensed({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-barlow_condensed',
});

export const textFont = Barlow({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-barlow',
});
