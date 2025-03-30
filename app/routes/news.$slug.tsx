import { newsItems } from '~/data/newsData';
import { json } from '@remix-run/node';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { marked } from 'marked';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  const article = newsItems.find(item => item.slug === slug);

  if (!article) {
    throw new Response("Not Found", { status: 404 });
  }

  try {
    const filePath = join(process.cwd(), 'app', 'content', 'news', `${slug}.md`);
    const content = readFileSync(filePath, 'utf-8');
    return json({ article, content: marked(content) });
  } catch (error) {
    console.error(`Error reading markdown file for slug ${slug}:`, error);
    return json({ article, content: '' });
  }
}

export default function NewsArticle() {
  const { article, content } = useLoaderData<typeof loader>();

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md">
      <div className="py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-x-4">
            <span className="inline-flex items-center rounded-full bg-gray-500 px-3 py-1 text-sm font-medium text-primary">
              {article.category}
            </span>
            <time className="text-sm text-gray-400">
              {article.publishedAt}
            </time>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {article.title}
          </h1>

          {article.author.name && (
            <div className="mt-6 flex items-center gap-x-4">
              {article.author.avatar && (
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name} 
                  className="h-12 w-12 rounded-full bg-gray-50 ring-2 ring-white shadow-sm" 
                />
              )}
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">By {article.author.name}</p>
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

        <div className="mt-10 prose prose-lg max-w-none
          prose-headings:text-gray-900
          prose-p:text-gray-600
          prose-strong:text-gray-900
          prose-ul:text-gray-600
          prose-li:text-gray-600
          prose-a:text-primary hover:prose-a:text-primary/80
          prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
} 