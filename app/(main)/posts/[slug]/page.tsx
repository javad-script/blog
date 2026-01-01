import { posts } from "@/lib/mockData";
import { Post } from "@/types/post";
import Image from "next/image";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: Post = posts[1];
  return (
    <div className="flex flex-col gap-6">
      <div className="">
        <div className="w-full h-100 aspect-square overflow-hidden relative rounded-lg my-shadow">
          <Image
            src={post.image}
            alt=""
            fill
            className="w-full h-full rounded-lg object-cover z-0"
          />
        </div>
        <h1 className="text-4xl font-bold mt-4">{post.title}</h1>
        <div className="mt-2">
          <span>
            <strong>By</strong>
            <span className="text-muted-foreground ml-2">
              {post.author.name}
            </span>
          </span>
          <span className="text-muted-foreground text-sm ml-10">
            {post.publishedAt}
          </span>
        </div>
      </div>
      <div>{post.content}</div>
    </div>
  );
}
