import { useState, useEffect } from 'react';
import { cmsApi } from '../../lib/api';
import { BlogPost } from '../../types/cms';

const SeeMoreIcon = () => (
  <svg 
    className="w-full h-full text-black" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
  </svg>
);

const Blog = () => {
  const [blogData, setBlogData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await cmsApi.getPosts();
        // Take only the first 8 posts for the home page section
        setBlogData(data.slice(0, 8));
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    // Mobile-first responsive container
    <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="bg-black text-white font-sans rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
          
          {/* Header section with title and button */}
          <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:text-left" 
              style={{fontFamily : 'cursive'}}
            >
              Blogs
            </h2>
            <button className="bg-lime-500 hover:bg-lime-600 active:bg-lime-700 transition-colors text-black text-sm sm:text-base font-semibold flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-2 rounded-full min-h-[48px] sm:min-h-[44px] touch-manipulation mx-auto sm:mx-0 w-fit">
              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8">
                <SeeMoreIcon />
              </div>
              <a href="/blogs"><span>See More</span></a>
            </button>
          </header>

          {/* Responsive grid for blog posts */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              
              {blogData.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group min-h-[280px] sm:min-h-[320px] flex flex-col"
                >
                  {/* Blog Image */}
                  <div className="relative h-40 sm:h-44 md:h-36 lg:h-32 xl:h-36 overflow-hidden flex-shrink-0">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  
                  {/* Blog Content */}
                  <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                    <h3 className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg line-clamp-2 mb-2 sm:mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-3 mb-2 sm:mb-3 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm mt-auto">
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
