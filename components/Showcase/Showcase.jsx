import Image from 'next/image'
export default function Showcase() {


  const callouts = [
    {
      name: 'Evans Exteriorcleaning ',
      description: 'Professional exterior cleaning services.',
      imageSrc: '/13.webp',
      imageAlt: 'website image.',
      href: 'https://evansexteriorcleaning.co.uk/',
    },
    {
      name: 'Elmbridge Painting',
      description: 'Professional Painters and Decorators in Elmbridge ',
      imageSrc: '/10.webp',
      imageAlt: 'website image.',
      href: 'https://elmbridgepainting.com/',
    },
    {
      name: 'Electrical surrey',
      description: 'Electrical specialists Serving surrey ',
      imageSrc: '/11.webp',
      imageAlt: 'website image.',
      href: 'https://electricalsurrey.com/',
    },
  ]



  return (
        <div className="bg-gray-100 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-8">
            <div className="mx-auto max-w-1xl py-16 sm:py-2 lg:max-w-none lg:py-2 lg:text-center">
              <h2 className="text-4xl font-bold text-gray-900  dark:text-gray-400"   >Websites designed, built and hosted by CWS</h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <Image
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        width={500}
                        height={300}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500  dark:text-white">
                      <a 
                      href={callout.href}
                      target="_blank"
                      rel="noreferrer"


                      >
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900  dark:text-gray-400">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  );
}