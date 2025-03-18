import { newsItems } from '~/data/newsData';
import { getArticleContent } from '~/utils/markdown';
import { json } from '@remix-run/node';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  const article = newsItems.find(item => item.slug === slug);
  
  if (!article) {
    throw new Response("Not Found", { status: 404 });
  }

  const content = getArticleContent(slug!);
  
  return json({ article, content });
}

export default function NewsArticle() {
  const { article, content } = useLoaderData<typeof loader>();

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md">
      <div className="py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-x-4">
            <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-primary">
              {article.category}
            </span>
            <time className="text-sm text-gray-400">
              {new Date(article.publishedAt).toLocaleDateString()}
            </time>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {article.title}
          </h1>

          {article.author.name && (
            <div className="mt-6 flex items-center gap-x-4">
              {article.author.avatar && (
                <img src={article.author.avatar} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              )}
              <div className="text-sm leading-6">
                <p className="font-semibold text-black">{article.author.name}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <img
            src={article.imagePath}
            alt={article.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mt-10 prose prose-lg" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  );
} 