import { Play } from "lucide-react";
import Image from "next/image";

interface MainContentPlaylistProps {
  imgSrc: string;
  playlistName: string;
}

export function MainContentPlaylist({ playlistName, imgSrc }:MainContentPlaylistProps) {
  return (
    <a href="#" className='relative group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors pr-20'>
      <Image 
        className="w-14 xl:w-24 md:w-20 2xl:w-max" 
        alt='Capa da playlist com um carro jdm'
        src={imgSrc} 
        width={104} 
        height={104} 
      />
      <strong className='line-clamp-2'>{playlistName}</strong>

      <button className='absolute right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='black'/>
      </button>
    </a>
  )
}