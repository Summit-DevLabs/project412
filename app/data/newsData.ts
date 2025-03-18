import { NewsItem } from "../utils";


export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Latest Development Update',
    category: 'Development',
    description: 'Exciting new features and improvements coming to our platform.',
    imagePath: '/media/IMG_0247.jpg',
    span: 'large',
    content: "",
    author: {
      name: "",
      avatar: undefined
    },
    publishedAt: new Date(),
    slug: 'latest-development-update',
  },
  {
    id: '2',
    title: 'Community Spotlight',
    category: 'Community',
    description: 'Highlighting outstanding contributions from our community members.',
    imagePath: '/media/IMG_0247.jpg',
    span: 'small',
    content: "",
    author: {
      name: "",
      avatar: undefined
    },
    publishedAt: new Date(),
    slug: 'community-spotlight',
  },
  {
    id: '3',
    title: 'Community Spotlight',
    category: 'Community',
    description: 'Highlighting outstanding contributions from our community members.',
    imagePath: '/media/IMG_0247.jpg',
    span: 'small',
    content: "",
    author: {
      name: "",
      avatar: undefined
    },
    publishedAt: new Date(),
    slug: ""
  },
  {
    id: '4',
    title: 'Community Spotlight',
    category: 'Community',
    description: 'Highlighting outstanding contributions from our community members.',
    imagePath: '/media/IMG_0247.jpg',
    span: 'large',
    content: "",
    author: {
      name: "",
      avatar: undefined
    },
    publishedAt: new Date(),
    slug: ""
  },
];

export const mockArticle: NewsItem = {
  id: "1",
  title: "The Future of Web Development: A 2024 Perspective",
  category: "Technology",
  description: "Exploring emerging trends and technologies shaping the future of web development.",
  content: `# The Future of Web Development

Web development is evolving at an unprecedented pace. From new frameworks to innovative approaches, 
the landscape continues to transform how we build for the web.

## Key Trends

- AI-powered development tools
- Edge computing and serverless architectures
- Web Assembly and enhanced performance
- Improved developer experience

These changes are reshaping how we approach modern web applications...`,
  imagePath: "/media/web-dev-future.jpg",
  author: {
    name: "Alex Chen",
    avatar: "/media/avatars/alex-chen.jpg"
  },
  publishedAt: new Date("2024-01-15"),
  slug: "future-of-web-development-2024",
  tags: ["Web Development", "Technology", "Programming", "Future Tech"],
  readTime: 5
};
