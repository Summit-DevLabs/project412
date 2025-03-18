import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export function getArticleContent(slug: string) {
  const filePath = join(process.cwd(), 'app', 'content', 'news', `${slug}.md`);
  const fileContent = readFileSync(filePath, 'utf-8');
  const { content } = matter(fileContent);
  
  return marked(content);
} 