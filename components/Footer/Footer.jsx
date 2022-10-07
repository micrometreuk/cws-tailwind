import Image from 'next/image'
import Link from 'next/link'
import CopyRight from '../Copyright'

export default function Footer() {
  return (
    <div>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/logo1.png" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-1"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </footer>
      <footer>
        <CopyRight />
      </footer>

      <style jsx>{`

      `}</style>

      <style jsx global>{`
        html,
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}