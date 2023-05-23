import { useState } from "react";
import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export function Footer() {

  var shuffle = true;

  return (
    <footer className="w-full bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">

      {/* Actual Music */}
      <div className='flex items-center gap-3'>
        <Image src="/album.jpg" width={56} height={56} alt='Capa da playlist com um carro jdm'/>
        <div className='flex flex-col'>
          <strong className='font-medium'>Rope</strong>
          <span className='text-xs text-zinc-400'>Foo Fighters</span>
        </div>
      </div>

      {/* Player */}

      <div className='flex flex-col items-center gap-2 flex-1'>
        <div className='flex items-center gap-6'>
          <button className='relative flex items-center justify-center'>
            <Shuffle className={`${shuffle ? 'text-green-500' : 'text-zinc-200'}`} size={20}/>
            <span className={`absolute rounded-full -bottom-2 right-1/2 w-1 h-1 bg-green-500 z-50 ${shuffle ? 'visible' : 'hidden'}`}/>
          </button>

          <SkipBack className='fill-zinc-200' size={20}/>

          <button className='w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
            <Play fill='black' size={20}/>
          </button>

          <SkipForward className='fill-zinc-200' size={20}/>
          <Repeat className='text-zinc-200' size={20}/>
        </div>

        <div className='flex items-center justify-center gap-2 max-w-md w-full'>
          <span className='text-xs text-zinc-400'>0:31</span>
          <div className='h-1 w-full rounded-full bg-zinc-600'>
            <div className='bg-zinc-200 w-40 h-1 rounded-full' />
          </div>
          <span className='text-xs text-zinc-400'>2:14</span>
        </div>
      </div>

      {/* Options */}

      <div className='flex items-center gap-2'>
        <Mic2 size={20}/>
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className='flex items-center gap-4'>
          <Volume size={20} />
          <div className='h-1 rounded-full w-24 bg-zinc-600'>
            <div className='bg-zinc-200 w-10 h-1 rounded-full' />
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}