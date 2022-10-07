
/* This example requires Tailwind CSS v2.0+ */
import {
    BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon,
    ComputerDesktopIcon, LanguageIcon, ServerIcon, NewspaperIcon, LockClosedIcon, VideoCameraIcon, VideoCameraSlashIcon,
} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'What data we collect',
        description:
            'Log Files: We collect information when you visit our web site. This information may include your IP address, device and software characteristics (such as type and operating system), page views, referral URLs, device identifiers or other unique identifiers such as  carrier information. Log files are primarily used for the purpose of enhancing the user experience.',
        icon: ComputerDesktopIcon,
    },
    {
        name: 'Cookies?',
        description:
            'No cookies, AdSense or any other tracking technologies are being used',
        icon: BoltIcon,
    },
]

export default function Privacy() {
    return (
        <div className="bg-white py-12" id="privacy">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-lg leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        At Croydon Web Services we are committed to protecting your privacy. 
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

