import localFont from 'next/font/local'

import '../globals.css'

const gotham = localFont({
  src: [
    {
      path: '../../fonts/GothamLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../fonts/GothamBook.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/GothamMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/GothamBold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-gotham'
})

export const metadata = {
  title: 'Playlist',
  description: 'Listen to music.',
}

export default function PlaylistLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return <section>{children}</section>;
}