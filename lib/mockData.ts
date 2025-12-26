import { Post } from "../types/post";
import { Author } from "../types/author";

export const authors: Author[] = [
  {
    _id: "a1",
    name: "Javad Ahmadi",
    profileImage: "https://example.com/avatar1.jpg",
  },
  {
    _id: "a2",
    name: "Sara Karimi",
    profileImage: "https://example.com/avatar2.jpg",
  },
  {
    _id: "a3",
    name: "Ali Rezaei",
    profileImage: "https://example.com/avatar3.jpg",
  },
];

export const posts: Post[] = [
  {
    _id: "p1",
    title: "Learning Next.js Basics",
    slug: "learning-nextjs-basics",
    desc: "An introduction to Next.js 16 and React 19.",
    content: "Full article content here...",
    image: "https://example.com/post1.jpg",
    publishedAt: "2025-12-26",
    category: "Web Development",
    author: authors[0],
  },
  {
    _id: "p2",
    title: "TypeScript Tips",
    slug: "typescript-tips",
    desc: "Best practices for TypeScript in real projects.",
    content: "Full article content here...",
    image: "https://example.com/post2.jpg",
    publishedAt: "2025-12-25",
    category: "Programming",
    author: authors[1],
  },
  {
    _id: "p3",
    title: "Tailwind CSS Guide",
    slug: "tailwind-css-guide",
    desc: "Design beautiful UI with Tailwind CSS.",
    content: "Full article content here...",
    image: "https://example.com/post3.jpg",
    publishedAt: "2025-12-24",
    category: "Design",
    author: authors[2],
  },
];
