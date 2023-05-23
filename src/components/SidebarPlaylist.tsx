import Link from "next/link";

interface SidebarPlaylistProps {
  text: string;
  href: string;
}

export function SidebarPlaylist({ href, text }: SidebarPlaylistProps) {
  return (
    <Link href={href} className='font-medium text-sm text-zinc-400 hover:text-zinc-100 transition-colors line-clamp-1'>{text}</Link>
  )
}