import ArticleCard from "@/components/ArticleCard";
import { posts } from "@/lib/mockData";
import Image from "next/image";

export default async function page() {
  return (
    <>
      {/* main post */}
      <div className="w-full h-125 aspect-square overflow-hidden relative rounded-lg my-shadow">
        <div className="bottom-0 left-0 absolute flex flex-col gap-1 z-10 w-full h-full bg-linear-to-tr from-main via-black/10 p-6 text-white to-black/0 justify-end">
          <span className="font-light text-sm text-muted opacity-80">
            Life Style
          </span>
          <h2 className="text-3xl font-medium">Who am I ?</h2>
          <p className="text-sm opacity-60">
            <strong>By</strong> Djawad Mousavian
          </p>
        </div>
        <Image
          src={"/profile.jpg"}
          alt=""
          fill
          className="w-full h-full rounded-lg object-cover z-0"
        />
      </div>
      <div className="my-shadow w-full rounded-lg bg-main py-2 px-4 capitalize font-bold text-lg text-background">
        Latest Posts
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gird-rows-auto gap-4">
        {posts.map((p) => (
          <ArticleCard key={p._id} {...p} />
        ))}
      </div>
    </>
  );
}

// async function getPopularPosts() {
//   const res: Response = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`
//   );
//   return res.json();
// }
