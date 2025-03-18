import { NewsItem } from "../utils";


export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Latest Development Update',
    category: 'Development',
    description: 'Exciting new features and improvements coming to our platform.',
    imagePath: '/media/IMG_0247.jpg',
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
    author: {
      name: "Test Name",
      avatar: undefined
    },
    publishedAt: new Date(),
    slug: 'community-spotlight-1',
  },
  
];
