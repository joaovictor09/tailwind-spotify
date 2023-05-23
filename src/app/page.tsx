import { Footer } from '@/components/Footer'
import { HomeContent } from '@/components/HomeContent'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <HomeContent />
      </div>
      
      <Footer />
    </div>
  )
}
