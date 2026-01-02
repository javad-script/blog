import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ArticleCard(props: Post) {
  return (
    <article className="w-full h-96 my-shadow relative overflow-hidden rounded-lg flex flex-col">
      {/* Image Section */}
      <div className="relative h-46 shrink-0">
        <Image
          src={props.image}
          fill
          alt={props.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-1 py-2 px-4 h-full">
        <span className="font-light text-sm text-main opacity-80">
          {props.category}
        </span>

        {/* Title */}
        <Link href={`/posts/${props.slug}`}>
          <h2 className="text-xl font-serif font-medium line-clamp-1 hover:text-main transition duration-200">
            {props.title}
          </h2>
        </Link>

        {/* Description */}
        <div className="flex-1 flex items-center">
          <p className="line-clamp-3 my-2 h-[3lh]">{props.description}</p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={props.author.profileImage}
              alt={props.author.name}
              className="object-cover"
            />
            <AvatarFallback>{props.author.name[0]}</AvatarFallback>
          </Avatar>
          <Link href={`/profile/${props.author.profileSlug}`}>
            <span className="text-sm font-bold text-foreground">
              {props.author.name}
            </span>
          </Link>
          {/* Meta */}
          <span className="ml-auto text-sm text-gray-500">
            {new Date(props.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </article>
  );
}
