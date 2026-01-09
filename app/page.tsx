"use client";
import BlogCard from "@/components/blog-card";
import SearchForm from "@/components/search-form";
import { Book, books } from "@/data/books";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const updateBooks = (books: Book[]) => setFilteredBooks(books);

  return (
    <>
      <SearchForm updateBooks={updateBooks} />
      <section className="mt-3 mb-8 grid grid-cols-1 justify-items-center gap-x-8 gap-y-10 p-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book) => (
          <Link key={book.id} href={`/books/${book.slug}`}>
            <BlogCard book={book} />
          </Link>
        ))}
      </section>
    </>
  );
}
