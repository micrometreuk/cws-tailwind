import Image from 'next/image'
import Link from 'next/link'
import CopyRight from '../Copyright'

export default function Footer() {
  return (
    <div>
      <footer className="flex h-24 w-full items-center justify-center border-t">
      <Link href="/">
        <a
          className="flex items-center justify-center gap-2"
        >
          Powered by{' '}
          <Image src="/logo1.png" alt="Vercel Logo" width={72} height={16} />
        </a>
        </Link>

      </footer>
      <footer className="flex h-24 w-full items-center justify-center border-t">
      <Link href="/privacy">
        <a
          className="flex items-center justify-center gap-1"
        >
          Privacy Policy
        </a>
        </Link>
      </footer>
      <footer>
        <CopyRight />
      </footer>
    </div>
  )
}