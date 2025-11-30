import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cmsApi } from '../lib/api';
import { BlogPost } from '../types/cms';

export default function Blogs() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await cmsApi.getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

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

          {loading ? (
            <div className="text-center py-20">Loading posts...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <span className="absolute top-3 left-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-900 shadow-sm">
                      Blog
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2">
                      <span>{formatDate(post.publishedAt || post.createdAt)}</span>
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
                      <Link
                        to={`/blogs/${post.slug}`}
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
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
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

