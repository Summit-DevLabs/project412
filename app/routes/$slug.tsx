import { useParams, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { newsItems } from "~/data/newsData";
import type { NewsItem } from "~/utils";

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  // For now, return the first news item
  // TODO: Implement actual data fetching based on slug
  return json({ article: newsItems[0] });
};

export default function ArticlePage() {
  const { article } = useLoaderData<{ article: NewsItem }>();
  
  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <header className="mb-8">
        <span className="text-sm text-gray-500 mb-4">{article.category}</span>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-lg text-gray-600">{article.description}</p>
      </header>

      <img
        src={article.imagePath}
        alt={article.title}
        className="w-full aspect-video object-cover rounded-lg mb-8"
      />

      <div className="prose prose-lg max-w-none">
        {article.description}
      </div>
    </article>
  );
} 