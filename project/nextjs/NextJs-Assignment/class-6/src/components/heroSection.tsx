export default function HeroSection() {
    return (
      <section className="w-full py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">
            Sell Your Car on PakWheels and Get the Best Price
          </h2>
          <div className="flex items-center justify-center gap-8">
            {/* Left Column */}
            <div className="w-1/2 p-6 border border-gray-300 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Post your Ad on PakWheels
              </h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>
                  <span className="text-green-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline">
                      <path d="M10 15l-4-4 1.41-1.41L10 12.17l6.59-6.58L18 7l-8 8z"/>
                    </svg>
                  </span>
                  Post your Ad for Free in 3 Easy Steps
                </li>
                <li>
                  <span className="text-green-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline">
                      <path d="M10 15l-4-4 1.41-1.41L10 12.17l6.59-6.58L18 7l-8 8z"/>
                    </svg>
                  </span>
                  Get Genuine offers from Verified Buyers
                </li>
                <li>
                  <span className="text-green-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline">
                      <path d="M10 15l-4-4 1.41-1.41L10 12.17l6.59-6.58L18 7l-8 8z"/>
                    </svg>
                  </span>
                  Sell your car Fast at the Best Price
                </li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-500">
                Post Your Ad
              </button>
            </div>
  
            {/* Divider with 'OR' */}
            <div className="text-gray-500 font-semibold">OR</div>
  
            {/* Right Column */}
            <div className="w-1/2 p-6 border border-gray-300 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Try PakWheels Sell It For Me
              </h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>
                  <span className="text-green-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline">
                      <path d="M10 15l-4-4 1.41-1.41L10 12.17l6.59-6.58L18 7l-8 8z"/>
                    </svg>
                  </span>
                  Dedicated Sales Expert to Sell your Car
                </li>
                <li>
                  <span className="text-green-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline">
                      <path d="M10 15l-4-4 1.41-1.41L10 12.17l6.59-6.58L18 7l-8 8z"/>
                    </svg>
                  </span>
                  We Bargain for you and share the Best Offer
                </li>
                <li>
                  <span className="text-green-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline">
                      <path d="M10 15l-4-4 1.41-1.41L10 12.17l6.59-6.58L18 7l-8 8z"/>
                    </svg>
                  </span>
                  We ensure Safe & Secure Transaction
                </li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500">
                Register Your Car
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
