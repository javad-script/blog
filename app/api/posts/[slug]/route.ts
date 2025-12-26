import { posts } from "@/lib/mockData";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post)
    return Response.json(
      { error: "Post Not Found" },
      {
        headers: { "Content-Type": "application/json" },
        status: 404,
      }
    );
  return Response.json(post, {
    headers: { "Content-Type": "application/json" },
  });
}
