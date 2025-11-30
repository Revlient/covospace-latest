import { useState, useEffect } from 'react';
import TestimonialCardBackground from "../ui/TestimonalBackground";
import QuoteIcon from "../ui/QuoteIcon";
import { cmsApi } from '../../lib/api';
import { Testimonial } from '../../types/cms';

// --- Single Testimonial Card Component ---
const TestimonialCard = ({ quote, name, handle, imageUrl }: { quote: string; name: string; handle: string; imageUrl: string }) => {
  return (
    <div className="flex flex-col h-full min-h-[280px] sm:min-h-[320px] md:min-h-[300px] lg:min-h-[320px]">
      <div className="relative rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-5 md:mb-6 flex-grow">
        <TestimonialCardBackground />
        <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col">
          <div className="flex-shrink-0 mb-3 sm:mb-4">
            <QuoteIcon />
          </div>
          <p className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed flex-grow flex items-center">
            "{quote}"
          </p>
        </div>
      </div>
      <div className="flex items-center px-2 sm:px-4 lg:px-6 flex-shrink-0">
        <img 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0" 
          src={imageUrl} 
          alt={name}
          loading="lazy"
        />
        <div className="ml-3 sm:ml-4 min-w-0 flex-1">
          <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{name}</p>
          <p className="text-gray-500 text-xs sm:text-sm truncate">{handle}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Testimonials Section Component ---
const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await cmsApi.getTestimonials();
        setTestimonialsData(data);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-500"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
            <span className="block sm:inline">Listen what our</span>
            <span className="text-green-500 font-medium"> users</span>
            <span className="block sm:inline"> have to say</span>
          </h2>
        </div>
        
        {/* Mobile: Single Column */}
        <div className="block sm:hidden">
          <div className="space-y-6">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.clientName}
                handle={testimonial.role}
                imageUrl={testimonial.avatarUrl}
              />
            ))}
          </div>
        </div>

        {/* Tablet: Two Columns */}
        <div className="hidden sm:block md:hidden">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.clientName}
                handle={testimonial.role}
                imageUrl={testimonial.avatarUrl}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Three Columns */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.clientName}
                handle={testimonial.role}
                imageUrl={testimonial.avatarUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                handle={testimonial.handle}
                imageUrl={testimonial.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
