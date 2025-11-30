import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cmsApi } from '../../lib/api';
import { Service } from '../../types/cms';

const Background = () => (
       <div className="hidden absolute inset-0 sm:flex items-center justify-center pointer-events-none bg-white ">
      {/* <Ellipse className="top-0"/> */}
      <div className="position absolute -left-20 bottom-[-300px] ">
        <img src="/Ellipse3.svg" className="w-[500px] hidden lg:block" />
      </div>
      <div className="position absolute left-0 bottom-10 ">
        <img src="/Ellipse.svg"/>
      </div>
       <div className="position absolute -right-10 -top-20 " >
        <img src="/Ellipse2.svg" className="hidden lg:block w-[300px]" />
      </div>
      <div className="position absolute right-0 top-20 ">
        <img src="/Rectangle.svg"/>
      </div>

        <div className="text-[25rem] sm:text-[35rem] md:text-[50rem] lg:text-[70rem] font-bold text-transparent koulen-regular pt-10"
             style={{
               WebkitTextStroke: '2px #E69464',
              //  opacity: 0.1
             }}>
          CS
        </div>
      </div>
);

const EnquireIcon = () => (
    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.125 13.4583L14.875 5.54163M14.875 5.54163H6.125M14.875 5.54163V13.4583" stroke="#F3F3F3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

);

// Interface for ServiceCard props
interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  route: string;
}

// The main card component that will be rendered for each service
const ServiceCard = ({ title, description, features, route }: ServiceCardProps) => {
  const navigate = useNavigate();

  const handleEnquireClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(route);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/80 shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 flex-grow">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc list-inside">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="mt-6">
        <button 
          onClick={handleEnquireClick}
          className="flex items-center space-x-2 bg-lime-500 text-white font-bold text-xs py-2 px-4 rounded-md hover:bg-lime-600 transition-colors"
        >
          <span>ENQUIRE NOW</span>
          <EnquireIcon />
        </button>
      </div>
    </div>
  );
};


// The main export component
const ServicesSection = () => {
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

  if (loading) return null;

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 font-sans overflow-hidden">
      <Background />
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="relative inline-block mb-12">
          <svg width="419" height="75" viewBox="0 0 419 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <foreignObject x="-30.6" y="-30.6" width="479.7" height="136.2">
              <div
                style={{
                  backdropFilter: 'blur(15.3px)',
                  clipPath: 'url(#bgblur_0_61_10583_clip_path)',
                  height: '100%',
                  width: '100%'
                }}
              />
            </foreignObject>
            <g data-figma-bg-blur-radius="30.6">
              <path d="M0 19C0 8.50659 8.50659 0 19 0H249.548C251.912 0 254.255 0.44112 256.457 1.30071L294.623 16.1993C296.825 17.0589 299.169 17.5 301.532 17.5H399.5C409.993 17.5 418.5 26.0066 418.5 36.5V56C418.5 66.4934 409.993 75 399.5 75H19C8.5066 75 0 66.4934 0 56V19Z" fill="#D95000" fillOpacity="0.6"/>
              <path d="M19 1H249.548C251.787 1 254.008 1.41807 256.094 2.23242L294.26 17.1309C296.578 18.0357 299.044 18.5 301.532 18.5H399.5C409.441 18.5 417.5 26.5589 417.5 36.5V56C417.5 65.9411 409.441 74 399.5 74H19C9.05888 74 1 65.9411 1 56V19C1 9.05888 9.05888 1 19 1Z" stroke="#D95000" strokeOpacity="0.1" strokeWidth="2"/>
            </g>
            <defs>
              <clipPath id="bgblur_0_61_10583_clip_path" transform="translate(30.6 30.6)">
                <path d="M0 19C0 8.50659 8.50659 0 19 0H249.548C251.912 0 254.255 0.44112 256.457 1.30071L294.623 16.1993C296.825 17.0589 299.169 17.5 301.532 17.5H399.5C409.993 17.5 418.5 26.0066 418.5 36.5V56C418.5 66.4934 409.993 75 399.5 75H19C8.5066 75 0 66.4934 0 56V19Z"/>
              </clipPath>
            </defs>
          </svg>

          <h2 className="absolute inset-0 flex items-center justify-start pl-8 text-3xl text-white" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: 0 }}>OUR COVSPACES</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 tracking-wide">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.name}
              description={service.description}
              features={service.features}
              route={`/${service.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;