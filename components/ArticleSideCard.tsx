import Image from "next/image";
import React from "react";

export default function ArticleSideCard() {
  return (
    <article className="flex gap-4 h-24 rounded-lg my-shadow p-4">
      <div className="h-full w-24 relative">
        <Image
          src={"/profile.jpg"}
          alt=""
          className="object-cover rounded-md"
          fill
        />
      </div>
      <div className="flex flex-col">
        <h4>Lorem ipsum dolor sit amet.</h4>
        <span className="text-xs text-muted-foreground">24 january 2022</span>
      </div>
    </article>
  );
}
