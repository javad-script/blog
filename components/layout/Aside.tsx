import ArticleSideCard from "@/components/ArticleSideCard";
import { posts } from "@/lib/mockData";
import Link from "next/link";

export default function Aside() {
  return (
    <aside className="w-full h-auto lg:min-w-xs lg:max-w-sm lg:h-full">
      <div className="lg:sticky top-23 left-0 space-y-6">
        <section className="flex flex-col gap-3">
          <div className="my-shadow w-full rounded-lg bg-main py-2 text-center capitalize font-bold text-lg text-background">
            Popular Posts
          </div>
          {posts.slice(0, 3).map((p) => (
            <ArticleSideCard key={p._id} {...p} />
          ))}
        </section>
        <section className="flex flex-col gap-4">
          <div className="my-shadow w-full rounded-lg bg-main py-2 text-center capitalize font-bold text-lg text-background">
            Popular Categories
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={"/posts?category=technology"}>
              <div className="capitalize text-background bg-muted-foreground py-1.5 px-2 rounded-sm font-semibold text-sm">
                Technology
              </div>
            </Link>
            <Link href={"/posts?category=technology"}>
              <div className="capitalize text-background bg-muted-foreground py-1.5 px-2 rounded-sm font-semibold text-sm">
                Technology
              </div>
            </Link>
            <Link href={"/posts?category=technology"}>
              <div className="capitalize text-background bg-muted-foreground py-1.5 px-2 rounded-sm font-semibold text-sm">
                Technology
              </div>
            </Link>
            <Link href={"/posts?category=technology"}>
              <div className="capitalize text-background bg-muted-foreground py-1.5 px-2 rounded-sm font-semibold text-sm">
                Technology
              </div>
            </Link>
            <Link href={"/posts?category=technology"}>
              <div className="capitalize text-background bg-muted-foreground py-1.5 px-2 rounded-sm font-semibold text-sm">
                Technology
              </div>
            </Link>
          </div>
        </section>
      </div>
    </aside>
  );
}
