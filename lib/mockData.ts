import { Post } from "../types/post";
import { Author } from "../types/author";

export const authors: Author[] = [
  {
    _id: "a1",
    name: "Javad Ahmadi",
    profileImage: "/profile.jpg",
    profileSlug: "javad-ahmadi",
  },
  {
    _id: "a2",
    name: "Sara Karimi",
    profileImage: "/profile.jpg",
    profileSlug: "sara-karimi",
  },
  {
    _id: "a3",
    name: "Ali Rezaei",
    profileImage: "/profile.jpg",
    profileSlug: "ali-rezaei",
  },
];

export const posts: Post[] = [
  {
    _id: "p1",
    title: "Learning Next.js Basics",
    slug: "learning-nextjs-basics",
    description:
      "An introduction to Next.js 16 and React 19 , typescript, tailwind , vscode , git ,github ,javascript from starting web dev",
    content: "Full article content here...",
    image: "/post-image.jpg",
    publishedAt: "2025-12-26",
    category: "Web Development",
    author: authors[0],
  },
  {
    _id: "p2",
    title: "TypeScript Tips",
    slug: "typescript-tips",
    description: "Best practices for TypeScript in real projects.",
    content: "Full article content here...",
    image: "/post-image.jpg",
    publishedAt: "2025-12-25",
    category: "Programming",
    author: authors[1],
  },
  {
    _id: "p3",
    title: "Tailwind CSS Guide",
    slug: "tailwind-css-guide",
    description: "Design beautiful UI with Tailwind CSS.",
    content: "Full article content here...",
    image: "/post-image.jpg",
    publishedAt: "2025-12-24",
    category: "Design",
    author: authors[2],
  },
];
