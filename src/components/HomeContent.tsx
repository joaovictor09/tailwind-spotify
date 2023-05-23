import { Play } from 'lucide-react'
import Image from 'next/image'
import { Header } from './Header'
import { MainContentPlaylist } from './MainContentPlaylist'
import { SimpleContentPlaylist } from './SimpleContentPlaylist'

export function HomeContent(){
  const mainPlaylist = [
    {
      id: 1,
      imgSrc: '/album.jpg',
      playlistName: 'LATE NIGHT DRIVES'
    },
    {
      id: 2,
      imgSrc: '/album.jpg',
      playlistName: 'LATE NIGHT'
    },
    {
      id: 3,
      imgSrc: '/album.jpg',
      playlistName: 'LATE NIGHT DRIVES'
    },
    {
      id: 4,
      imgSrc: '/album.jpg',
      playlistName: 'LATE NIGHT DRIVES'
    },
    {
      id: 5,
      imgSrc: '/album.jpg',
      playlistName: 'LATE NIGHT DRIVES'
    },
    {
      id: 6,
      imgSrc: '/album.jpg',
      playlistName: 'LATE NIGHT DRIVES'
    },
  ]
  
  return(
    <main className="flex-1 p-6">
      <Header />

      {/* Main PLaylists */}

      <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 '>
        {
          mainPlaylist.map(playlist => (
            <MainContentPlaylist 
              imgSrc={playlist.imgSrc} 
              playlistName={playlist.playlistName} 
              key={playlist.id}
            />
          ))
        }
      </div>

      <h2 className='font-semibold text-2xl mt-10'>Made for @jooao.victor_</h2>

      <div className='grid grid-cols-9 gap-4 mt-4'>
        <SimpleContentPlaylist />
        <SimpleContentPlaylist />
        <SimpleContentPlaylist />        
        <SimpleContentPlaylist />        
      </div>
    </main>
  )
}