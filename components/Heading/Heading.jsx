import Image from "next/image";
import Link from "next/link";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Contact', href: '#' },
]

export default function Heading() {
  return (
    <div className="relative overflow-hidden bg-white mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-6 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>


          <main className="mx-auto mt-14 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-6xl">
                <span className="block xl:inline">Croydon Web Services</span>{' '}
              </h1>
            </div>

            <div className="sm:text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-indigo-600 xl:inline">Your portal to digital presence technology</span>
              </h1>
            </div>


          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-20 lg:right-0 lg:w-1/2
      flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg
            ">
        <Image
          src="/1.webp"
          alt="logo"
          width={1080}
          height={720}
          priority
        />
      </div>
    </div>
  )
}
