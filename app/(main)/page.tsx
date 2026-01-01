import ArticleCard from "@/components/ArticleCard";
import ArticleSideCard from "@/components/ArticleSideCard";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { posts } from "@/lib/mockData";
import Image from "next/image";
import Link from "next/link";

export default async function page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { search } = await searchParams;
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

export function Aside() {
  return (
    <aside className="w-full h-auto lg:min-w-xs lg:max-w-sm lg:h-full">
      <div className="lg:sticky top-23 left-0 space-y-6">
        <section className="flex flex-col gap-3">
          <div className="my-shadow w-full rounded-lg bg-main py-2 text-center capitalize font-bold text-lg text-background">
            Popular Posts
          </div>
          <ArticleSideCard />
          <ArticleSideCard />
          <ArticleSideCard />
        </section>
        <section className="flex flex-col gap-4">
          <div className="my-shadow w-full rounded-lg bg-main py-2 text-center capitalize font-bold text-lg text-background">
            Popular Categories
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={"/?search=technology"}>
              <div className="capitalize text-background bg-muted-foreground py-1.5 px-2 rounded-sm font-semibold text-sm">
                Technology
              </div>
            </Link>
            <Link href={"/?search=technology"}>
              <div className="capitalize text-background bg-muted-foreground py-1.5 px-2 rounded-sm font-semibold text-sm">
                Technology
              </div>
            </Link>
            <Link href={"/?search=technology"}>
              <div className="capitalize text-background bg-muted-foreground py-1.5 px-2 rounded-sm font-semibold text-sm">
                Technology
              </div>
            </Link>
            <Link href={"/?search=technology"}>
              <div className="capitalize text-background bg-muted-foreground py-1.5 px-2 rounded-sm font-semibold text-sm">
                Technology
              </div>
            </Link>
            <Link href={"/?search=technology"}>
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
