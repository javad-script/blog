import Header from "@/components/layout/Header";

export default async function page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { search } = await searchParams;
  return (
    <>
      <Header />
      {search}
    </>
  );
}
