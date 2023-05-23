import Image from "next/image";

export function PlaylistInfo() {
  return (
    <div className="flex items-center text-sm">
      <div className="flex gap-1 items-center">
        <Image 
          src='/album.jpg'
          alt="capa da playlist"
          width={25}
          height={25}
          className="fill rounded-full" 
        />
        <a href="#" className="font-bold">@jooao.victor_</a>
      </div>
      
      <strong>&nbsp;&#x2022;&nbsp;</strong>
      <span className="font-medium">9.275</span>
      <strong>&nbsp;&#x2022;&nbsp;</strong>
      <span className="font-medium">13 músicas,&nbsp;</span>
      <span className="text-zinc-400 font-medium">48min 30 s</span>
    </div>
  )
}