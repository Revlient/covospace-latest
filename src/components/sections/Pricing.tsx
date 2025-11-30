import { useState, useEffect } from 'react';
import { useQuotePanel } from '../ui/QuotePanelProvider';
import { cmsApi } from '../../lib/api';
import { Service } from '../../types/cms';

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-black"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// Helper to format pricing string from the pricing object
const formatPricing = (pricing: Service['pricing']) => {
  if (pricing.monthly) return `- ${pricing.monthly} per month`;
  if (pricing.daily) return `- ${pricing.daily} per day`;
  if (pricing.hourly) return `- ${pricing.hourly} per hour`;
  if (pricing.annually) return `- ${pricing.annually} annually`;
  return '- Contact for pricing';
};

// Main Pricing Component
const Pricing = () => {
  const { openQuote } = useQuotePanel();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await cmsApi.getServices();
        setServices(data);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Data for the green office type buttons
  const officeTypes = [
    'CS2-01 Flexi Desk',
    'CS2-04 Dedicated Desk',
    'CS2-02/03/05/06 Office Suits',
    'CS2-C1 Conference Room',
    'CS2-01 Virtual Office',
  ];

  const PricingImageUrl = 'https://res.cloudinary.com/dobqxxtml/image/upload/v1759946073/new_litted_g4kces.jpg';

  return (
      <div 
      className="relative w-full min-h-[100vh] sm:h-[500px] md:h-[600px] lg:h-[900px] bg-cover bg-center font-sans bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${PricingImageUrl})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
      }}
    >
     <div className="absolute inset-0 bg-black opacity-20 sm:opacity-30"></div>

      {/* Container to position the content - mobile-first responsive */}
      <div className="relative h-full flex items-center flex-row-reverse justify-center sm:justify-start max-w-screen-2xl mx-auto px-2 py-8 sm:px-6 lg:px-8">
        
        {/* The frosted glass content box - fully responsive */}
        <div className="bg-white/80 sm:bg-white/75 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-2xl mx-auto sm:mx-0">
          <div className="flex flex-col space-y-6">
            {/* Header Section */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-black">COVSPACE</h1>
              <p className="text-sm tracking-[0.2em] font-medium text-black mt-1">
                KOCHI, KERALA
              </p>
            </div>

            {/* Office Types Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {officeTypes.map((type, index) => (
                <button
                  key={index}
                  className="bg-[#84cc16] text-white text-xs font-semibold px-3 py-1.5 rounded-md italic"
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Pricing List */}
            {loading ? (
              <div className="py-4 flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-lime-600"></div>
              </div>
            ) : (
              <ul className="space-y-1 pt-1">
                {services.map((service) => (
                  <li
                    key={service.id}
                    className="grid grid-cols-2 items-start text-base md:text-lg leading-snug"
                  >
                    <span className="font-medium text-black">&#x2022; {service.name}</span>
                    <span className="font-light text-black/90 text-left">{formatPricing(service.pricing)}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* GST Disclaimer */}
            <div className="pt-2">
              <p className="text-xs text-black/70 italic">* All prices are exclusive of GST</p>
            </div>

            {/* Learn More Button */}
            <div className="pt-6">
              <button onClick={openQuote} className="bg-black text-white font-bold py-3 pl-6 pr-3 rounded-full flex items-center gap-4 group transition-all duration-300 hover:shadow-2xl">
                LEARN MORE
                <div className="bg-[#84cc16] rounded-full p-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowIcon />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Pricing;