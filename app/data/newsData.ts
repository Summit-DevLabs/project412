import { NewsItem } from "../utils";


export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Latest Development Update',
    category: 'Development',
    description: 'Exciting new features and improvements coming to our platform.',
    imagePath: '/media/IMG_0247.jpg',
    span: 'large',
    author: {
      name: "John Doe",
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
    author: {
      name: "Test Name",
      avatar: undefined
    },
    publishedAt: new Date(),
    slug: 'community-spotlight-1',
  },
  {
    id: '3',
    title: 'Community Spotlight',
    category: 'Community',
    description: 'Highlighting outstanding contributions from our community members.',
    imagePath: '/media/IMG_0247.jpg',
    span: 'small',
    author: {
      name: "",
      avatar: undefined
    },
    publishedAt: new Date(),
    slug: 'community-spotlight-2',
  },
  {
    id: '4',
    title: 'Community Spotlight',
    category: 'Community',
    description: 'Highlighting outstanding contributions from our community members.',
    imagePath: '/media/IMG_0247.jpg',
    span: 'large',
    author: {
      name: "",
      avatar: undefined
    },
    publishedAt: new Date(),
    slug: 'community-spotlight-3',
  },
];

export const mockArticle: NewsItem = {
  id: "1",
  title: "The Future of Web Development: A 2024 Perspective",
  category: "Technology",
  description: "Exploring emerging trends and technologies shaping the future of web development.",
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
