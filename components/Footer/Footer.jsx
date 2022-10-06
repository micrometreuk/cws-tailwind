import Head from 'next/head'
import Image from 'next/image'

export default function Footer(){
  return (
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/logo1.png" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
  )
}
