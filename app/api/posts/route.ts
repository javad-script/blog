import { posts } from "@/lib/mockData";
import { Post } from "@/types/post";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search")?.trim();

    const filteredPosts = search ? filterPosts(posts, search) : posts;

    return Response.json(filteredPosts);
  } catch {
    return Response.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

function filterPosts(posts: Post[], searchText: string) {
  const search = searchText.toLowerCase();
  return posts.filter(
    (p) =>
      (p.title?.toLowerCase() ?? "").includes(search) ||
      (p.description?.toLowerCase() ?? "").includes(search) ||
      (p.content?.toLowerCase() ?? "").includes(search)
  );
}
