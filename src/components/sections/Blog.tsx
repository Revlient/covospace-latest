
const blogData = [
  {
    id: 1,
    title: "The Future of Remote Work",
    excerpt: "Exploring how coworking spaces are reshaping the modern workplace experience.",
    date: "Dec 15, 2023",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Productivity Tips for Entrepreneurs",
    excerpt: "Essential strategies to maximize your efficiency in a shared workspace environment.",
    date: "Dec 12, 2023",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Building Your Network",
    excerpt: "How coworking spaces foster meaningful professional connections and collaborations.",
    date: "Dec 8, 2023",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Design Trends in Workspaces",
    excerpt: "Latest interior design trends that are transforming office spaces worldwide.",
    date: "Dec 5, 2023",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Sustainable Office Practices",
    excerpt: "Green initiatives and eco-friendly practices for modern workspaces.",
    date: "Dec 1, 2023",
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Work-Life Balance Guide",
    excerpt: "Maintaining healthy boundaries while working in flexible environments.",
    date: "Nov 28, 2023",
    image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=250&fit=crop"
  },
  {
    id: 7,
    title: "Technology in Coworking",
    excerpt: "How smart technology is enhancing the coworking experience for professionals.",
    date: "Nov 25, 2023",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
  },
  {
    id: 8,
    title: "Community Building Strategies",
    excerpt: "Creating strong communities within shared workspace environments.",
    date: "Nov 22, 2023",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
  }
];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            
            {blogData.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group min-h-[280px] sm:min-h-[320px] flex flex-col"
              >
                {/* Blog Image */}
                <div className="relative h-40 sm:h-44 md:h-36 lg:h-32 xl:h-36 overflow-hidden flex-shrink-0">
                  <img 
                    src={post.image} 
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
                    {post.date}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
