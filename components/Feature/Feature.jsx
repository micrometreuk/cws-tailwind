/* This example requires Tailwind CSS v2.0+ */
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon,
ComputerDesktopIcon, LanguageIcon, ServerIcon, NewspaperIcon, LockClosedIcon, VideoCameraIcon, VideoCameraSlashIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'The CWS team  design your site with direct verbal and visual feedback from you based upon known prerequisites and your business requirements.',
    description:
      'Pages are designed to meet SEO (Search Engine Optimisation) and Accessibility requirements by default. Provision and maintenance of your digital presence. Spend your precious time focusing on your business, not trying to learn how best to setup and learn software concepts and tools.',
    icon: GlobeAltIcon,
  },
  {
    name: 'What \'s a static site? ',
    description:
      'A digital shop window for your business. Provides useful information such as what you do, where you are, how to communicate with you, customer feedback and  examples of your work via  your business media channels such as Twitter, Facebook, YouTube, LinkedIn, Instagram.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'What do I get?',
    description:
      'A multiple page site: Company service or product description. location, open hours, feedback, about your team, contact and other relevant information you provideViewable on multiple devices (phones, tablets and PC\'s \).  Pages load quickly due to frameworks & technology used..',
    icon: BoltIcon,
  },
  {
    name: 'What about Security?',
    description:
      'Website sits behind a CDN, which ensures security against DOS (Denial Of Service) attacks and ransomware. A static site is not an interactive interface, no data is directly captured from visitors. Developed site is containerised, there are no interactive programs running, no external admin access, nothing to hack. Non shared hosting - One VPS, one IP address for one business.',
    icon: LockClosedIcon,
  },
  {
    name: 'Social media integration:',
    description:
      'Claim company name and use as a marketing channel for social media platforms. Management of content across social media platforms.The portal to a digital presence technology. It\'s configuration, management and maintenance via people without the need to learn software. Business card and flyers designed to maintain consistency of brand recognition.',
    icon: NewspaperIcon,
  },
  {
    name: 'Ownership of content',
    description:
      'Content hosted on third party platforms removes an essential aspect of privacy the right to control, edit, manage, and delete information about an individual and decide when, how, and to what extent information is communicated to others.',
    icon: VideoCameraIcon,
  },
]

export default function Feature() {
  return (
    <div className="bg-white dark:bg-black py-12" id="fetures">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Why get CWS hosting
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white ">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-slate-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

