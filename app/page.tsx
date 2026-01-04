import BlogCard from "@/components/blog-card";
import SearchForm from "@/components/search-form";
import { books } from "@/data/books";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SearchForm />
      <section className="mt-3 mb-8 grid grid-cols-1 justify-items-center gap-x-8 gap-y-10 p-5 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Link key={book.id} href={`/books/${book.slug}`}>
            <BlogCard book={book} />
          </Link>
        ))}
      </section>
    </>
  );
}
