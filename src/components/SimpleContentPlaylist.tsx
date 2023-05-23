import { Play } from "lucide-react";
import Image from "next/image";

export function SimpleContentPlaylist() {
  return (
    <a href='#' className='relative group bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '>
      <Image src="/album.jpg" className='w-full rounded' width={120} height={120} alt='Capa da playlist com um carro jdm'/>
      <strong className='font-semibold'>Daily Mix 1</strong>
      <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>

      <button className='absolute w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black top-[40%] right-4 invisible group-hover:visible'>
        <Play fill='black'/>
      </button>
    </a>
  )
}