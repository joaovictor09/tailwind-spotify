import { Footer } from "@/components/Footer";
import { Sidebar } from "../../components/Sidebar";
import Image from "next/image";
import { Header } from "@/components/Header";
import { PlaylistInfo } from "./components/PlaylistInfo";
import { PlayIcon } from "lucide-react";

export default function PlaylistPage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <Header />
          
          <div className="mt-10 scroll">
            <div className="flex items-end">
              <Image 
                src='/album.jpg'
                alt="capa da playlist"
                width={200}
                height={200}
                className="fill" 
              />

              <div className="ml-7 flex flex-col gap-2">
                <span className="font-bold text-sm">Playlist pública</span>
                <h1 className="font-bold text-6xl">Fast and Furious: Tokyo Drift</h1>
                <p className="text-sm text-zinc-400">all the hits from central Tokyo!</p>
                
                <PlaylistInfo />
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-between">
            <table className="w-full table-auto text-start mt-5">
              <tr className="text-zinc-400 text-sm font-medium border-b-[1px] border-zinc-400 m-10">
                <th scope="col" className="text-start py-3 mb-3 pl-10">Título</th>
                <th scope="col" className="text-start py-3 mb-3">Álbum</th>
                <th scope="col" className="text-start py-3 mb-3">Adicionada em</th>
              </tr>

              <tr className="group w-full pt-10 hover:bg-white/5 rounded">
                <td className="py-3 pl-3">
                  <div className="flex items-center gap-4">
                    <PlayIcon className="fill-white w-4 h-4 invisible group-hover:visible"/>
                    <Image 
                      src='/album.jpg'
                      alt="capa da playlist"
                      width={40}
                      height={40}
                      className="fill" 
                    />
                    <div className="flex flex-col">
                      <strong className="font-medium">Cheirosa (Speed Up)</strong>
                      <a href="#" className="text-zinc-400 text-sm">St.Borges</a>
                    </div>
                  </div>
                </td>

                <td> 
                  <a href="#" className="text-zinc-400 text-sm">
                    The Fast and Furious
                  </a>
                </td>

                <td>
                  <span className="text-zinc-400 text-sm">
                  1 de jun. de 2021
                  </span>
                </td>
              </tr>
              <tr className="group w-full pt-10 hover:bg-white/5 rounded">
                <td className="py-3 pl-3">
                  <div className="flex items-center gap-4">
                    <PlayIcon className="fill-white w-4 h-4 invisible group-hover:visible"/>
                    <Image 
                      src='/album.jpg'
                      alt="capa da playlist"
                      width={40}
                      height={40}
                      className="fill" 
                    />
                    <div className="flex flex-col">
                      <strong className="font-medium">Cheirosa (Speed Up)</strong>
                      <a href="#" className="text-zinc-400 text-sm">St.Borges</a>
                    </div>
                  </div>
                </td>

                <td> 
                  <a href="#" className="text-zinc-400 text-sm">
                    The Fast and Furious
                  </a>
                </td>

                <td>
                  <span className="text-zinc-400 text-sm">
                  1 de jun. de 2021
                  </span>
                </td>
              </tr>
              <tr className="group w-full pt-10 hover:bg-white/5 rounded">
                <td className="py-3 pl-3">
                  <div className="flex items-center gap-4">
                    <PlayIcon className="fill-white w-4 h-4 invisible group-hover:visible"/>
                    <Image 
                      src='/album.jpg'
                      alt="capa da playlist"
                      width={40}
                      height={40}
                      className="fill" 
                    />
                    <div className="flex flex-col">
                      <strong className="font-medium">Cheirosa (Speed Up)</strong>
                      <a href="#" className="text-zinc-400 text-sm">St.Borges</a>
                    </div>
                  </div>
                </td>

                <td> 
                  <a href="#" className="text-zinc-400 text-sm">
                    The Fast and Furious
                  </a>
                </td>

                <td>
                  <span className="text-zinc-400 text-sm">
                  1 de jun. de 2021
                  </span>
                </td>
              </tr>
              <tr className="group w-full pt-10 hover:bg-white/5 rounded">
                <td className="py-3 pl-3">
                  <div className="flex items-center gap-4">
                    <PlayIcon className="fill-white w-4 h-4 invisible group-hover:visible"/>
                    <Image 
                      src='/album.jpg'
                      alt="capa da playlist"
                      width={40}
                      height={40}
                      className="fill" 
                    />
                    <div className="flex flex-col">
                      <strong className="font-medium">Cheirosa (Speed Up)</strong>
                      <a href="#" className="text-zinc-400 text-sm">St.Borges</a>
                    </div>
                  </div>
                </td>

                <td> 
                  <a href="#" className="text-zinc-400 text-sm">
                    The Fast and Furious
                  </a>
                </td>

                <td>
                  <span className="text-zinc-400 text-sm">
                  1 de jun. de 2021
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </main>

      </div>
      
      <Footer />
    </div>
  )
}