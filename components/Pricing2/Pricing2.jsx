
import React from 'react'


const Pricing10 = () => {

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="self-start flex-shrink-0 mr-2 h-5 w-5 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )

  return (
    <div className="relative w-full py-20 px-5 flex flex-col items-center bg-gradient-to-t from-gray-50 to-sky-500 font-body">
       
      {/* :BACKGROUND TOP */}
      <img src="https://fancytailwind.com/static/659e19fb14a461d33a54aa2c46757729/bg-Subtle-Prism.svg" alt="" className="absolute top-0 left-0 w-full h-full opacity-30" style={{ clipPath: "ellipse(67% 46% at 52% 10%)" }}/>

      {/* :INDIVIDUAL PRICING */}
      <div className="z-10 w-full flex flex-col-reverse lg:flex-row justify-center max-w-7xl">

        {/* ::Title and actions */}
        <div className="mt-10 lg:mr-5 flex flex-col flex-shrink-0 text-white">
          {/* Offer name */}
          {/* Title */}
          <h2 className="py-5 text-3xl sm:text-5xl leading-snug">Private hosting for your Wordpress Site 
          </h2>
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 text-center">
            <a href="#link" className="mr-8 py-3 px-6 w-full sm:w-auto bg-gray-800 rounded-3xl text-lg tracking-wide font-medium transition-all duration-150 transform hover:bg-gray-700">Get your lifetime access</a>
            <a href="#link" className="py-3 px-6 w-full sm:w-auto bg-gray-50 rounded-3xl text-lg text-gray-800 tracking-wide font-medium transition-all duration-150 transform hover:bg-gray-100">You are a team ? Contact Us.</a>
          </div>
        </div>

        {/* ::Lifetime membership details */}
        <div className="lg:ml-5 py-5 px-4 flex flex-col items-center bg-gray-100 border border-blue-200 shadow-lg rounded-lg text-gray-800">
          {/* Title */}
          <h3 className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-sky-200 to-sky-600">Get started <br/> <span className="text-sm font-normal">from</span></h3>
          {/* Price */}
          <p className="py-5 text-6xl font-extrabold">£500</p>
          {/* What's included */}
          <span className="self-start w-full mt-3 inline-flex items-center text-sm text-sky-600 font-medium uppercase">
            <span className="flex-shrink-0">What's included</span>
            <span className="w-full h-px ml-2 bg-gradient-to-l from-sky-200 to-sky-600"/>
          </span>
          {/* Features list */}
          <div className="flex flex-col sm:flex-row">
            <ul className="flex flex-col px-3">
              <li className="py-2.5 inline-flex"><CheckIcon/>Website security (SSL)</li>
              <li className="py-2.5 inline-flex"><CheckIcon/>Custom Domain</li>
              <li className="py-2.5 inline-flex"><CheckIcon/>Protection against DDoS Attack</li>
              <li className="py-2.5 inline-flex"><CheckIcon/>Scalable for dynamic traffic</li>
            </ul>
            <ul className="flex flex-col px-3">
              <li className="py-2.5 inline-flex"><CheckIcon/>Professional Email.</li>
              <li className="py-2.5 inline-flex"><CheckIcon/>High availability options</li>
              <li className="py-2.5 inline-flex"><CheckIcon/>Full secure access </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Pricing10
