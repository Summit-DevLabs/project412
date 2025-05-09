import { Link } from '@remix-run/react';
import { newsItems } from '../data/newsData';

export default function NewsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Latest News
          </h2>
          <div className="mt-3 h-1 w-20 bg-white rounded"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (

            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-indigo-500/10 
                ${index % 3 === 0 ? 'lg:col-span-2' : ''}`}
            >
              <Link
                key={item.id}
                to={`news/${item.slug}`}
                className="group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={item.imagePath}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-x-4">
                    <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-primary">
                      {item.category}
                    </span>
                    <time className="text-sm text-gray-400">
                    {item.publishedAt}
                    </time>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-tight text-white group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-x-3">
                    <button className="inline-flex items-center text-sm font-medium text-white group-hover:text-primary">
                      Read more
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </article>

          ))}
        </div>
      </div>
    </section>
  );
}