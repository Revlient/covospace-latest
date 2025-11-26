import { Link } from 'react-router-dom';

// Icon components
const MeetingIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const VideoIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const MicrophoneIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const DisplayIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CateringIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const WifiIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

export default function MeetingRooms() {
  const features = [
    {
      icon: VideoIcon,
      title: "Audio/Video Conferencing",
      description: "State-of-the-art conferencing technology with HD cameras and crystal-clear audio systems"
    },
    {
      icon: DisplayIcon,
      title: "Large Display Screens",
      description: "Premium 4K displays with wireless screen sharing capabilities for seamless presentations"
    },
    {
      icon: MicrophoneIcon,
      title: "Professional Audio",
      description: "Advanced microphone systems and speakers for clear communication with remote participants"
    },
    {
      icon: CateringIcon,
      title: "Catering on Request",
      description: "Professional catering services available for meetings, conferences, and corporate events"
    },
    {
      icon: WifiIcon,
      title: "High-Speed Internet",
      description: "Dedicated enterprise-grade internet connection for uninterrupted video calls and file sharing"
    },
    {
      icon: ShieldIcon,
      title: "Private & Secure",
      description: "Soundproof rooms with privacy glass and secure access for confidential business discussions"
    }
  ];

  const roomTypes = [
    {
      spaceId: "CS2-C1",
      type: "Conference Room",
      capacity: "8 Seater",
      area: "",
      price: "₹700",
      period: "per hour",
      description: "Ideal for client meetings and team presentations",
      features: [
        "Complimentary Beverages and Cookies",
        "Interactive Display",
        "Unlimited Wi-Fi"
      ],
      highlight: true
    }
  ];

  const bookingOptions = [
    {
      title: "Hourly Booking",
      description: "Book conference rooms by the hour for flexible scheduling",
      price: "INR 700/hour",
      benefits: ["Pay only for time used", "Easy online booking", "Last-minute availability"]
    },
    {
      title: "Half-Day Package",
      description: "4-hour package with complimentary refreshments",
      price: "INR 2,800",
      benefits: ["4 hours of room time", "Free tea/coffee service", "Complimentary Beverages and Cookies", "Setup assistance"]
    },
    {
      title: "Full-Day Package",
      description: "8-hour package with catering options",
      price: "INR 5,600",
      benefits: ["8 hours of room time", "Complimentary Beverages and Cookies", "Interactive Display", "Dedicated support", "Equipment setup included"]
    }
  ];

  const amenities = [
    "Professional furniture and ergonomic seating",
    "Climate-controlled environment",
    "Natural lighting with blackout options",
    "Complimentary stationery and notepads",
    "High-speed printing and scanning services",
    "Secure storage for personal belongings",
    "Tea, coffee, and refreshment services",
    "Dedicated parking spaces for conferenceattendees"
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759944074/IMG_6143_w63elj.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                <MeetingIcon />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Premium <span className="text-lime-400">Conference Rooms</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Impress your clients and collaborate effectively in our state-of-the-art conference rooms.
              Professional conference room with interactive display and complimentary refreshments.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto mb-8">
              <div className="text-white/90 text-sm">
                <p><strong>Space ID:</strong> CS2-C1 | <strong>Seats:</strong> 8</p>
                <p className="mt-2"><strong>Price:</strong> ₹700/Hour</p>
                <p className="text-xs text-white/60 italic mt-2">* All prices are exclusive of GST</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-lime-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-lime-700 transition-colors duration-300"
              >
                Book a Room
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                View Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Technology & Amenities
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our conference rooms are equipped with the latest technology and premium amenities to ensure 
              your meetings are productive, professional, and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-lime-200 transition-all duration-300 group">
                <div className="mb-4 p-2 bg-lime-50 rounded-lg group-hover:bg-lime-100 transition-colors duration-300 w-fit">
                  <feature.icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-lime-700 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types & Pricing */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759948504/empty-business-meeting-conference-room-with-graphs-diagrams-tv-background_x8qtf5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Conference Room Options
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Choose from our range of professionally designed conferencespaces, each equipped with 
              premium technology and tailored for different group sizes and conferencetypes.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {roomTypes.map((room, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 lg:p-8 ${
                room.highlight ? 'border-lime-500 ring-2 ring-lime-500 ring-opacity-50' : 'border-gray-200'
              }`}>
                {room.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-lime-600 text-white px-4 py-1 text-sm font-semibold rounded-full">
                      Available
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="bg-lime-50 text-lime-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                    {room.spaceId}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{room.type}</h3>
                  <p className="text-lime-600 font-medium mb-1">{room.capacity}</p>

                  <div className="mb-2">
                    <span className="text-3xl font-bold text-gray-900">{room.price}</span>
                    <span className="text-gray-500 ml-2">{room.period}</span>
                  </div>
                  <p className="text-sm text-gray-600">{room.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {room.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckIcon />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-gray-600 italic text-center mb-6">* All prices are exclusive of GST</p>

                <Link
                  to="/contact"
                  className="block w-full text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300 bg-lime-600 text-white hover:bg-lime-700"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Flexible Booking Options
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need a room for a quick conferenceor an all-day conference, 
              we offer flexible booking options to suit your schedule and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {bookingOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-lime-200 transition-all duration-300 group">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-lime-700 transition-colors duration-300">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{option.description}</p>
                <div className="text-2xl font-bold text-lime-600 mb-4 group-hover:text-lime-700 transition-colors duration-300">{option.price}</div>
                <ul className="space-y-2 mb-4">
                  {option.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckIcon />
                      <span className="ml-3">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-600 italic text-center">* Price exclusive of GST</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities & CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Complete Conference Experience
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Every conference room booking includes access to our full range of amenities and services, 
                ensuring your meetings are productive and your guests are impressed.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                    <CheckIcon />
                    <span className="ml-3 text-gray-700 text-sm">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="bg-lime-600 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Book?</h3>
                <p className="text-lime-100 mb-6">
                  Reserve your conference room today and experience the difference premium facilities make. 
                  Our team is ready to help you plan the perfect conferenceor event.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <ClockIcon />
                    <span className="ml-3">Available 7 days a week</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <VideoIcon />
                    <span className="ml-3">Advanced A/V technology included</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ShieldIcon />
                    <span className="ml-3">Private and secure environment</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link 
                    to="/contact"
                    className="block w-full bg-white text-lime-600 text-center font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Book Conference Room
                  </Link>
                  <Link 
                    to="/contact"
                    className="block w-full border-2 border-white text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-lime-700 transition-colors duration-300"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>

            {/* Interactive Conference Room Showcase */}
            <div className="relative">
              <div 
                className="rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96 bg-cover bg-center relative group cursor-pointer"
                style={{
                  backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759948586/IMG_2935_xsa1h4.jpg)'
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 transform group-hover:scale-105 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Executive Boardroom</h3>
                    <p className="text-sm text-gray-600">Premium conferencespace with advanced presentation technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple Booking Process
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Booking your perfect conference room is quick and easy. Here's how you can get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Room Type</h3>
              <p className="text-gray-600 text-sm">
                Select from 4-seater huddle rooms to executive boardrooms based on your group size.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Date & Time</h3>
              <p className="text-gray-600 text-sm">
                Check availability and book your preferred date, time, and duration online or by phone.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Add Services</h3>
              <p className="text-gray-600 text-sm">
                Customize your booking with catering, equipment setup, and additional services as needed.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Enjoy Your Meeting</h3>
              <p className="text-gray-600 text-sm">
                Arrive and start your conferenceimmediately - everything will be set up and ready to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-8 sm:py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-lime-600 hover:text-lime-700 font-semibold text-base sm:text-lg transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
} 