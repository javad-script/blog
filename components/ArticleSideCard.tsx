import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = Pick<Post, "image" | "publishedAt" | "title" | "slug">;

export default function ArticleSideCard({
  image,
  publishedAt,
  title,
  slug,
}: Props) {
  return (
    <article className="flex gap-4 h-24 rounded-lg my-shadow p-4">
      <div className="h-full w-24 relative">
        <Image src={image} alt="" className="object-cover rounded-md" fill />
      </div>
      <div className="flex flex-col">
        <Link href={`/posts/${slug}`}>
          <h4 className="line-clamp-1 hover:text-main transition duration-200">
            {title}
          </h4>
        </Link>
        <span className="text-xs text-muted-foreground">
          {new Date(publishedAt).toLocaleString()}
        </span>
      </div>
    </article>
  );
}
