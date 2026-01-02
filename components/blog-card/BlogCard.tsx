import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book } from "@/data/books";

const BlogCard = ({ book }: { book: Book }) => {
  const { title, description, author, category, cover } = book;
  
  return (
    <Card className="group w-3xs cursor-pointer overflow-hidden border-0 shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <Image
        src={cover}
        alt="Post cover"
        width={400}
        height={300}
        className="h-48 w-full rounded-xl object-cover px-2"
      />

      <CardContent>
        <Badge
          variant="outline"
          className="text-blue-700 transition-colors duration-300 group-hover:bg-blue-100 group-hover:text-blue-800"
        >
          {category}
        </Badge>

        <h3 className="mt-3 mb-1 text-lg leading-snug font-semibold transition duration-300 group-hover:text-blue-800">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>

      <CardFooter className="text-muted-foreground flex justify-between gap-1.5 text-sm">
        <h3>• {author}</h3>
        <button
          type="button"
          className="group inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-blue-700 transition-colors duration-300 hover:text-blue-800"
        >
          اقرأ أكثر
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
