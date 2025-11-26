import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Designing Workspaces That Inspire',
    excerpt:
      'How thoughtful coworking design in Kochi can boost focus, collaboration, and everyday happiness at work.',
    date: 'Jan 10, 2025',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop',
    author: 'Covspace Team',
    category: 'Workspace Design',
  },
  {
    id: 2,
    title: 'Why Flexible Workspaces Matter for Startups',
    excerpt:
      'From early-stage experiments to scaling teams, flexible offices give founders room to grow without long-term leases.',
    date: 'Dec 28, 2024',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop',
    author: 'Covspace Team',
    category: 'Startups',
  },
  {
    id: 3,
    title: 'Building Community Inside a Coworking Space',
    excerpt:
      'Events, introductions, and small everyday rituals that turn shared offices into real professional communities.',
    date: 'Dec 12, 2024',
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=500&fit=crop',
    author: 'Covspace Team',
    category: 'Community',
  },
  {
    id: 4,
    title: 'Productivity Rituals for Hybrid Professionals',
    excerpt:
      'Simple routines to stay productive when your week is split between home, office, and coworking spaces.',
    date: 'Nov 30, 2024',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
    author: 'Covspace Team',
    category: 'Productivity',
  },
  {
    id: 5,
    title: 'Choosing the Right Workspace in Kochi',
    excerpt:
      'Key things to consider when comparing coworking spaces, private cabins, and traditional offices in the city.',
    date: 'Nov 18, 2024',
    image:
      'https://res.cloudinary.com/dobqxxtml/image/upload/v1759947739/DSCN0683_dlbtql.jpg?w=800&h=500&fit=crop',
    author: 'Covspace Team',
    category: 'Guides',
  },
  {
    id: 6,
    title: 'Hosting Client Meetings at Covspace',
    excerpt:
      'Create a strong first impression with well-equipped, welcoming meeting spaces in the heart of Kochi.',
    date: 'Nov 05, 2024',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    author: 'Covspace Team',
    category: 'Meetings',
  },
];

export default function Blogs() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759945668/group-business-executives-working-together_m0lxs8.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Covspace <span className="text-lime-400">Blog</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                Insights, stories, and updates from our coworking community in Kochi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Latest from Covspace
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                Explore how teams, founders, and professionals are using coworking to do their best work.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <span className="absolute top-3 left-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-900 shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <button
                      type="button"
                      className="inline-flex items-center text-sm font-semibold text-lime-600 group-hover:text-lime-700 transition-colors"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

