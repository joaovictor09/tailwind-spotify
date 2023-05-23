import { HomeIcon, Library, Search } from "lucide-react";
import { SidebarPlaylist } from "./SidebarPlaylist";
import Link from "next/link";

export function Sidebar() {

  const playlists = [
    {
      text: "Portugal (Speed)",
      href: "playlist"
    },
    {
      text: "Just us",
      href: "#"
    },
    {
      text: "BEST TECHNO SONGS 2023 - TIKTOK TEKKNO",
      href: "#"
    },
    {
      text: "LATE NIGHT DRIVES VIBES 🚘🌒🍃 | It&apos;s Not So Bad, After Dark",
      href: "#"
    },
  ]

  return (
    <aside className="md:w-72 w-60 bg-zinc-950 p-6">
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-red-500 rounded-full'/>
        <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
        <div className='w-3 h-3 bg-green-500 rounded-full'/>
      </div>
      
      <nav className='space-y-5 mt-10'>
        <Link href="/" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <HomeIcon />
          Home
        </Link>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Search />
          Search
        </a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Library />
          Your Library
        </a>
      </nav>

      <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
        {
          playlists.map(playlist => (
            <SidebarPlaylist key={playlist.text} href={playlist.href} text={playlist.text}/>
          ))
        }
      </nav>
    </aside>
  )
}