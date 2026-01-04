import { books } from "@/data/books";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  // if (!book) notFound();

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold">{book?.title}</h1>
      <p className="mt-2 text-gray-600">{book?.description}</p>
    </div>
  );
};

export default Page;
