import BookPurposes from "@/components/book-purposes";
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

  // TODO: Handle book not found
  if (!book) return <div>الكتاب غير موجود</div>;

  const { title, description, author, category, cover, purposes } = book;

  return (
    <div className="mx-2 mt-3 mb-8 py-5 md:mx-24 lg:mx-32">
      <Badge
        variant="outline"
        className="bg-blue-900 px-4 text-sm text-white transition-colors duration-300 hover:bg-blue-950"
      >
        {category}
      </Badge>

      <h2 className="mt-4 pl-1 text-2xl font-bold">
        {title}
        <span className="mr-2 text-base font-semibold text-gray-700">
          لـ {author}
        </span>
      </h2>

      <Image
        src={cover || ""}
        alt="Post cover"
        width={400}
        height={300}
        className="w-full rounded-lg py-4"
      />

      <h3 className="mt-4 text-lg font-semibold">مقصد الكتاب:</h3>
      <p className="mt-1 text-gray-800">{description}</p>

      <BookPurposes purposes={purposes || []} />
    </div>
  );
};

export default Page;
