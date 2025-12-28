"use client";

import SearchButton from "./search-button";

const SearchForm = () => {
  return (
    <form className="mt-12 flex max-w-3xs place-self-center overflow-hidden rounded-3xl border border-gray-300 md:w-1/2 lg:w-1/2">
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
