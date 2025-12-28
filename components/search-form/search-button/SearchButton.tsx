const SearchButton = () => {
  return (
    <button
      type="submit"
      aria-label="بحث"
      className="focus:ring-brand-medium flex min-w-14 cursor-pointer justify-center bg-gray-200/70 py-2.5 text-xs leading-5 font-medium shadow-xs transition-colors duration-300 hover:bg-gray-300/70 focus:outline-none md:text-sm lg:text-sm"
    >
      <svg
        className="h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      </svg>
    </button>
  );
};

export default SearchButton;
