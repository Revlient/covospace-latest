import { Link } from 'react-router-dom';

// Icon components
const ClientsIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const StartupIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const EnterpriseIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const FreelancerIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const ConsultingIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const TechIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

export default function OurClients() {
  const clientCategories = [
    {
      icon: StartupIcon,
      title: "Startups & Entrepreneurs",
      count: "150+",
      description: "Early-stage companies and innovative entrepreneurs building the next big thing",
      services: ["Private offices", "Flexi desks", "conference rooms", "Virtual office", "Networking events"]
    },
    {
      icon: EnterpriseIcon,
      title: "Enterprise Companies",
      count: "50+",
      description: "Established corporations using our spaces for satellite offices and project teams",
      services: ["Private office suites", "Dedicated conference rooms", "Corporate events", "Business address", "Mail handling"]
    },
    {
      icon: FreelancerIcon,
      title: "Freelancers & Consultants",
      count: "200+",
      description: "Independent professionals seeking a productive workspace and community",
      services: ["Flexi desk access", "Day passes", "Conference Room bookings", "Professional address", "Networking opportunities"]
    },
    {
      icon: TechIcon,
      title: "Tech & Creative Agencies",
      count: "75+",
      description: "Digital agencies, software companies, and creative studios",
      services: ["Team spaces", "Collaboration areas", "High-speed internet", "Presentation rooms", "Client conferencespaces"]
    },
    {
      icon: ConsultingIcon,
      title: "Professional Services",
      count: "100+",
      description: "Law firms, accounting firms, consulting companies, and other professional services",
      services: ["Executive offices", "Client conference rooms", "Confidential spaces", "Business address", "Administrative support"]
    }
  ];

  const clientLogos = [
    { name: "TechFlow Solutions", industry: "Technology" },
    { name: "Design Studio Kerala", industry: "Creative" },
    { name: "GreenTech Innovations", industry: "CleanTech" },
    { name: "Coastal Consulting", industry: "Professional Services" },
    { name: "Digital Marketing Pro", industry: "Marketing" },
    { name: "FinanceWorks", industry: "Financial Services" },
    { name: "HealthTech Kerala", industry: "Healthcare" },
    { name: "EduSoft Solutions", industry: "Education Technology" },
    { name: "Spice Route Exports", industry: "International Trade" },
    { name: "Maritime Logistics", industry: "Shipping & Logistics" },
    { name: "Kerala Craft Co.", industry: "E-commerce" },
    { name: "Innovation Labs", industry: "Research & Development" }
  ];

  const successMetrics = [
    { number: "95%", label: "Client Retention", description: "Long-term partnerships built on satisfaction" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock assistance for our clients" },
    { number: "100%", label: "Satisfaction Rate", description: "Committed to exceeding expectations" }
  ];

  const benefits = [
    "Flexible lease terms from daily to monthly contracts",
    "Prime business address in the center of Kochi",
    "Access to a diverse professional network",
    "State-of-the-art conferenceand conference facilities",
    "24x7 security and professional maintenance",
    "High-speed internet and modern technology infrastructure",
    "Administrative support and business services",
    "Scalable solutions that grow with your business"
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759945551/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_ftvh2b.jpg)',
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
                <ClientsIcon />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-lime-400">Clients</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
              From innovative startups to established enterprises, we're proud to serve a diverse community of 
              professionals who call Covspace their workspace home in the heart of Kochi, Kerala.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-lime-400 mb-2">{metric.number}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1">{metric.label}</h3>
                  <p className="text-xs sm:text-sm text-white/80">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serving Diverse Industries
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our workspace solutions cater to professionals across various industries, 
              from tech startups to established corporations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {clientCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-lime-200 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-lime-50 rounded-lg group-hover:bg-lime-100 transition-colors duration-300">
                    <category.icon />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-lime-700 transition-colors duration-300">{category.title}</h3>
                      <span className="bg-lime-100 text-lime-800 text-sm font-medium px-3 py-1 rounded-full group-hover:bg-lime-600 group-hover:text-white transition-colors duration-300">{category.count}</span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md hover:bg-lime-100 hover:text-lime-800 transition-colors duration-200">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          
      {/* Client Showcase */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse portfolio of clients spanning multiple industries choose Covspace for their workspace needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300">
                <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-600 font-semibold text-sm">{client.name}</span>
                </div>
                <p className="text-xs text-gray-500">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Businesses Choose Covspace
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Our clients choose us because we understand that workspace is more than just a desk and chair. 
                We provide an ecosystem that supports business growth, professional networking, and operational efficiency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                    <CheckIcon />
                    <span className="ml-3 text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-lime-600 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="text-lime-100 mb-6">
                  Become part of Kochi's most vibrant professional community. Whether you're a startup, 
                  established business, or independent professional, we have the perfect workspace solution for you.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckIcon />
                    <span className="ml-3">Flexible membership options</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckIcon />
                    <span className="ml-3">Prime Kochi location</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckIcon />
                    <span className="ml-3">Professional networking events</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckIcon />
                    <span className="ml-3">24x7 access and support</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link 
                    to="/contact"
                    className="block w-full bg-white text-lime-600 text-center font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Schedule a Tour
                  </Link>
                  <Link 
                    to="/contact"
                    className="block w-full border-2 border-white text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-lime-700 transition-colors duration-300"
                  >
                    Get Membership Info
                  </Link>
                </div>
              </div>
            </div>

            {/* Interactive Image Showcase */}
            <div className="relative">
              <div 
                className="rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96 bg-cover bg-center relative group cursor-pointer"
                style={{
                  backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759948248/working-designers_xmdcqe.jpg)'
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 transform group-hover:scale-105 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Environment</h3>
                    <p className="text-sm text-gray-600">Professional workspace designed for creativity and productivity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Join Our Client Community?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover why hundreds of businesses choose Covspace as their workspace partner. 
            Schedule a tour today and see how we can support your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-lime-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-lime-700 transition-colors duration-300"
            >
              Contact Our Team
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center border-2 border-lime-600 text-lime-600 font-semibold py-3 px-8 rounded-lg hover:bg-lime-50 transition-colors duration-300"
            >
              Learn More About Us
            </Link>
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