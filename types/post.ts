import { Author } from "@/types/author";

export interface Post {
  _id: string;
  image: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  publishedAt: string;
  category: string;
  author: Author;
}
