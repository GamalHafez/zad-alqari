import { Badge } from "@/components/ui/badge";
import { books } from "@/data/books";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);

  return (
    <div className="mx-2 mt-3 mb-8 py-5 md:mx-24 lg:mx-32">
      <Badge
        variant="outline"
        className="bg-blue-900 px-4 text-sm text-white transition-colors duration-300 hover:bg-blue-950"
      >
        {book?.category}
      </Badge>

      <h2 className="mt-4 text-2xl font-bold">{book?.title}</h2>
      <h3 className="text-md mt-1 font-semibold text-gray-700">
        لـ {book?.author}
      </h3>

      <Image
        src={book?.cover || ""}
        alt="Post cover"
        width={400}
        height={300}
        className="w-full rounded-lg py-4"
      />

      <p className="mt-1 text-gray-800">{book?.description}</p>
    </div>
  );
};

export default Page;
