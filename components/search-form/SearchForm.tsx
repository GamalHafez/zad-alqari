"use client";

import { Book, books } from "@/data/books";
import SearchButton from "./search-button";

const findBooks = (books: Book[], query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  return books.filter((book) => {
    return (
      book.title.toLowerCase().includes(lowerCaseQuery) ||
      book.author.toLowerCase().includes(lowerCaseQuery)
    );
  });
};

const SearchForm = ({
  updateBooks,
}: {
  updateBooks: (books: Book[]) => void;
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searched = formData.get("search-form") as string;

    const filteredBooks = findBooks(books, searched.trim());
    filteredBooks ? updateBooks(filteredBooks) : updateBooks([]);
    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 flex max-w-3xs place-self-center overflow-hidden rounded-3xl border border-gray-300 md:w-1/2 lg:w-1/2"
    >
      <input
        type="search"
        name="search-form"
        className="w-full border-x border-gray-300 px-3.5 text-sm placeholder:text-xs focus:ring-gray-100 focus:outline-none"
        placeholder="إبحث عن كتاب أو مؤلف"
        aria-label="بحث عن كتاب أو مؤلف"
      />

      <SearchButton />
    </form>
  );
};

export default SearchForm;
