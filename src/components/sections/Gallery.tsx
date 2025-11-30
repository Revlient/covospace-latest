import { useState, useEffect } from 'react';
import LeftClipped from "../leftClipped";
import RightClipped from "../rightClipped";
import { useNavigate } from 'react-router-dom';
import { cmsApi } from '../../lib/api';
import { GalleryImage } from '../../types/cms';

// const Image = () => (
//   <div className="w-full h-full mx-auto max-w-4xl">
//     <img 
//       src="https://res.cloudinary.com/dobqxxtml/image/upload/v1759127262/gallery_frame_dernd4.png" 
//       alt="gallery" 
//       className="w-full h-auto object-contain rounded-lg sm:rounded-xl shadow-lg" 
//     />
//   </div>
// )

// Reusable SVG icon for the arrow link
const ArrowIcon = () => (
  <div className="flex-shrink-0">
    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  </div>
)

// Reusable SVG icon for the quote
const QuoteIcon = () => (
  <div className="flex-shrink-0">
    <svg 
      className="w-8 h-6 sm:w-10 sm:h-8 md:w-12 md:h-9" 
      viewBox="0 0 49 37" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-outside-1_15_131" maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="37" fill="black">
        <rect fill="white" width="49" height="37"/>
        <path d="M13.792 17.128C16.512 17.384 18.64 18.344 20.176 20.008C21.744 21.64 22.528 23.784 22.528 26.44C22.528 29.32 21.632 31.608 19.84 33.304C18.08 34.968 15.648 35.8 12.544 35.8C9.056 35.8 6.416 34.792 4.624 32.776C2.864 30.728 1.984 27.672 1.984 23.608C1.984 19.704 2.672 15.816 4.048 11.944C5.456 8.04 7.36 4.536 9.76 1.432H18.784C17.312 4.536 16.16 7.336 15.328 9.832C14.496 12.296 13.984 14.728 13.792 17.128ZM38.56 17.128C41.28 17.384 43.408 18.344 44.944 20.008C46.512 21.64 47.296 23.784 47.296 26.44C47.296 29.32 46.4 31.608 44.608 33.304C42.848 34.968 40.416 35.8 37.312 35.8C33.824 35.8 31.184 34.792 29.392 32.776C27.632 30.728 26.752 27.672 26.752 23.608C26.752 19.704 27.44 15.816 28.816 11.944C30.224 8.04 32.128 4.536 34.528 1.432H43.552C42.08 4.536 40.928 7.336 40.096 9.832C39.264 12.296 38.752 14.728 38.56 17.128Z"/>
      </mask>
      <path d="M13.792 17.128C16.512 17.384 18.64 18.344 20.176 20.008C21.744 21.64 22.528 23.784 22.528 26.44C22.528 29.32 21.632 31.608 19.84 33.304C18.08 34.968 15.648 35.8 12.544 35.8C9.056 35.8 6.416 34.792 4.624 32.776C2.864 30.728 1.984 27.672 1.984 23.608C1.984 19.704 2.672 15.816 4.048 11.944C5.456 8.04 7.36 4.536 9.76 1.432H18.784C17.312 4.536 16.16 7.336 15.328 9.832C14.496 12.296 13.984 14.728 13.792 17.128ZM38.56 17.128C41.28 17.384 43.408 18.344 44.944 20.008C46.512 21.64 47.296 23.784 47.296 26.44C47.296 29.32 46.4 31.608 44.608 33.304C42.848 34.968 40.416 35.8 37.312 35.8C33.824 35.8 31.184 34.792 29.392 32.776C27.632 30.728 26.752 27.672 26.752 23.608C26.752 19.704 27.44 15.816 28.816 11.944C30.224 8.04 32.128 4.536 34.528 1.432H43.552C42.08 4.536 40.928 7.336 40.096 9.832C39.264 12.296 38.752 14.728 38.56 17.128Z" fill="white"/>
      <path d="M13.792 17.128L12.7952 17.0483L12.7166 18.0312L13.6983 18.1236L13.792 17.128ZM20.176 20.008L19.4412 20.6863L19.448 20.6936L19.4549 20.7008L20.176 20.008ZM19.84 33.304L20.527 34.0306L20.5274 34.0303L19.84 33.304ZM4.624 32.776L3.86558 33.4278L3.87103 33.4341L3.87659 33.4404L4.624 32.776ZM4.048 11.944L3.1073 11.6047L3.10573 11.6091L4.048 11.944ZM9.76 1.432V0.431997H9.26914L8.96889 0.820318L9.76 1.432ZM18.784 1.432L19.6875 1.86048L20.365 0.431997H18.784V1.432ZM15.328 9.832L16.2755 10.1519L16.2767 10.1482L15.328 9.832ZM38.56 17.128L37.5632 17.0483L37.4846 18.0312L38.4663 18.1236L38.56 17.128ZM44.944 20.008L44.2092 20.6863L44.216 20.6936L44.2229 20.7008L44.944 20.008ZM44.608 33.304L45.295 34.0306L45.2954 34.0303L44.608 33.304ZM29.392 32.776L28.6336 33.4278L28.639 33.4341L28.6446 33.4404L29.392 32.776ZM28.816 11.944L27.8753 11.6047L27.8737 11.6091L28.816 11.944ZM34.528 1.432V0.431997H34.0371L33.7369 0.820318L34.528 1.432ZM43.552 1.432L44.4556 1.86048L45.133 0.431997H43.552V1.432ZM40.096 9.832L41.0435 10.1519L41.0447 10.1482L40.096 9.832ZM13.792 17.128L13.6983 18.1236C16.2261 18.3615 18.1055 19.2393 19.4412 20.6863L20.176 20.008L20.9108 19.3297C19.1745 17.4487 16.7979 16.4065 13.8857 16.1324L13.792 17.128ZM20.176 20.008L19.4549 20.7008C20.8132 22.1146 21.528 23.9943 21.528 26.44H22.528H23.528C23.528 23.5737 22.6748 21.1654 20.8971 19.3152L20.176 20.008ZM22.528 26.44H21.528C21.528 29.0953 20.7114 31.1024 19.1526 32.5777L19.84 33.304L20.5274 34.0303C22.5526 32.1136 23.528 29.5447 23.528 26.44H22.528ZM19.84 33.304L19.153 32.5774C17.6266 34.0204 15.4672 34.8 12.544 34.8V35.8V36.8C15.8288 36.8 18.5334 35.9156 20.527 34.0306L19.84 33.304ZM12.544 35.8V34.8C9.25252 34.8 6.92155 33.8555 5.37141 32.1116L4.624 32.776L3.87659 33.4404C5.91046 35.7285 8.85948 36.8 12.544 36.8V35.8ZM4.624 32.776L5.38242 32.1242C3.8404 30.3299 2.984 27.5495 2.984 23.608H1.984H0.984C0.984 27.7945 1.8876 31.1261 3.86558 33.4278L4.624 32.776ZM1.984 23.608H2.984C2.984 19.824 3.65045 16.049 4.99027 12.2789L4.048 11.944L3.10573 11.6091C1.69355 15.583 0.984 19.584 0.984 23.608H1.984ZM4.048 11.944L4.98869 12.2833C6.36338 8.47163 8.21845 5.06058 10.5511 2.04368L9.76 1.432L8.96889 0.820318C6.50155 4.01142 4.54862 7.60837 3.10731 11.6047L4.048 11.944ZM9.76 1.432V2.432H18.784V1.432V0.431997H9.76V1.432ZM18.784 1.432L17.8805 1.00351C16.3961 4.13364 15.2273 6.97196 14.3793 9.51577L15.328 9.832L16.2767 10.1482C17.0928 7.70003 18.2279 4.93835 19.6875 1.86048L18.784 1.432ZM15.328 9.832L14.3806 9.51208C13.5244 12.0476 12.9942 14.5602 12.7952 17.0483L13.792 17.128L14.7888 17.2077C14.9738 14.8958 15.4676 12.5444 16.2754 10.1519L15.328 9.832ZM38.56 17.128L38.4663 18.1236C40.9941 18.3615 42.8735 19.2393 44.2092 20.6863L44.944 20.008L45.6788 19.3297C43.9425 17.4487 41.5659 16.4065 38.6537 16.1324L38.56 17.128ZM44.944 20.008L44.2229 20.7008C45.5812 22.1146 46.296 23.9943 46.296 26.44H47.296H48.296C48.296 23.5737 47.4428 21.1654 45.6651 19.3152L44.944 20.008ZM47.296 26.44H46.296C46.296 29.0953 45.4794 31.1024 43.9206 32.5777L44.608 33.304L45.2954 34.0303C47.3206 32.1136 48.296 29.5447 48.296 26.44H47.296ZM44.608 33.304L43.921 32.5774C42.3946 34.0204 40.2352 34.8 37.312 34.8V35.8V36.8C40.5968 36.8 43.3014 35.9156 45.295 34.0306L44.608 33.304ZM37.312 35.8V34.8C34.0205 34.8 31.6895 33.8555 30.1394 32.1116L29.392 32.776L28.6446 33.4404C30.6785 35.7285 33.6275 36.8 37.312 36.8V35.8ZM29.392 32.776L30.1504 32.1242C28.6084 30.3299 27.752 27.5495 27.752 23.608H26.752H25.752C25.752 27.7945 26.6556 31.1261 28.6336 33.4278L29.392 32.776ZM26.752 23.608H27.752C27.752 19.824 28.4184 16.049 29.7583 12.2789L28.816 11.944L27.8737 11.6091C26.4616 15.583 25.752 19.584 25.752 23.608H26.752ZM28.816 11.944L29.7567 12.2833C31.1314 8.47163 32.9865 5.06058 35.3191 2.04368L34.528 1.432L33.7369 0.820318C31.2696 4.01142 29.3166 7.60837 27.8753 11.6047L28.816 11.944ZM34.528 1.432V2.432H43.552V1.432V0.431997H34.528V1.432ZM43.552 1.432L42.6485 1.00351C41.1641 4.13364 39.9953 6.97196 39.1473 9.51577L40.096 9.832L41.0447 10.1482C41.8608 7.70003 42.9959 4.93835 44.4556 1.86048L43.552 1.432ZM40.096 9.832L39.1486 9.51208C38.2924 12.0476 37.7622 14.5602 37.5632 17.0483L38.56 17.128L39.5568 17.2077C39.7418 14.8958 40.2356 12.5444 41.0434 10.1519L40.096 9.832Z" fill="black" mask="url(#path-1-outside-1_15_131)"/>
    </svg>
  </div>
);


const Gallery = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await cmsApi.getGallery();
        setImages(data);
      } catch (error) {
        console.error('Failed to fetch gallery:', error);
      }
    };
    fetchImages();
  }, []);

  const handleGalleryClick = () => {
    navigate('/gallery');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  // Helper to get image URL safely
  const getImg = (index: number, fallback: string) => {
    return images[index]?.imageUrl || fallback;
  };

  return (
    <section className="relative bg-white py-8 sm:py-12 md:py-16 lg:py-20 font-sans overflow-hidden">
      <style>{`.hide-below-824{display:block} @media (max-width:823px){.hide-below-824{display:none !important}} .hide-below-694{display:block} @media (max-width:693px){.hide-below-694{display:none !important}}`}</style>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section - Mobile Responsive */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="block sm:inline">Bold Workspaces</span>
            <span className="block sm:inline"> Built To</span>
            <span className="block sm:inline"> Inspire You.</span>
          </h2>
        </div>

        {/* Image Section - Responsive */}
        <div className="mb-8 sm:mb-12 md:mb-16 flex gap-4 items-end justify-center">
          {/* <Image /> */}
          <div className="flex flex-col gap-4">
              <div className="cursor-pointer" onClick={handleGalleryClick}>
                <LeftClipped className="h-[300px] w-[250px] rounded-xl overflow-clip hide-below-824">
                <img  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"  src={getImg(0, "/gallery/l1.jpg")}  />
              </LeftClipped>
              </div>
            <div className="rounded-xl overflow-clip h-[150px] w-[250px] hide-below-824 cursor-pointer" onClick={handleGalleryClick}>
              <img  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"  src={getImg(1, "/gallery/l3.jpg")} />
            </div>
          </div>
          
          <div className="cursor-pointer" onClick={handleGalleryClick}>
            <LeftClipped className="h-[300px] w-[250px] rounded-xl overflow-clip hide-below-694">
              <img  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"  src={getImg(2, "/gallery/l2.jpg")} />
            </LeftClipped>
          </div>
          <div>
          <div className="w-[250px] h-[300px] rounded-xl overflow-clip bg-red-400 cursor-pointer" onClick={handleGalleryClick}>
            <img  className=" w-full object-cover transition-transform duration-300 hover:scale-105"  src={getImg(3, "/gallery/m.jpg")} />
          </div>
                      {/* Connect Us Button - Mobile Optimized */}
            <div className="flex justify-center m-2">
              <button className="bg-lime-500 hover:bg-lime-600 active:bg-lime-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl text-md sm:text-base transition-colors duration-300 shadow-lg hover:shadow-xl min-h-[48px] w-full touch-manipulation">
                CONNECT US
              </button>
            </div>
          </div>
          
          <div className="cursor-pointer" onClick={handleGalleryClick}>
            <RightClipped className="h-[300px] w-[250px]  rounded-xl overflow-clip hide-below-694">
              <img  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"  src={getImg(4, "/gallery/r1.jpg")} />
            </RightClipped>
          </div>
          <div className="flex flex-col gap-2">
              <div className="cursor-pointer" onClick={handleGalleryClick}>
                <RightClipped className="h-[300px] w-[250px]  rounded-xl overflow-clip hide-below-824">
                <img  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"  src={getImg(5, "/gallery/r2.jpg")} />
              </RightClipped>
              </div>
            {/* <RightClipped className="h-[150px] w-[250px] rounded-[40px]"> */}
            <div className="rounded-xl overflow-clip h-[150px] w-[250px] hide-below-824 cursor-pointer" onClick={handleGalleryClick}>
              <img  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"  src={getImg(6, "/gallery/r3.jpg")} />

            </div>
            {/* </RightClipped> */}
          </div>
        </div>

        

        {/* Bottom Section - Responsive Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 lg:gap-12">
          
          {/* Quote Section - Mobile First */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <QuoteIcon />
              <div className="flex-1">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed italic">
                  "The workspace you choose can make or break your productivity. Choose wisely, work boldly."
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  — Covspace Team
                </p>
              </div>
            </div>
          </div>

          {/* Upgrade Link - Mobile Optimized */}
          <div className="order-1 lg:order-2 flex-shrink-0">
            <button 
              onClick={handleGalleryClick}
              className="inline-flex items-center gap-3 sm:gap-4 text-gray-800 hover:text-lime-600 transition-colors duration-300 group cursor-pointer"
            >
              <span className="text-sm sm:text-base md:text-lg font-medium">
                Upgrade your office
              </span>
              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                <ArrowIcon />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
