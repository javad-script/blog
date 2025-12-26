import { posts } from "@/lib/mockData";

export async function GET() {
  try {
    return Response.json(posts, {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return Response.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
