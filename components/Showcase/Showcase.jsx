import Image from 'next/image'
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from "./Showcase.module.css";
export default function Showcase() {

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };

  const callouts = [
    {
      name: 'MicrometreUK ',
      description: 'MicrometreUK project website ',
      imageSrc: '/12.webp',
      imageAlt: 'website image.',
      href: 'https://micrometre.uk/',
    },
    {
      name: 'Elmbridge Painting',
      description: 'Professional Painters and Decorators in Elmbridge and surrounding areas.',
      imageSrc: '/10.webp',
      imageAlt: 'website image.',
      href: 'https://elmbridgepainting.com/',
    },
    {
      name: 'Electrical surrey',
      description: 'Electrical specialists serving surrey and surrounding areas.',
      imageSrc: '/11.webp',
      imageAlt: 'website image.',
      href: 'https://electricalsurrey.com/',
    },
  ]



  return (
    <div className={styles.externalContainer}>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
      >

        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-1xl py-16 sm:py-24 lg:max-w-none lg:py-2">
              <h2 className="text-4xl font-bold text-gray-900">Showcase</h2>

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
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a 
                      href={callout.href}
                      target="_blank"
                      rel="noreferrer"


                      >
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
