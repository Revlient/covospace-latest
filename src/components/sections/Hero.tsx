import { useState, useEffect } from 'react';
import { useQuotePanel } from '../ui/QuotePanelProvider';
import { cmsApi } from '../../lib/api';
import { GlobalSettings } from '../../types/cms';

// Icon component for the button, recreated as an SVG
const QuoteIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.29166 17.7084L17.7083 7.29169M17.7083 7.29169H7.29166M17.7083 7.29169V17.7084" stroke="#F3F3F3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

);


const Hero= () => {
  const [settings, setSettings] = useState<GlobalSettings | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await cmsApi.getSettings();
        setSettings(data);
      } catch (error) {
        console.error('Failed to fetch settings:', error);
      }
    };
    fetchSettings();
  }, []);

  // NOTE: Replace this with the actual URL or path to your hero image.
  const heroImageUrl = settings?.hero_image || 'https://res.cloudinary.com/dobqxxtml/image/upload/v1759083000/b16da8c5-83c7-49aa-a157-725f02ca5753.png';
  const heroTitle = settings?.hero_title || "Exclusive Offices & Workspaces in the Center of Kochi.";
  const heroDescription = settings?.hero_description || "Covspace is a premier coworking and shared workspace provider based in Kochi, Kerala. We offer fully managed private offices, collaborative coworking spaces, conference rooms, and virtual office services.";
  
  const { openQuote } = useQuotePanel();

  const handleQuoteClick = () => {
    openQuote();
  };

  return (
    <div 
      className="relative w-full min-h-[100vh] sm:h-[500px] md:h-[600px] lg:h-[900px] bg-cover bg-center font-sans"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center', 
      }}
    >
      {/* Overlay to darken the image slightly for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20 sm:opacity-20"></div>

      {/* Container to position the content - mobile-first responsive */}
      <div className="relative h-full flex items-center justify-center sm:justify-start max-w-screen-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        {/* The frosted glass content box - fully responsive */}
        <div className="bg-white/80 sm:bg-white/75 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 md:p-12 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto sm:mx-0">
          
          {/* Heading - responsive typography */}
          <h1 
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight text-center sm:text-left" 
            style={{ fontFamily: 'Istok Web', fontStyle: 'italic' }}
          >
             {heroTitle}
          </h1>

          {/* Paragraph description - responsive text sizing */}
          <p 
            className="mt-4 sm:mt-6 text-gray-600 text-xs xs:text-sm sm:text-sm md:text-base leading-relaxed text-center sm:text-left" 
            style={{ fontFamily: 'Istok Web', fontStyle: 'italic' }}
          >
            {heroDescription}
          </p>

          {/* Quick Quote Button - mobile-optimized */}
          <div className="mt-6 sm:mt-8 flex justify-center sm:justify-start">
            <button 
              onClick={handleQuoteClick}
              className="flex items-center justify-center space-x-2 text-white font-bold py-3 px-4 sm:px-6 rounded-md hover:bg-lime-600 active:bg-lime-700 transition-colors duration-300 shadow-md min-h-[48px] min-w-[140px] text-sm sm:text-base touch-manipulation" 
              style={{ backgroundColor: '#5AB834' }}
              aria-label="Get a quick quote for our workspace services"
            >
              <span>QUICK QUOTE</span>
              <QuoteIcon />
            </button>
          </div>
          
        </div>

      </div>

      {/* Mobile scroll indicator (optional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m0 0l7-7"></path>
          </svg>
        </div>
      </div>


    </div>
  );
};

export default Hero;
