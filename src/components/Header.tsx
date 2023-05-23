import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className='flex items-center gap-4'>
        <button className='p-1 rounded-full bg-black/40'>
          <ChevronLeft />
        </button>
        <button className='p-1 rounded-full bg-black/40'>
          <ChevronRight />
        </button>
      </div>

      <button className="flex items-center p-1 gap-2 bg-zinc-950 rounded-full">
        <Image 
          src="/album.jpg" 
          width={30} 
          height={30} 
          alt="Capa da playlist com um carro jdm"
          className="rounded-full"
        />
        <span className="font-semibold text-sm">@jooao.victor_</span>
        <ChevronDown className="fill-white"/>
      </button>
    </div>
  )
}