import Link from 'next/link';
import React from 'react';

type HeroProps = {
  name: string;
  message: string;
};

function Hero({ name, message }: HeroProps) {
  return (
    <div className='flex items-center justify-center h-screen scrollbar scrollbar-thumb-blue-950 bg-fixed bg-center bg-cover custom-img'>
      {/* Black Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />

      <div className='p-5 text-white z-[2] mt-[-5rem]'>
        <h2 className='text-5xl font-bold'>{name}</h2>
        <p className='py-5 text-xl'>{message}</p>

        <Link href='/about'>
          <button className='px-5 py-2 border rounded-[2rem]'>Learn more</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
